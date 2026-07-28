import React from "react";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import ZestButton from "../UI/ZestButton";

describe("ZestButton", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("rendering & pass-through", () => {
    it("renders its children", () => {
      render(<ZestButton>Click me</ZestButton>);
      expect(screen.getByRole("button")).toHaveTextContent("Click me");
    });

    it("forwards native button attributes", () => {
      render(
        <ZestButton type="submit" id="my-button" data-testid="zest">
          Submit
        </ZestButton>
      );

      const button = screen.getByTestId("zest");
      expect(button).toHaveAttribute("type", "submit");
      expect(button).toHaveAttribute("id", "my-button");
    });

    it("applies default variant/size/style classes and merges a custom className", () => {
      render(<ZestButton className="custom-class">Click me</ZestButton>);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("standard", "md", "solid", "custom-class");
    });

    it("applies variant/size overrides from zest.visualOptions", () => {
      render(
        <ZestButton zest={{ visualOptions: { variant: "danger", size: "lg" } }}>
          Delete
        </ZestButton>
      );

      const button = screen.getByRole("button");
      expect(button).toHaveClass("danger", "lg");
    });

    it("renders a custom iconLeft when idle and not busy/success/fail", () => {
      render(
        <ZestButton
          zest={{ visualOptions: { iconLeft: <span data-testid="custom-icon">*</span> } }}
        >
          Go
        </ZestButton>
      );

      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });
  });

  describe("plain click (handleInternally: false)", () => {
    it("calls onClick synchronously and never enters a busy state", () => {
      const onClick = jest.fn();
      render(
        <ZestButton zest={{ busyOptions: { handleInternally: false } }} onClick={onClick}>
          Go
        </ZestButton>
      );

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(button).toHaveAttribute("aria-busy", "false");
    });
  });

  describe("internally handled async click (default handleInternally: true)", () => {
    it("shows a busy state immediately, then success on resolve", async () => {
      const onClick = jest.fn().mockResolvedValue(undefined);
      render(
        <ZestButton
          zest={{
            busyOptions: { minBusyDurationMs: 0 },
            successOptions: { autoResetAfterMs: 100000 },
          }}
          onClick={onClick}
        >
          Save
        </ZestButton>
      );

      const button = screen.getByRole("button");
      fireEvent.click(button);

      // startBusy() runs synchronously before the first await, so this is
      // observable immediately after the click event without waiting.
      expect(button).toHaveAttribute("aria-busy", "true");

      await waitFor(() => expect(button).toHaveAttribute("aria-busy", "false"));

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(button.querySelector('path[d="M5 13l4 4L19 7"]')).toBeInTheDocument();
    });

    it("pads the busy state out to minBusyDurationMs when the click resolves early", async () => {
      jest.useFakeTimers();
      const onClick = jest.fn().mockResolvedValue(undefined);
      render(
        <ZestButton
          zest={{
            busyOptions: { minBusyDurationMs: 500 },
            successOptions: { autoResetAfterMs: 100000 },
          }}
          onClick={onClick}
        >
          Save
        </ZestButton>
      );

      const button = screen.getByRole("button");
      await act(async () => {
        fireEvent.click(button);
        // Let the resolved onClick promise's microtask settle without
        // advancing real/fake time yet.
        await Promise.resolve();
      });
      expect(button).toHaveAttribute("aria-busy", "true");

      act(() => {
        jest.advanceTimersByTime(499);
      });
      expect(button).toHaveAttribute("aria-busy", "true");

      await act(async () => {
        jest.advanceTimersByTime(1);
      });
      expect(button).toHaveAttribute("aria-busy", "false");

      jest.useRealTimers();
    });

    it("shows a failure state and disables further clicks when onClick rejects", async () => {
      jest.spyOn(console, "error").mockImplementation(() => {});
      const onClick = jest.fn().mockRejectedValue(new Error("boom"));
      render(
        <ZestButton
          zest={{
            busyOptions: { minBusyDurationMs: 0 },
            successOptions: { autoResetAfterMs: 100000 },
          }}
          onClick={onClick}
        >
          Save
        </ZestButton>
      );

      const button = screen.getByRole("button");
      fireEvent.click(button);

      await waitFor(() => expect(button).toHaveAttribute("aria-busy", "false"));

      expect(button).toHaveClass("shake");
      expect(button.querySelector('path[d="M6 6L18 18"]')).toBeInTheDocument();
      // preventRageClick defaults to true, so a failed click also disables
      // the button until the shake/fail state clears.
      expect(button).toBeDisabled();
    });

    it("does not re-invoke onClick while a busy click is still in flight", async () => {
      let resolveClick: () => void = () => {};
      const onClick = jest.fn(
        () =>
          new Promise<void>((resolve) => {
            resolveClick = resolve;
          })
      );
      render(
        <ZestButton zest={{ busyOptions: { minBusyDurationMs: 0 } }} onClick={onClick}>
          Save
        </ZestButton>
      );

      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(button).toBeDisabled();

      // The button is natively disabled while busy, so a second click is a
      // no-op at the DOM level — this is the real-world rage-click guard.
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);

      await act(async () => {
        resolveClick();
      });
    });
  });

  describe("confirmOptions flow", () => {
    it("requires a second click to confirm, showing a countdown label first", () => {
      const onClick = jest.fn();
      render(
        <ZestButton
          zest={{
            confirmOptions: { displayLabel: "Confirm Delete", timeoutSecs: 5 },
            busyOptions: { handleInternally: false },
          }}
          onClick={onClick}
        >
          Delete
        </ZestButton>
      );

      const button = screen.getByRole("button");
      expect(button).toHaveTextContent("Delete");

      fireEvent.click(button);
      expect(onClick).not.toHaveBeenCalled();
      expect(button).toHaveTextContent("Confirm Delete (5s)");

      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(button).toHaveTextContent("Delete");
    });

    it("warns when confirmOptions is set without onClick", () => {
      const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
      render(
        <ZestButton
          zest={{ confirmOptions: { displayLabel: "Confirm Delete", timeoutSecs: 5 } }}
        >
          Delete
        </ZestButton>
      );

      fireEvent.click(screen.getByRole("button"));

      expect(warn).toHaveBeenCalledWith(
        "ZestButton: 'confirmOptions' are provided but 'onClick' handler is missing."
      );
    });

    it("cancels the confirmation and marks the button failed when the countdown expires", () => {
      jest.useFakeTimers();
      const onClick = jest.fn();
      render(
        <ZestButton
          zest={{
            confirmOptions: { displayLabel: "Confirm Delete", timeoutSecs: 5 },
            busyOptions: { handleInternally: false },
          }}
          onClick={onClick}
        >
          Delete
        </ZestButton>
      );

      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(button).toHaveTextContent("Confirm Delete (5s)");

      act(() => {
        jest.advanceTimersByTime(5000);
      });

      expect(button).toHaveTextContent("Delete");
      expect(onClick).not.toHaveBeenCalled();
      expect(button).toHaveClass("shake");

      jest.useRealTimers();
    });
  });

  describe("isDefault Enter-key trigger", () => {
    it("clicks the button on a document-level Enter keydown when isDefault is true", () => {
      const onClick = jest.fn();
      render(
        <ZestButton
          zest={{ isDefault: true, busyOptions: { handleInternally: false } }}
          onClick={onClick}
        >
          Go
        </ZestButton>
      );

      fireEvent.keyDown(document, { key: "Enter" });

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("does not trigger the Enter listener when the button is disabled", () => {
      const onClick = jest.fn();
      render(
        <ZestButton
          zest={{ isDefault: true, busyOptions: { handleInternally: false } }}
          onClick={onClick}
          disabled
        >
          Go
        </ZestButton>
      );

      fireEvent.keyDown(document, { key: "Enter" });

      expect(onClick).not.toHaveBeenCalled();
    });

    it("does not trigger when Enter originates from a textarea", () => {
      const onClick = jest.fn();
      render(
        <>
          <ZestButton
            zest={{ isDefault: true, busyOptions: { handleInternally: false } }}
            onClick={onClick}
          >
            Go
          </ZestButton>
          <textarea data-testid="notes" />
        </>
      );

      fireEvent.keyDown(screen.getByTestId("notes"), { key: "Enter" });

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe("aria-busy prop override", () => {
    it("respects an explicit aria-busy prop over internal busy state", () => {
      render(
        <ZestButton zest={{ busyOptions: { handleInternally: false } }} aria-busy={true}>
          Go
        </ZestButton>
      );

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-busy", "true");
      expect(button).toBeDisabled();
    });
  });

  describe("dropdownOptions (split button)", () => {
    function openTrigger(trigger: HTMLElement) {
      act(() => {
        fireEvent.pointerDown(trigger, { button: 0, pointerType: "mouse" });
        fireEvent.pointerUp(trigger, { button: 0, pointerType: "mouse" });
      });
    }

    it("renders exactly as today when dropdownOptions is absent — no chevron, no wrapper", () => {
      const { container } = render(<ZestButton>Click me</ZestButton>);

      expect(container.firstChild).toHaveProperty("tagName", "BUTTON");
      expect(screen.queryByRole("button", { name: /more options/i })).not.toBeInTheDocument();
    });

    it("renders exactly as today when dropdownOptions is an empty array", () => {
      const { container } = render(<ZestButton zest={{ dropdownOptions: [] }}>Click me</ZestButton>);

      expect(container.firstChild).toHaveProperty("tagName", "BUTTON");
      expect(screen.queryByRole("button", { name: /more options/i })).not.toBeInTheDocument();
    });

    it("renders a main segment and a chevron trigger when dropdownOptions is non-empty", () => {
      render(
        <ZestButton zest={{ dropdownOptions: [{ label: "Export as CSV" }] }}>Export</ZestButton>
      );

      expect(screen.getByRole("button", { name: "Export" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "More options" })).toBeInTheDocument();
    });

    it("clicking the main segment fires the default action directly, without opening the menu", () => {
      const onClick = jest.fn();
      render(
        <ZestButton
          zest={{ busyOptions: { handleInternally: false }, dropdownOptions: [{ label: "Export as CSV" }] }}
          onClick={onClick}
        >
          Export
        </ZestButton>
      );

      fireEvent.click(screen.getByRole("button", { name: "Export" }));

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(screen.queryByRole("menuitem")).not.toBeInTheDocument();
    });

    it("clicking the chevron opens a menu listing the dropdown options", async () => {
      render(
        <ZestButton
          zest={{
            dropdownOptions: [{ label: "Export as CSV" }, { label: "Export as PDF" }],
          }}
        >
          Export
        </ZestButton>
      );

      openTrigger(screen.getByRole("button", { name: "More options" }));

      expect(await screen.findByRole("menuitem", { name: "Export as CSV" })).toBeInTheDocument();
      expect(screen.getByRole("menuitem", { name: "Export as PDF" })).toBeInTheDocument();
    });

    it("uses a custom dropdownAriaLabel when provided", () => {
      render(
        <ZestButton
          zest={{
            dropdownAriaLabel: "Export options",
            dropdownOptions: [{ label: "Export as CSV" }],
          }}
        >
          Export
        </ZestButton>
      );

      expect(screen.getByRole("button", { name: "Export options" })).toBeInTheDocument();
    });

    it("disables the whole control (main segment + chevron) while a menu item is busy", async () => {
      let resolveClick: () => void = () => {};
      const onClick = jest.fn(
        () =>
          new Promise<void>((resolve) => {
            resolveClick = resolve;
          })
      );
      render(
        <ZestButton
          zest={{
            dropdownOptions: [
              {
                label: "Archive",
                onClick,
                busyOptions: { minBusyDurationMs: 0 },
              },
            ],
          }}
        >
          Export
        </ZestButton>
      );

      openTrigger(screen.getByRole("button", { name: "More options" }));
      const item = await screen.findByRole("menuitem", { name: "Archive" });

      act(() => {
        item.click();
      });

      await waitFor(() => expect(screen.getByRole("button", { name: "Export" })).toBeDisabled());
      expect(screen.getByRole("button", { name: "More options" })).toBeDisabled();

      await act(async () => {
        resolveClick();
      });

      await waitFor(() => expect(screen.getByRole("button", { name: "Export" })).not.toBeDisabled());
      expect(screen.getByRole("button", { name: "More options" })).not.toBeDisabled();
    });

    it("suppresses the isDefault Enter-key listener while the dropdown menu is open", async () => {
      const onClick = jest.fn();
      render(
        <ZestButton
          zest={{
            isDefault: true,
            busyOptions: { handleInternally: false },
            dropdownOptions: [{ label: "Export as CSV" }],
          }}
          onClick={onClick}
        >
          Export
        </ZestButton>
      );

      openTrigger(screen.getByRole("button", { name: "More options" }));
      await screen.findByRole("menuitem", { name: "Export as CSV" });

      fireEvent.keyDown(document, { key: "Enter" });

      expect(onClick).not.toHaveBeenCalled();
    });

    it("isDefault Enter-key still fires the main action when the menu is closed", () => {
      const onClick = jest.fn();
      render(
        <ZestButton
          zest={{
            isDefault: true,
            busyOptions: { handleInternally: false },
            dropdownOptions: [{ label: "Export as CSV" }],
          }}
          onClick={onClick}
        >
          Export
        </ZestButton>
      );

      fireEvent.keyDown(document, { key: "Enter" });

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
