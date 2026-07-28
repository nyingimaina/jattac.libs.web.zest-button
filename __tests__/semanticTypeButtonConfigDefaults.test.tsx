import { semanticTypeButtonConfigDefaults } from "../UI/semanticTypeButtonConfigDefaults";

describe("semanticTypeButtonConfigDefaults", () => {
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
