require("@testing-library/jest-dom");

// jsdom does not implement matchMedia. useThemeDetection calls it on every
// render, so every test that renders ZestButton needs a safe default;
// individual tests may still override window.matchMedia themselves.
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = function matchMedia(query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: function () {},
      removeListener: function () {},
      addEventListener: function () {},
      removeEventListener: function () {},
      dispatchEvent: function () {
        return false;
      },
    };
  };
}

// jsdom does not implement ResizeObserver. @radix-ui/react-dropdown-menu's
// content positioning (via its internal Popper primitive) uses it to measure
// the trigger/content elements, so any test that opens a ZestButton dropdown
// menu needs this stub.
if (typeof window !== "undefined" && !window.ResizeObserver) {
  window.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

// jsdom does not implement PointerEvent at all (not even a constructor).
// @radix-ui/react-dropdown-menu opens/closes on pointerdown/pointerup, not
// click, so any test that interacts with a ZestButton dropdown trigger needs
// this polyfill, plus the pointer-capture methods Radix's menu also calls.
if (typeof window !== "undefined" && !window.PointerEvent) {
  class PointerEvent extends MouseEvent {
    constructor(type, params = {}) {
      super(type, params);
      this.pointerId = params.pointerId ?? 0;
      this.pointerType = params.pointerType ?? "mouse";
      this.isPrimary = params.isPrimary ?? true;
    }
  }
  window.PointerEvent = PointerEvent;
}
if (typeof Element !== "undefined") {
  if (!Element.prototype.hasPointerCapture) {
    Element.prototype.hasPointerCapture = function () {
      return false;
    };
  }
  if (!Element.prototype.setPointerCapture) {
    Element.prototype.setPointerCapture = function () {};
  }
  if (!Element.prototype.releasePointerCapture) {
    Element.prototype.releasePointerCapture = function () {};
  }
  if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = function () {};
  }
}
