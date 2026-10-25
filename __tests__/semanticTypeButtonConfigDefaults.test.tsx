import { semanticTypeButtonConfigDefaults } from "../UI/semanticTypeButtonConfigDefaults";
import { ZEST_ICON_NAMES } from "../UI/zestIcons";
import type { SemanticType } from "../UI/ZestButton";

const EXISTING_TYPES: SemanticType[] = [
  "add",
  "new",
  "save",
  "submit",
  "edit",
  "update",
  "delete",
  "remove",
  "cancel",
  "close",
  "view",
  "details",
  "download",
  "upload",
  "refresh",
  "reload",
  "print",
  "share",
  "confirm",
];

const NEW_TYPES: SemanticType[] = [
  "search",
  "filter",
  "sort",
  "copy",
  "paste",
  "back",
  "next",
  "home",
  "menu",
  "more",
  "settings",
  "help",
  "info",
  "warning",
  "send",
  "login",
  "logout",
  "undo",
  "redo",
  "approve",
  "reject",
  "favorite",
  "attach",
  "lock",
  "unlock",
  "archive",
  "export",
  "import",
];

const iconSide = (semanticType: SemanticType) => {
  const visualOptions = semanticTypeButtonConfigDefaults[semanticType]?.visualOptions;
  return visualOptions?.iconRight ? "right" : "left";
};

