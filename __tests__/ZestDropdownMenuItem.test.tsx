import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { render, screen, waitFor, act } from "@testing-library/react";
import ZestDropdownMenuItem from "../UI/ZestDropdownMenuItem";
import { ZestDropdownOption } from "../UI/ZestButton";

function renderInMenu(option: ZestDropdownOption, extraProps: { disabled?: boolean; onBusyChange?: (busy: boolean) => void } = {}) {
  return render(
    <DropdownMenu.Root open modal={false}>
      <DropdownMenu.Trigger>trigger</DropdownMenu.Trigger>
      <DropdownMenu.Content forceMount>
        <ZestDropdownMenuItem option={option} {...extraProps} />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

describe("ZestDropdownMenuItem", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders its label", () => {
    renderInMenu({ label: "Export as CSV" });
    expect(screen.getByRole("menuitem")).toHaveTextContent("Export as CSV");
  });

  it("calls onClick synchronously when handleInternally is false", () => {
    const onClick = jest.fn();
    renderInMenu({
      label: "Rename",
      onClick,
      busyOptions: { handleInternally: false },
    });

    const item = screen.getByRole("menuitem");
    act(() => {
      item.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true }));
      item.dispatchEvent(new MouseEvent("pointerup", { bubbles: true }));
      item.click();
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("shows a busy state then success on resolve (handleInternally default true)", async () => {
    const onClick = jest.fn().mockResolvedValue(undefined);
    renderInMenu({
      label: "Archive",
      onClick,
      busyOptions: { minBusyDurationMs: 0 },
      successOptions: { autoResetAfterMs: 100000 },
    });

    const item = screen.getByRole("menuitem");
    act(() => {
      item.click();
    });

    await waitFor(() => expect(item.querySelector('path[d="M5 13l4 4L19 7"]')).toBeInTheDocument());
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("shows failure and reports busy transitions via onBusyChange", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const onClick = jest.fn().mockRejectedValue(new Error("boom"));
    const onBusyChange = jest.fn();
    renderInMenu(
      {
        label: "Delete",
        onClick,
        busyOptions: { minBusyDurationMs: 0 },
        successOptions: { autoResetAfterMs: 100000 },
      },
      { onBusyChange }
    );

    const item = screen.getByRole("menuitem");
    act(() => {
      item.click();
    });

    await waitFor(() => expect(item.querySelector('path[d="M6 6L18 18"]')).toBeInTheDocument());
    expect(onBusyChange).toHaveBeenCalledWith(true);
    expect(onBusyChange).toHaveBeenLastCalledWith(false);
  });

  it("requires a second activation to confirm when confirmOptions is set", () => {
    const onClick = jest.fn();
    renderInMenu({
      label: "Delete",
      onClick,
      confirmOptions: { displayLabel: "Confirm Delete", timeoutSecs: 5 },
    });

    const item = screen.getByRole("menuitem");
    act(() => {
      item.click();
    });
    expect(onClick).not.toHaveBeenCalled();
    expect(item).toHaveTextContent("Confirm Delete (5s)");

    act(() => {
      item.click();
    });
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("cancels the confirmation and marks the item failed when the countdown expires", () => {
    jest.useFakeTimers();
    const onClick = jest.fn();
    renderInMenu({
      label: "Delete",
      onClick,
      confirmOptions: { displayLabel: "Confirm Delete", timeoutSecs: 5 },
    });

    const item = screen.getByRole("menuitem");
    act(() => {
      item.click();
    });
    expect(item).toHaveTextContent("Confirm Delete (5s)");

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(item).toHaveTextContent("Delete");
    expect(onClick).not.toHaveBeenCalled();
    expect(item).toHaveClass("shake");

    jest.useRealTimers();
  });

  it("warns when confirmOptions is set without onClick", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    renderInMenu({
      label: "Delete",
      confirmOptions: { displayLabel: "Confirm Delete", timeoutSecs: 5 },
    });

    act(() => {
      screen.getByRole("menuitem").click();
    });

    expect(warn).toHaveBeenCalledWith(
      "ZestButton dropdown item: 'confirmOptions' provided but 'onClick' is missing."
    );
  });

  it("renders a custom icon when provided and idle", () => {
    renderInMenu({
      label: "Export as CSV",
      icon: <span data-testid="csv-icon">CSV</span>,
      busyOptions: { handleInternally: false },
    });

    expect(screen.getByTestId("csv-icon")).toBeInTheDocument();
  });

  it("is disabled when externally disabled, and does not call onClick", () => {
    const onClick = jest.fn();
    renderInMenu(
      { label: "Archive", onClick, busyOptions: { handleInternally: false } },
      { disabled: true }
    );

    const item = screen.getByRole("menuitem");
    expect(item).toHaveAttribute("aria-disabled", "true");

    act(() => {
      item.click();
    });
    expect(onClick).not.toHaveBeenCalled();
  });

  it("is disabled when option.disabled is set", () => {
    renderInMenu({ label: "Archive", disabled: true });

    expect(screen.getByRole("menuitem")).toHaveAttribute("aria-disabled", "true");
  });
});
