import React from "react";
import { render, screen, waitFor, act, fireEvent } from "@testing-library/react";
import ZestDropdownMenu from "../UI/ZestDropdownMenu";
import { ZestDropdownOption } from "../UI/ZestButton";

// Radix opens DropdownMenu.Trigger on pointerdown, not click — jsdom's plain
// .click() doesn't dispatch a pointerdown, so tests must fire it explicitly.
function openTrigger(trigger: HTMLElement) {
  act(() => {
    fireEvent.pointerDown(trigger, { button: 0, pointerType: "mouse" });
    fireEvent.pointerUp(trigger, { button: 0, pointerType: "mouse" });
  });
}

function renderMenu(
  options: ZestDropdownOption[],
  overrides: Partial<React.ComponentProps<typeof ZestDropdownMenu>> = {}
) {
  const onOpenChange = jest.fn();
  const utils = render(
    <ZestDropdownMenu
      options={options}
      ariaLabel="More options"
      open={false}
      onOpenChange={onOpenChange}
      variant="standard"
      size="md"
      buttonStyle="solid"
      effectiveTheme="light"
      {...overrides}
    />
  );
  return { ...utils, onOpenChange };
}

describe("ZestDropdownMenu", () => {
  it("renders a trigger button with the given accessible name, closed by default", () => {
    renderMenu([{ label: "Export as CSV" }]);

    const trigger = screen.getByRole("button", { name: "More options" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("opens the menu and lists the options when the trigger is clicked", async () => {
    // Uses a real state-backed wrapper (not the jest.fn() helper) because
    // ZestDropdownMenu's `open` is a fully controlled prop — a mock
    // onOpenChange that doesn't feed back into `open` would never actually
    // open the menu, regardless of what Radix's internal toggle logic does.
    const ControlledMenu: React.FC = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <ZestDropdownMenu
          options={[{ label: "Export as CSV" }, { label: "Export as PDF" }]}
          ariaLabel="More options"
          open={open}
          onOpenChange={setOpen}
          variant="standard"
          size="md"
          buttonStyle="solid"
          effectiveTheme="light"
        />
      );
    };
    render(<ControlledMenu />);

    openTrigger(screen.getByRole("button", { name: "More options" }));

    expect(await screen.findByRole("menuitem", { name: "Export as CSV" })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: "Export as PDF" })).toBeInTheDocument();
  });

  it("calls onOpenChange when the trigger is clicked", () => {
    const { onOpenChange } = renderMenu([{ label: "Export as CSV" }]);

    openTrigger(screen.getByRole("button", { name: "More options" }));

    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("applies the dark theme class to both the trigger and the menu content when effectiveTheme is dark", async () => {
    renderMenu([{ label: "Export as CSV" }], { open: true, effectiveTheme: "dark" });

    expect(screen.getByRole("button", { name: "More options" })).toHaveClass("force-dark");
    const content = (await screen.findByRole("menuitem", { name: "Export as CSV" })).closest(
      '[role="menu"]'
    );
    expect(content).toHaveClass("force-dark");
  });

  it("exposes data-state on the menu content for CSS-driven open/close animation", async () => {
    renderMenu([{ label: "Export as CSV" }], { open: true });

    const content = (await screen.findByRole("menuitem", { name: "Export as CSV" })).closest(
      '[role="menu"]'
    );
    expect(content).toHaveAttribute("data-state", "open");
  });

  it("exposes data-side on the menu content for transform-origin CSS", async () => {
    renderMenu([{ label: "Export as CSV" }], { open: true });

    const content = (await screen.findByRole("menuitem", { name: "Export as CSV" })).closest(
      '[role="menu"]'
    );
    expect(content).toHaveAttribute("data-side");
  });

  it("themes the menu content via effectiveMenuTheme independently from the trigger's effectiveTheme", async () => {
    renderMenu([{ label: "Export as CSV" }], {
      open: true,
      effectiveTheme: "dark",
      effectiveMenuTheme: "light",
    });

    expect(screen.getByRole("button", { name: "More options" })).toHaveClass("force-dark");
    const content = (await screen.findByRole("menuitem", { name: "Export as CSV" })).closest(
      '[role="menu"]'
    );
    expect(content).toHaveClass("force-light");
  });

  it("applies menuMinWidth as an inline min-width style on the menu content", async () => {
    renderMenu([{ label: "Export as CSV" }], { open: true, menuMinWidth: 260 });

    const content = (await screen.findByRole("menuitem", { name: "Export as CSV" })).closest(
      '[role="menu"]'
    ) as HTMLElement;
    expect(content.style.minWidth).toBe("260px");
  });

  it("passes a string menuMinWidth through as-is", async () => {
    renderMenu([{ label: "Export as CSV" }], { open: true, menuMinWidth: "18rem" });

    const content = (await screen.findByRole("menuitem", { name: "Export as CSV" })).closest(
      '[role="menu"]'
    ) as HTMLElement;
    expect(content.style.minWidth).toBe("18rem");
  });

  it("disables the trigger when disabled is true", () => {
    renderMenu([{ label: "Export as CSV" }], { disabled: true });

    expect(screen.getByRole("button", { name: "More options" })).toBeDisabled();
  });

  it("reflects open state via aria-expanded when open=true", () => {
    renderMenu([{ label: "Export as CSV" }], { open: true });

    expect(screen.getByRole("button", { name: "More options" })).toHaveAttribute(
      "aria-expanded",
      "true"
    );
  });

  it("reports aggregate busy state across items via onAnyItemBusyChange", async () => {
    const onAnyItemBusyChange = jest.fn();
    const onClick = jest.fn().mockResolvedValue(undefined);
    renderMenu(
      [
        {
          label: "Archive",
          onClick,
          busyOptions: { minBusyDurationMs: 0 },
          successOptions: { autoResetAfterMs: 100000 },
        },
      ],
      { open: true, onAnyItemBusyChange }
    );

    const item = await screen.findByRole("menuitem", { name: "Archive" });
    act(() => {
      item.click();
    });

    await waitFor(() => expect(onAnyItemBusyChange).toHaveBeenCalledWith(true));
    await waitFor(() => expect(onAnyItemBusyChange).toHaveBeenLastCalledWith(false));
  });
});
