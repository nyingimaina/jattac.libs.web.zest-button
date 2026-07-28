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
