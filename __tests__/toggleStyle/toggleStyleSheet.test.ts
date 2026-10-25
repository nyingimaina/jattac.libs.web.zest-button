import { acquireToggleStyle } from "../../UI/toggleStyle/toggleStyleSheet";

const sheet = () => document.head.querySelector("style[data-zest-toggle-styles]");

describe("toggleStyleSheet", () => {
  it("R8: equal ids share one rule and it is removed only after the last release", () => {
    const releaseA = acquireToggleStyle("t1", ".a{}");
    const releaseB = acquireToggleStyle("t1", ".a{}");
    expect(sheet()?.textContent).toBe(".a{}");
    releaseA();
    expect(sheet()?.textContent).toBe(".a{}");
    releaseB();
    expect(sheet()).toBeNull();
  });

  it("R8: different ids add and remove their own rules in one shared style element", () => {
    const one = acquireToggleStyle("t2", ".one{}");
    const two = acquireToggleStyle("t3", ".two{}");
    expect(document.head.querySelectorAll("style[data-zest-toggle-styles]")).toHaveLength(1);
    expect(sheet()?.textContent).toBe(".one{}.two{}");
    one();
    expect(sheet()?.textContent).toBe(".two{}");
    two();
    expect(sheet()).toBeNull();
  });

  it("R8: releasing twice does not drop a rule another toggle still uses", () => {
    const first = acquireToggleStyle("t4", ".x{}");
    const second = acquireToggleStyle("t4", ".x{}");
    first();
    first();
    expect(sheet()?.textContent).toBe(".x{}");
    second();
    expect(sheet()).toBeNull();
  });

  it("R3: the sheet is written as text, so a hostile value cannot create elements", () => {
    const release = acquireToggleStyle("t5", "</style><script>x</script>");
    expect(document.head.querySelector("script")).toBeNull();
    release();
  });
});
