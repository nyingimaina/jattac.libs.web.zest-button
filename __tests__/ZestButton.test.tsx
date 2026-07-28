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
});
