interface Entry {
  count: number;
  node: Text;
}

const entries = new Map<string, Entry>();
let styleElement: HTMLStyleElement | null = null;

/**
 * Adds the rules for `id` to one shared <style> element in document.head and
 * returns a function that releases them. Equal ids share one text node with a
 * reference count; the element is removed when the last rule is released.
 * Does nothing without a document (server rendering).
 */
export const acquireToggleStyle = (id: string, css: string): (() => void) => {
  if (typeof document === "undefined") return () => {};

  let entry = entries.get(id);
  if (entry) {
    entry.count++;
  } else {
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.setAttribute("data-zest-toggle-styles", "");
      document.head.appendChild(styleElement);
    }
    const node = document.createTextNode(css);
    styleElement.appendChild(node);
    entry = { count: 1, node };
    entries.set(id, entry);
  }

  let released = false;
  return () => {
    if (released) return;
    released = true;
    const current = entries.get(id);
    if (!current || --current.count > 0) return;
    entries.delete(id);
    current.node.remove();
    if (entries.size === 0 && styleElement) {
      styleElement.remove();
      styleElement = null;
    }
  };
};