describe("semanticTypeButtonConfigDefaults", () => {
  it("R1: lists all 47 built-in names and every one has a defaults entry", () => {
    const keys = Object.keys(semanticTypeButtonConfigDefaults);

    expect(keys).toHaveLength(47);
    expect([...EXISTING_TYPES, ...NEW_TYPES]).toHaveLength(47);
    ZEST_ICON_NAMES.forEach((name) => {
      expect(semanticTypeButtonConfigDefaults[name]).toBeDefined();
    });
  });

  it("R1: keeps the 19 existing entries in their original order before the new ones", () => {
    const keys = Object.keys(semanticTypeButtonConfigDefaults);

    expect(keys.slice(0, EXISTING_TYPES.length)).toEqual(EXISTING_TYPES);
  });

  it("R6: the 19 existing types keep their variant, button style, icon side and options", () => {
    const expected: Record<
      string,
      {
        variant: string;
        buttonStyle: string;
        side: "left" | "right";
        busy?: number;
        success?: Record<string, unknown>;
        confirm?: Record<string, unknown>;
      }
    > = {
      add: { variant: "standard", buttonStyle: "solid", side: "left" },
      new: { variant: "standard", buttonStyle: "solid", side: "left" },
      save: {
        variant: "success",
        buttonStyle: "solid",
        side: "left",
        busy: 500,
        success: { showCheckmark: true },
      },
      submit: {
        variant: "success",
        buttonStyle: "solid",
        side: "left",
        busy: 500,
        success: { showCheckmark: true },
      },
      edit: { variant: "standard", buttonStyle: "solid", side: "left" },
      update: { variant: "standard", buttonStyle: "solid", side: "left" },
      delete: {
        variant: "danger",
        buttonStyle: "solid",
        side: "left",
        success: { showFailIcon: true, autoResetAfterMs: 400 },
        confirm: { displayLabel: "Confirm Delete", timeoutSecs: 5 },
      },
      remove: {
        variant: "danger",
        buttonStyle: "solid",
        side: "left",
        success: { showFailIcon: true, autoResetAfterMs: 400 },
        confirm: { displayLabel: "Confirm Remove", timeoutSecs: 5 },
      },
      cancel: { variant: "standard", buttonStyle: "outline", side: "left" },
      close: { variant: "standard", buttonStyle: "outline", side: "left" },
      view: { variant: "standard", buttonStyle: "text", side: "right" },
      details: { variant: "standard", buttonStyle: "text", side: "right" },
      download: { variant: "standard", buttonStyle: "solid", side: "left" },
      upload: { variant: "standard", buttonStyle: "solid", side: "left" },
      refresh: { variant: "standard", buttonStyle: "solid", side: "left", busy: 500 },
      reload: { variant: "standard", buttonStyle: "solid", side: "left", busy: 500 },
      print: { variant: "standard", buttonStyle: "solid", side: "left" },
      share: { variant: "standard", buttonStyle: "solid", side: "left" },
      confirm: {
        variant: "success",
        buttonStyle: "solid",
        side: "left",
        confirm: { displayLabel: "Are you sure?", timeoutSecs: 5 },
      },
    };

    EXISTING_TYPES.forEach((semanticType) => {
      const entry = semanticTypeButtonConfigDefaults[semanticType]!;
      const want = expected[semanticType];

      expect(entry.visualOptions?.variant).toBe(want.variant);
      expect(entry.buttonStyle ?? "solid").toBe(want.buttonStyle);
      expect(iconSide(semanticType)).toBe(want.side);
      expect(entry.busyOptions?.minBusyDurationMs).toBe(want.busy);
      expect(entry.successOptions).toEqual(want.success);
      expect(entry.confirmOptions).toEqual(want.confirm);
    });
  });

  it("R2: the 28 new types keep the documented variant and icon side", () => {
    NEW_TYPES.forEach((semanticType) => {
      const entry = semanticTypeButtonConfigDefaults[semanticType]!;
      const expectedVariant =
        semanticType === "approve"
          ? "success"
          : semanticType === "reject" || semanticType === "warning"
            ? "danger"
            : "standard";

      expect(entry.visualOptions?.variant).toBe(expectedVariant);
      if (semanticType === "next") {
        expect(entry.visualOptions?.iconRight).toBeDefined();
        expect(entry.visualOptions?.iconLeft).toBeUndefined();
      } else {
        expect(entry.visualOptions?.iconLeft).toBeDefined();
        expect(entry.visualOptions?.iconRight).toBeUndefined();
      }
      expect(iconSide(semanticType)).toBe(semanticType === "next" ? "right" : "left");
      expect(entry.buttonStyle).toBeUndefined();
    });
  });

  it("R2: only the eight async new types get a 500 ms busy time and none ask for confirmation", () => {
    const asyncTypes: SemanticType[] = [
      "send",
      "login",
      "logout",
      "export",
      "import",
      "approve",
      "reject",
      "archive",
    ];

    NEW_TYPES.forEach((semanticType) => {
      const entry = semanticTypeButtonConfigDefaults[semanticType]!;

      if (asyncTypes.includes(semanticType)) {
        expect(entry.busyOptions?.minBusyDurationMs).toBe(500);
      } else {
        expect(entry.busyOptions).toBeUndefined();
      }

      expect(entry.confirmOptions).toBeUndefined();
      expect(entry.successOptions).toBeUndefined();
    });
  });
  it("maps 'save' to a success variant with the save icon and busy/success options", () => {
    const save = semanticTypeButtonConfigDefaults["save"];

    expect(save?.visualOptions?.variant).toBe("success");
    expect(save?.visualOptions?.iconLeft).toBeDefined();
    expect(save?.busyOptions?.minBusyDurationMs).toBe(500);
    expect(save?.successOptions?.showCheckmark).toBe(true);
  });

  it("maps 'submit' as an alias of 'save'", () => {
    const save = semanticTypeButtonConfigDefaults["save"];
    const submit = semanticTypeButtonConfigDefaults["submit"];

    expect(submit?.visualOptions?.variant).toBe(save?.visualOptions?.variant);
    expect(submit?.busyOptions?.minBusyDurationMs).toBe(save?.busyOptions?.minBusyDurationMs);
  });

  it("maps 'delete' to a danger variant requiring confirmation", () => {
    const del = semanticTypeButtonConfigDefaults["delete"];

    expect(del?.visualOptions?.variant).toBe("danger");
    expect(del?.confirmOptions).toEqual({
      displayLabel: "Confirm Delete",
      timeoutSecs: 5,
    });
    expect(del?.successOptions?.showFailIcon).toBe(true);
  });

  it("maps 'remove' as an alias of 'delete' with its own confirm label", () => {
    const remove = semanticTypeButtonConfigDefaults["remove"];

    expect(remove?.visualOptions?.variant).toBe("danger");
    expect(remove?.confirmOptions).toEqual({
      displayLabel: "Confirm Remove",
      timeoutSecs: 5,
    });
  });

  it("maps 'cancel' to an outline button style", () => {
    const cancel = semanticTypeButtonConfigDefaults["cancel"];

    expect(cancel?.buttonStyle).toBe("outline");
    expect(cancel?.visualOptions?.variant).toBe("standard");
  });

  it("maps 'confirm' to a success variant with generic confirm options", () => {
    const confirm = semanticTypeButtonConfigDefaults["confirm"];

    expect(confirm?.visualOptions?.variant).toBe("success");
    expect(confirm?.confirmOptions).toEqual({
      displayLabel: "Are you sure?",
      timeoutSecs: 5,
    });
  });
});
