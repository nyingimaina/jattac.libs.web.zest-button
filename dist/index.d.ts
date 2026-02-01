/// <reference path="global.d.ts" />
interface StandardLonghandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | <color>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **93** | **92**  | **15.4** | **93** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  accentColor?: Property.AccentColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **28**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  alignContent?: Property.AlignContent | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ] | anchor-center`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
   */
  alignItems?: Property.AlignItems | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position> | anchor-center`
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **10** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  alignSelf?: Property.AlignSelf | undefined;
  /**
   * **Syntax**: `[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#`
   *
   * **Initial value**: `normal`
   */
  alignTracks?: Property.AlignTracks | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `baseline | alphabetic | ideographic | middle | central | mathematical | text-before-edge | text-after-edge`
   *
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **1**  |   No    | **5.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  alignmentBaseline?: Property.AlignmentBaseline | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <dashed-ident>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **125** | **preview** | **26** | **125** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  anchorName?: Property.AnchorName | undefined;
  /**
   * **Syntax**: `none | all | <dashed-ident>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **131** | **preview** | **26** | **131** | No  |
   */
  anchorScope?: Property.AnchorScope | undefined;
  /**
   * Since July 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<single-animation-composition>#`
   *
   * **Initial value**: `replace`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **112** | **115** | **16** | **112** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  animationComposition?: Property.AnimationComposition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  animationDelay?: Property.AnimationDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-direction>#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  animationDirection?: Property.AnimationDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ auto | <time [0s,∞]> ]#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  animationDuration?: Property.AnimationDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-fill-mode>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-fill-mode
   */
  animationFillMode?: Property.AnimationFillMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-iteration-count>#`
   *
   * **Initial value**: `1`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  animationIterationCount?: Property.AnimationIterationCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ none | <keyframes-name> ]#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  animationName?: Property.AnimationName | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-play-state>#`
   *
   * **Initial value**: `running`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  animationPlayState?: Property.AnimationPlayState | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ normal | <length-percentage> | <timeline-range-name> <length-percentage>? ]#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  animationRangeEnd?: Property.AnimationRangeEnd<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ normal | <length-percentage> | <timeline-range-name> <length-percentage>? ]#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  animationRangeStart?: Property.AnimationRangeStart<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<single-animation-timeline>#`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  animationTimeline?: Property.AnimationTimeline | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  animationTimingFunction?: Property.AnimationTimingFunction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | auto | <compat-auto> | <compat-special>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |   Edge   | IE  |
   * | :-----: | :-----: | :------: | :------: | :-: |
   * | **84**  | **80**  | **15.4** |  **84**  | No  |
   * | 1 _-x-_ | 1 _-x-_ | 3 _-x-_  | 12 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  appearance?: Property.Appearance | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `auto || <ratio>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **88** | **89**  | **15** | **88** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio
   */
  aspectRatio?: Property.AspectRatio | undefined;
  /**
   * Since September 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | <filter-value-list>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **76** | **103** | **18**  | **79** | No  |
   * |        |         | 9 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  backdropFilter?: Property.BackdropFilter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `visible | hidden`
   *
   * **Initial value**: `visible`
   *
   * |  Chrome  | Firefox  |  Safari   |  Edge  |   IE   |
   * | :------: | :------: | :-------: | :----: | :----: |
   * |  **36**  |  **16**  | **15.4**  | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ | 5.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  backfaceVisibility?: Property.BackfaceVisibility | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<attachment>#`
   *
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  backgroundAttachment?: Property.BackgroundAttachment | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<blend-mode>#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **35** | **30**  | **8**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  backgroundBlendMode?: Property.BackgroundBlendMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-clip>#`
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **4**  |  **5**  | **12** | **9** |
   * |        |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  backgroundClip?: Property.BackgroundClip | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  backgroundColor?: Property.BackgroundColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-image>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  backgroundImage?: Property.BackgroundImage | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<visual-box>#`
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  backgroundOrigin?: Property.BackgroundOrigin | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2016.
   *
   * **Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`
   *
   * **Initial value**: `0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  backgroundPositionX?: Property.BackgroundPositionX<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2016.
   *
   * **Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`
   *
   * **Initial value**: `0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  backgroundPositionY?: Property.BackgroundPositionY<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<repeat-style>#`
   *
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  backgroundRepeat?: Property.BackgroundRepeat | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **3**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-size
   */
  backgroundSize?: Property.BackgroundSize<TLength> | undefined;
  /**
   * **Syntax**: `<length-percentage> | sub | super | baseline`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |   No    | **4**  | **79** | No  |
   */
  baselineShift?: Property.BaselineShift<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'width'>`
   *
   * **Initial value**: `auto`
   *
   * |            Chrome            | Firefox |             Safari             |  Edge  | IE  |
   * | :--------------------------: | :-----: | :----------------------------: | :----: | :-: |
   * |            **57**            | **41**  |            **12.1**            | **79** | No  |
   * | 8 _(-webkit-logical-height)_ |         | 5.1 _(-webkit-logical-height)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  blockSize?: Property.BlockSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  borderBlockEndColor?: Property.BorderBlockEndColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  borderBlockEndStyle?: Property.BorderBlockEndStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  borderBlockEndWidth?: Property.BorderBlockEndWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  borderBlockStartColor?: Property.BorderBlockStartColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  borderBlockStartStyle?: Property.BorderBlockStartStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  borderBlockStartWidth?: Property.BorderBlockStartWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  borderBottomColor?: Property.BorderBottomColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  borderBottomLeftRadius?: Property.BorderBottomLeftRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  borderBottomRightRadius?: Property.BorderBottomRightRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  borderBottomStyle?: Property.BorderBottomStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  borderBottomWidth?: Property.BorderBottomWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `separate | collapse`
   *
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.1** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  borderCollapse?: Property.BorderCollapse | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<'border-top-left-radius'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **89** | **66**  | **15** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  borderEndEndRadius?: Property.BorderEndEndRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<'border-top-left-radius'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **89** | **66**  | **15** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  borderEndStartRadius?: Property.BorderEndStartRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <length [0,∞]> | <number [0,∞]> ]{1,4}  `
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  borderImageOutset?: Property.BorderImageOutset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2016.
   *
   * **Syntax**: `[ stretch | repeat | round | space ]{1,2}`
   *
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  borderImageRepeat?: Property.BorderImageRepeat | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <number [0,∞]> | <percentage [0,∞]> ]{1,4}  && fill?`
   *
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  borderImageSlice?: Property.BorderImageSlice | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <image>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  borderImageSource?: Property.BorderImageSource | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <length-percentage [0,∞]> | <number [0,∞]> | auto ]{1,4}`
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **16** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  borderImageWidth?: Property.BorderImageWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |           Firefox           |  Safari  |  Edge  | IE  |
   * | :----: | :-------------------------: | :------: | :----: | :-: |
   * | **69** |           **41**            | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-end-color)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  borderInlineEndColor?: Property.BorderInlineEndColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome |           Firefox           |  Safari  |  Edge  | IE  |
   * | :----: | :-------------------------: | :------: | :----: | :-: |
   * | **69** |           **41**            | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-end-style)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  borderInlineEndStyle?: Property.BorderInlineEndStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome |           Firefox           |  Safari  |  Edge  | IE  |
   * | :----: | :-------------------------: | :------: | :----: | :-: |
   * | **69** |           **41**            | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-end-width)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  borderInlineEndWidth?: Property.BorderInlineEndWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |            Firefox            |  Safari  |  Edge  | IE  |
   * | :----: | :---------------------------: | :------: | :----: | :-: |
   * | **69** |            **41**             | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-start-color)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  borderInlineStartColor?: Property.BorderInlineStartColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome |            Firefox            |  Safari  |  Edge  | IE  |
   * | :----: | :---------------------------: | :------: | :----: | :-: |
   * | **69** |            **41**             | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-start-style)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  borderInlineStartStyle?: Property.BorderInlineStartStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  borderInlineStartWidth?: Property.BorderInlineStartWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  borderLeftColor?: Property.BorderLeftColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  borderLeftStyle?: Property.BorderLeftStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  borderLeftWidth?: Property.BorderLeftWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  borderRightColor?: Property.BorderRightColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  borderRightStyle?: Property.BorderRightStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  borderRightWidth?: Property.BorderRightWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  borderSpacing?: Property.BorderSpacing<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<'border-top-left-radius'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **89** | **66**  | **15** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  borderStartEndRadius?: Property.BorderStartEndRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<'border-top-left-radius'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **89** | **66**  | **15** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  borderStartStartRadius?: Property.BorderStartStartRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  borderTopColor?: Property.BorderTopColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  borderTopLeftRadius?: Property.BorderTopLeftRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  borderTopRightRadius?: Property.BorderTopRightRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  borderTopStyle?: Property.BorderTopStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  borderTopWidth?: Property.BorderTopWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage> | <anchor()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  bottom?: Property.Bottom<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `slice | clone`
   *
   * **Initial value**: `slice`
   *
   * |  Chrome  | Firefox |   Safari    |   Edge   | IE  |
   * | :------: | :-----: | :---------: | :------: | :-: |
   * | **130**  | **32**  | **7** _-x-_ | **130**  | No  |
   * | 22 _-x-_ |         |             | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  boxDecorationBreak?: Property.BoxDecorationBreak | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <shadow>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  |  **4**  | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-shadow
   */
  boxShadow?: Property.BoxShadow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `content-box | border-box`
   *
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-sizing
   */
  boxSizing?: Property.BoxSizing | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2019.
   *
   * **Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  breakAfter?: Property.BreakAfter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2019.
   *
   * **Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  breakBefore?: Property.BreakBefore | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2019.
   *
   * **Syntax**: `auto | avoid | avoid-page | avoid-column | avoid-region`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  breakInside?: Property.BreakInside | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `top | bottom`
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  captionSide?: Property.CaptionSide | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | <color>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **53**  | **11.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  caretColor?: Property.CaretColor | undefined;
  /**
   * **Syntax**: `auto | bar | block | underscore`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  caretShape?: Property.CaretShape | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | left | right | both | inline-start | inline-end`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  clear?: Property.Clear | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **55**  | **3.5** | **9.1** | **79** | **10** |
   * | 23 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  clipPath?: Property.ClipPath | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `nonzero | evenodd`
   *
   * **Initial value**: `nonzero`
   *
   * | Chrome  | Firefox | Safari |  Edge  | IE  |
   * | :-----: | :-----: | :----: | :----: | :-: |
   * | **≤15** | **3.5** | **≤5** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  clipRule?: Property.ClipRule | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `canvastext`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color
   */
  color?: Property.Color | undefined;
  /**
   * Since May 2025, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `economy | exact`
   *
   * **Initial value**: `economy`
   *
   * |  Chrome  |       Firefox       |  Safari  |   Edge   | IE  |
   * | :------: | :-----------------: | :------: | :------: | :-: |
   * | **136**  |       **97**        | **15.4** | **136**  | No  |
   * | 17 _-x-_ | 48 _(color-adjust)_ | 6 _-x-_  | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  colorAdjust?: Property.PrintColorAdjust | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | sRGB | linearRGB`
   *
   * **Initial value**: `linearRGB`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **3**  | **3**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  colorInterpolationFilters?: Property.ColorInterpolationFilters | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2022.
   *
   * **Syntax**: `normal | [ light | dark | <custom-ident> ]+ && only?`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **81** | **96**  | **13** | **81** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
   */
  colorScheme?: Property.ColorScheme | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<integer> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  columnCount?: Property.ColumnCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `auto | balance`
   *
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **50** | **52**  |  **9**  | **12** | **10** |
   * |        |         | 8 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  columnFill?: Property.ColumnFill | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | <length-percentage>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **1**  | **1.5** | **3**  | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  columnGap?: Property.ColumnGap<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  columnRuleColor?: Property.ColumnRuleColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'border-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  columnRuleStyle?: Property.ColumnRuleStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'border-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  columnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `none | all`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **50**  | **71**  |   **9**   | **12** | **10** |
   * | 6 _-x-_ |         | 5.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  columnSpan?: Property.ColumnSpan | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since November 2016.
   *
   * **Syntax**: `<length> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **50**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  columnWidth?: Property.ColumnWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | strict | content | [ [ size || inline-size ] || layout || style || paint ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **52** | **69**  | **15.4** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
   */
  contain?: Property.Contain | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto? [ none | <length> ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **95** | **107** | **17** | **95** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  containIntrinsicBlockSize?: Property.ContainIntrinsicBlockSize<TLength> | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto? [ none | <length> ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **95** | **107** | **17** | **95** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  containIntrinsicHeight?: Property.ContainIntrinsicHeight<TLength> | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto? [ none | <length> ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **95** | **107** | **17** | **95** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  containIntrinsicInlineSize?: Property.ContainIntrinsicInlineSize<TLength> | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto? [ none | <length> ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **95** | **107** | **17** | **95** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  containIntrinsicWidth?: Property.ContainIntrinsicWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since February 2023.
   *
   * **Syntax**: `none | <custom-ident>+`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **105** | **110** | **16** | **105** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  containerName?: Property.ContainerName | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since February 2023.
   *
   * **Syntax**: `normal | [ [ size | inline-size ] || scroll-state ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **105** | **110** | **16** | **105** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
   */
  containerType?: Property.ContainerType | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | none | [ <content-replacement> | <content-list> ] [ / [ <string> | <counter> | <attr()> ]+ ]?`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  content?: Property.Content | undefined;
  /**
   * Since September 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `visible | auto | hidden`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **85** | **125** | **18** | **85** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
   */
  contentVisibility?: Property.ContentVisibility | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <counter-name> <integer>? ]+ | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **3**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  counterIncrement?: Property.CounterIncrement | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <counter-name> <integer>? | <reversed-counter-name> <integer>? ]+ | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **3**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  counterReset?: Property.CounterReset | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ <counter-name> <integer>? ]+ | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **85** | **68**  | **17.2** | **85** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  counterSet?: Property.CounterSet | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since December 2021.
   *
   * **Syntax**: `[ [ <url> [ <x> <y> ]? , ]* <cursor-predefined> ]`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  cursor?: Property.Cursor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **43** | **69**  | **9**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  cx?: Property.Cx<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **43** | **69**  | **9**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  cy?: Property.Cy<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | path(<string>)`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **52** | **97**  |   No   | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  d?: Property.D | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `ltr | rtl`
   *
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **2**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  direction?: Property.Direction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`
   *
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  display?: Property.Display | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | text-bottom | alphabetic | ideographic | middle | central | mathematical | hanging | text-top`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **1**  | **4**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  dominantBaseline?: Property.DominantBaseline | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `show | hide`
   *
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  emptyCells?: Property.EmptyCells | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `content | fixed`
   *
   * **Initial value**: `fixed`
   *
   * | Chrome  | Firefox |   Safari    |  Edge   | IE  |
   * | :-----: | :-----: | :---------: | :-----: | :-: |
   * | **123** |   No    | **preview** | **123** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  fieldSizing?: Property.FieldSizing | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<paint>`
   *
   * **Initial value**: `black`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  fill?: Property.Fill | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<'opacity'>`
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **1**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  fillOpacity?: Property.FillOpacity | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `nonzero | evenodd`
   *
   * **Initial value**: `nonzero`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  fillRule?: Property.FillRule | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2016.
   *
   * **Syntax**: `none | <filter-value-list>`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  | IE  |
   * | :------: | :-----: | :-----: | :----: | :-: |
   * |  **53**  | **35**  | **9.1** | **12** | No  |
   * | 18 _-x-_ |         | 6 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  filter?: Property.Filter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `content | <'width'>`
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **22**  |  **9**  | **12** | **11** |
   * | 22 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  flexBasis?: Property.FlexBasis<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `row | row-reverse | column | column-reverse`
   *
   * **Initial value**: `row`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **22**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
   */
  flexDirection?: Property.FlexDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |            IE            |
   * | :------: | :-----: | :-----: | :----: | :----------------------: |
   * |  **29**  | **20**  |  **9**  | **12** |          **11**          |
   * | 22 _-x-_ |         | 7 _-x-_ |        | 10 _(-ms-flex-positive)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
   */
  flexGrow?: Property.FlexGrow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `1`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **10** |
   * | 22 _-x-_ |         | 8 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
   */
  flexShrink?: Property.FlexShrink | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `nowrap | wrap | wrap-reverse`
   *
   * **Initial value**: `nowrap`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **28**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
   */
  flexWrap?: Property.FlexWrap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `left | right | none | inline-start | inline-end`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  float?: Property.Float | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `black`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **5**  |  **3**  | **6**  | **12** | **≤11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  floodColor?: Property.FloodColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'opacity'>`
   *
   * **Initial value**: `black`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **5**  |  **3**  | **6**  | **12** | **≤11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  floodOpacity?: Property.FloodOpacity | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <family-name> | <generic-family> ]#`
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  fontFamily?: Property.FontFamily | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `normal | <feature-tag-value>#`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **48**  |  **34**  | **9.1** | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |         |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
   */
  fontFeatureSettings?: Property.FontFeatureSettings | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | normal | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **33** | **32**  |  **9**  | **79** | No  |
   * |        |         | 6 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  fontKerning?: Property.FontKerning | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | <string>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **143** | **34**  |   No   | **143** | No  |
   * |         | 4 _-x-_ |        |         |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  fontLanguageOverride?: Property.FontLanguageOverride | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2020.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **79** | **62**  | **13.1** | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  fontOpticalSizing?: Property.FontOpticalSizing | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since November 2022.
   *
   * **Syntax**: `normal | light | dark | <palette-identifier> | <palette-mix()>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **101** | **107** | **15.4** | **101** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  fontPalette?: Property.FontPalette | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<absolute-size> | <relative-size> | <length-percentage [0,∞]> | math`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  fontSize?: Property.FontSize<TLength> | undefined;
  /**
   * Since July 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **127** |  **3**  | **16.4** | **127** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  fontSizeAdjust?: Property.FontSizeAdjust | undefined;
  /**
   * The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.
   *
   * **Syntax**: `auto | never | always | <absolute-size> | <length>`
   *
   * **Initial value**: `auto`
   *
   * |              Chrome              |              Firefox               |              Safari              |               Edge                | IE  |
   * | :------------------------------: | :--------------------------------: | :------------------------------: | :-------------------------------: | :-: |
   * | **5** _(-webkit-font-smoothing)_ | **25** _(-moz-osx-font-smoothing)_ | **4** _(-webkit-font-smoothing)_ | **79** _(-webkit-font-smoothing)_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  fontSmooth?: Property.FontSmooth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | italic | oblique <angle>?`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  fontStyle?: Property.FontStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2022.
   *
   * **Syntax**: `none | [ weight || style || small-caps || position]`
   *
   * **Initial value**: `weight style small-caps position `
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **97** | **34**  | **9**  | **97** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  fontSynthesis?: Property.FontSynthesis | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **118** |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  fontSynthesisPosition?: Property.FontSynthesisPosition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2023.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **97** | **111** | **16.4** | **97** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  fontSynthesisSmallCaps?: Property.FontSynthesisSmallCaps | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2023.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **97** | **111** | **16.4** | **97** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  fontSynthesisStyle?: Property.FontSynthesisStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2023.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **97** | **111** | **16.4** | **97** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  fontSynthesisWeight?: Property.FontSynthesisWeight | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  fontVariant?: Property.FontVariant | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2023.
   *
   * **Syntax**: `normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :-----: | :-----: | :-: |
   * | **111** | **34**  | **9.1** | **111** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  fontVariantAlternates?: Property.FontVariantAlternates | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **52** | **34**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  fontVariantCaps?: Property.FontVariantCaps | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **63** | **34**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  fontVariantEastAsian?: Property.FontVariantEastAsian | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | text | emoji | unicode`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **131** | **141** |   No   | **131** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  fontVariantEmoji?: Property.FontVariantEmoji | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  | IE  |
   * | :------: | :-----: | :-----: | :----: | :-: |
   * |  **34**  | **34**  | **9.1** | **79** | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  fontVariantLigatures?: Property.FontVariantLigatures | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **52** | **34**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  fontVariantNumeric?: Property.FontVariantNumeric | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | sub | super`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * |   No   | **34**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  fontVariantPosition?: Property.FontVariantPosition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2018.
   *
   * **Syntax**: `normal | [ <string> <number> ]#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **62** | **62**  | **11** | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
   */
  fontVariationSettings?: Property.FontVariationSettings | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<font-weight-absolute> | bolder | lighter`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
   */
  fontWeight?: Property.FontWeight | undefined;
  /**
   * **Syntax**: `normal | <percentage [0,∞]> | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   |   No    | **18.4** |  No  | No  |
   */
  fontWidth?: Property.FontWidth | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | none | preserve-parent-color`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |              Edge               |                 IE                  |
   * | :----: | :-----: | :----: | :-----------------------------: | :---------------------------------: |
   * | **89** | **113** |   No   |             **79**              | **10** _(-ms-high-contrast-adjust)_ |
   * |        |         |        | 12 _(-ms-high-contrast-adjust)_ |                                     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  forcedColorAdjust?: Property.ForcedColorAdjust | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<track-size>+`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |             IE              |
   * | :----: | :-----: | :------: | :----: | :-------------------------: |
   * | **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  gridAutoColumns?: Property.GridAutoColumns<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `[ row | column ] || dense`
   *
   * **Initial value**: `row`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
   */
  gridAutoFlow?: Property.GridAutoFlow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<track-size>+`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |            IE            |
   * | :----: | :-----: | :------: | :----: | :----------------------: |
   * | **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  gridAutoRows?: Property.GridAutoRows<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  gridColumnEnd?: Property.GridColumnEnd | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  gridColumnStart?: Property.GridColumnStart | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  gridRowEnd?: Property.GridRowEnd | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  gridRowStart?: Property.GridRowStart | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `none | <string>+`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  gridTemplateAreas?: Property.GridTemplateAreas | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |             IE              |
   * | :----: | :-----: | :------: | :----: | :-------------------------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  gridTemplateColumns?: Property.GridTemplateColumns<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |            IE            |
   * | :----: | :-----: | :------: | :----: | :----------------------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  gridTemplateRows?: Property.GridTemplateRows<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | [ first || [ force-end | allow-end ] || last ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    | **10** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  hangingPunctuation?: Property.HangingPunctuation | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  height?: Property.Height<TLength> | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto | <string>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |  Safari   |   Edge   | IE  |
   * | :-----: | :-----: | :-------: | :------: | :-: |
   * | **106** | **98**  |  **17**   | **106**  | No  |
   * | 6 _-x-_ |         | 5.1 _-x-_ | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  hyphenateCharacter?: Property.HyphenateCharacter | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ auto | <integer> ]{1,3}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **109** | **137** |   No   | **109** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  hyphenateLimitChars?: Property.HyphenateLimitChars | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | manual | auto`
   *
   * **Initial value**: `manual`
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |      IE      |
   * | :------: | :-----: | :-------: | :----: | :----------: |
   * |  **55**  | **43**  |  **17**   | **79** | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ | 5.1 _-x-_ |        |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  hyphens?: Property.Hyphens | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2020.
   *
   * **Syntax**: `from-image | <angle> | [ <angle>? flip ]`
   *
   * **Initial value**: `from-image`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **81** | **26**  | **13.1** | **81** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  imageOrientation?: Property.ImageOrientation | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | crisp-edges | pixelated | smooth`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **13** | **3.6** | **6**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  imageRendering?: Property.ImageRendering | undefined;
  /**
   * The **`image-resolution`** CSS property specifies the intrinsic resolution of all raster images used in or on the element. It affects content images such as replaced elements and generated content, and decorative images such as `background-image` images.
   *
   * **Syntax**: `[ from-image || <resolution> ] && snap?`
   *
   * **Initial value**: `1dppx`
   */
  imageResolution?: Property.ImageResolution | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | [ <number> <integer>? ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |   Safari    |  Edge   | IE  |
   * | :-----: | :-----: | :---------: | :-----: | :-: |
   * | **110** |   No    | **9** _-x-_ | **110** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  initialLetter?: Property.InitialLetter | undefined;
  /**
   * **Syntax**: `[ auto | alphabetic | hanging | ideographic ]`
   *
   * **Initial value**: `auto`
   */
  initialLetterAlign?: Property.InitialLetterAlign | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'width'>`
   *
   * **Initial value**: `auto`
   *
   * |           Chrome            | Firefox |            Safari             |  Edge  | IE  |
   * | :-------------------------: | :-----: | :---------------------------: | :----: | :-: |
   * |           **57**            | **41**  |           **12.1**            | **79** | No  |
   * | 8 _(-webkit-logical-width)_ |         | 5.1 _(-webkit-logical-width)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  inlineSize?: Property.InlineSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  insetBlockEnd?: Property.InsetBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  insetBlockStart?: Property.InsetBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  insetInlineEnd?: Property.InsetInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  insetInlineStart?: Property.InsetInlineStart<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `numeric-only | allow-keywords`
   *
   * **Initial value**: `numeric-only`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **129** |   No    |   No   | **129** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  interpolateSize?: Property.InterpolateSize | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | isolate`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **41** | **36**  | **8**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
   */
  isolation?: Property.Isolation | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  justifyContent?: Property.JustifyContent | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2016.
   *
   * **Syntax**: `normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ] | anchor-center`
   *
   * **Initial value**: `legacy`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **52** | **20**  | **9**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  justifyItems?: Property.JustifyItems | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | anchor-center`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :------: | :----: | :----: |
   * | **57** | **45**  | **10.1** | **16** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  justifySelf?: Property.JustifySelf | undefined;
  /**
   * **Syntax**: `[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#`
   *
   * **Initial value**: `normal`
   */
  justifyTracks?: Property.JustifyTracks | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage> | <anchor()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  left?: Property.Left<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | <length>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  letterSpacing?: Property.LetterSpacing<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `white`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **5**  |  **3**  | **6**  | **12** | **≤11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  lightingColor?: Property.LightingColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `auto | loose | normal | strict | anywhere`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE    |
   * | :-----: | :-----: | :-----: | :----: | :-----: |
   * | **58**  | **69**  | **11**  | **14** | **5.5** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  lineBreak?: Property.LineBreak | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | <number> | <length> | <percentage>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
   */
  lineHeight?: Property.LineHeight<TLength> | undefined;
  /**
   * The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  lineHeightStep?: Property.LineHeightStep<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<image> | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  listStyleImage?: Property.ListStyleImage | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `inside | outside`
   *
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  listStylePosition?: Property.ListStylePosition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<counter-style> | <string> | none`
   *
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  listStyleType?: Property.ListStyleType | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  marginBlockEnd?: Property.MarginBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  marginBlockStart?: Property.MarginBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage> | auto | <anchor-size()>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  marginBottom?: Property.MarginBottom<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome          |        Firefox        |          Safari          |  Edge  | IE  |
   * | :----------------------: | :-------------------: | :----------------------: | :----: | :-: |
   * |          **69**          |        **41**         |         **12.1**         | **79** | No  |
   * | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  marginInlineEnd?: Property.MarginInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome           |         Firefox         |           Safari           |  Edge  | IE  |
   * | :------------------------: | :---------------------: | :------------------------: | :----: | :-: |
   * |           **69**           |         **41**          |          **12.1**          | **79** | No  |
   * | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  marginInlineStart?: Property.MarginInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage> | auto | <anchor-size()>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  marginLeft?: Property.MarginLeft<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage> | auto | <anchor-size()>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  marginRight?: Property.MarginRight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage> | auto | <anchor-size()>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  marginTop?: Property.MarginTop<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | in-flow | all`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   |   No    | **16.4** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  marginTrim?: Property.MarginTrim | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `none | <url>`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  marker?: Property.Marker | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `none | <url>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  markerEnd?: Property.MarkerEnd | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `none | <url>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  markerMid?: Property.MarkerMid | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `none | <url>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  markerStart?: Property.MarkerStart | undefined;
  /**
   * The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.
   *
   * **Syntax**: `luminance | alpha`
   *
   * **Initial value**: `alpha`
   */
  maskBorderMode?: Property.MaskBorderMode | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <length> | <number> ]{1,4}`
   *
   * **Initial value**: `0`
   *
   * |                 Chrome                  | Firefox |                Safari                 |                   Edge                   | IE  |
   * | :-------------------------------------: | :-----: | :-----------------------------------: | :--------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-outset)_ |   No    |               **17.2**                | **79** _(-webkit-mask-box-image-outset)_ | No  |
   * |                                         |         | 3.1 _(-webkit-mask-box-image-outset)_ |                                          |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  maskBorderOutset?: Property.MaskBorderOutset<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ stretch | repeat | round | space ]{1,2}`
   *
   * **Initial value**: `stretch`
   *
   * |                 Chrome                  | Firefox |                Safari                 |                   Edge                   | IE  |
   * | :-------------------------------------: | :-----: | :-----------------------------------: | :--------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-repeat)_ |   No    |               **17.2**                | **79** _(-webkit-mask-box-image-repeat)_ | No  |
   * |                                         |         | 3.1 _(-webkit-mask-box-image-repeat)_ |                                          |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  maskBorderRepeat?: Property.MaskBorderRepeat | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<number-percentage>{1,4} fill?`
   *
   * **Initial value**: `0`
   *
   * |                 Chrome                 | Firefox |                Safari                |                  Edge                   | IE  |
   * | :------------------------------------: | :-----: | :----------------------------------: | :-------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-slice)_ |   No    |               **17.2**               | **79** _(-webkit-mask-box-image-slice)_ | No  |
   * |                                        |         | 3.1 _(-webkit-mask-box-image-slice)_ |                                         |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  maskBorderSlice?: Property.MaskBorderSlice | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <image>`
   *
   * **Initial value**: `none`
   *
   * |                 Chrome                  | Firefox |                Safari                 |                   Edge                   | IE  |
   * | :-------------------------------------: | :-----: | :-----------------------------------: | :--------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-source)_ |   No    |               **17.2**                | **79** _(-webkit-mask-box-image-source)_ | No  |
   * |                                         |         | 3.1 _(-webkit-mask-box-image-source)_ |                                          |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  maskBorderSource?: Property.MaskBorderSource | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`
   *
   * **Initial value**: `auto`
   *
   * |                 Chrome                 | Firefox |                Safari                |                  Edge                   | IE  |
   * | :------------------------------------: | :-----: | :----------------------------------: | :-------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-width)_ |   No    |               **17.2**               | **79** _(-webkit-mask-box-image-width)_ | No  |
   * |                                        |         | 3.1 _(-webkit-mask-box-image-width)_ |                                         |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  maskBorderWidth?: Property.MaskBorderWidth<TLength> | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ <coord-box> | no-clip ]#`
   *
   * **Initial value**: `border-box`
   *
   * | Chrome  | Firefox |  Safari  |   Edge   | IE  |
   * | :-----: | :-----: | :------: | :------: | :-: |
   * | **120** | **53**  | **15.4** | **120**  | No  |
   * | 1 _-x-_ |         | 4 _-x-_  | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  maskClip?: Property.MaskClip | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<compositing-operator>#`
   *
   * **Initial value**: `add`
   *
   * | Chrome  | Firefox |  Safari  | Edge  | IE  |
   * | :-----: | :-----: | :------: | :---: | :-: |
   * | **120** | **53**  | **15.4** | 18-79 | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  maskComposite?: Property.MaskComposite | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<mask-reference>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  | Edge  | IE  |
   * | :-----: | :-----: | :------: | :---: | :-: |
   * | **120** | **53**  | **15.4** | 16-79 | No  |
   * | 1 _-x-_ |         | 4 _-x-_  |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  maskImage?: Property.MaskImage | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<masking-mode>#`
   *
   * **Initial value**: `match-source`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **120** | **53**  | **15.4** | **120** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  maskMode?: Property.MaskMode | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<coord-box>#`
   *
   * **Initial value**: `border-box`
   *
   * | Chrome  | Firefox |  Safari  |   Edge   | IE  |
   * | :-----: | :-----: | :------: | :------: | :-: |
   * | **120** | **53**  | **15.4** | **120**  | No  |
   * | 1 _-x-_ |         | 4 _-x-_  | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  maskOrigin?: Property.MaskOrigin | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<position>#`
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome  | Firefox |  Safari   | Edge  | IE  |
   * | :-----: | :-----: | :-------: | :---: | :-: |
   * | **120** | **53**  | **15.4**  | 18-79 | No  |
   * | 1 _-x-_ |         | 3.1 _-x-_ |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  maskPosition?: Property.MaskPosition<TLength> | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<repeat-style>#`
   *
   * **Initial value**: `repeat`
   *
   * | Chrome  | Firefox |  Safari   | Edge  | IE  |
   * | :-----: | :-----: | :-------: | :---: | :-: |
   * | **120** | **53**  | **15.4**  | 18-79 | No  |
   * | 1 _-x-_ |         | 3.1 _-x-_ |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  maskRepeat?: Property.MaskRepeat | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |  Safari  | Edge  | IE  |
   * | :-----: | :-----: | :------: | :---: | :-: |
   * | **120** | **53**  | **15.4** | 18-79 | No  |
   * | 4 _-x-_ |         | 4 _-x-_  |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  maskSize?: Property.MaskSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `luminance | alpha`
   *
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **24** | **35**  | **7**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  maskType?: Property.MaskType | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `[ pack | next ] || [ definite-first | ordered ]`
   *
   * **Initial value**: `pack`
   */
  masonryAutoFlow?: Property.MasonryAutoFlow | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto-add | add(<integer>) | <integer>`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **109** | **117** |   No   | **109** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  mathDepth?: Property.MathDepth | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | compact`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **109** |   No    |   No   | **109** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  mathShift?: Property.MathShift | undefined;
  /**
   * Since August 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `normal | compact`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **109** | **117** | **14.1** | **109** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  mathStyle?: Property.MathStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'max-width'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  maxBlockSize?: Property.MaxBlockSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  maxHeight?: Property.MaxHeight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'max-width'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari   |  Edge  | IE  |
   * | :----: | :-----: | :--------: | :----: | :-: |
   * | **57** | **41**  |  **12.1**  | **79** | No  |
   * |        |         | 10.1 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  maxInlineSize?: Property.MaxInlineSize<TLength> | undefined;
  /**
   * **Syntax**: `none | <integer>`
   *
   * **Initial value**: `none`
   */
  maxLines?: Property.MaxLines | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  maxWidth?: Property.MaxWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'min-width'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  minBlockSize?: Property.MinBlockSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **3**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  minHeight?: Property.MinHeight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'min-width'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  minInlineSize?: Property.MinInlineSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  minWidth?: Property.MinWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<blend-mode> | plus-darker | plus-lighter`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **41** | **32**  | **8**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  mixBlendMode?: Property.MixBlendMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **55**         | **72**  | **16** | **79** | No  |
   * | 46 _(motion-distance)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  motionDistance?: Property.OffsetDistance<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | <offset-path> || <coord-box>`
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox |  Safari  |  Edge  | IE  |
   * | :----------------: | :-----: | :------: | :----: | :-: |
   * |       **55**       | **72**  | **15.4** | **79** | No  |
   * | 46 _(motion-path)_ |         |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  motionPath?: Property.OffsetPath | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `[ auto | reverse ] || <angle>`
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **56**         | **72**  | **16** | **79** | No  |
   * | 46 _(motion-rotation)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  motionRotation?: Property.OffsetRotate | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `fill | contain | cover | none | scale-down`
   *
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **32** | **36**  | **10** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  objectFit?: Property.ObjectFit | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **32** | **36**  | **10** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  objectPosition?: Property.ObjectPosition<TLength> | undefined;
  /**
   * **Syntax**: `none | <basic-shape-rect>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **104** |   No    |   No   | **104** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  objectViewBox?: Property.ObjectViewBox | undefined;
  /**
   * Since August 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto | <position>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **116** | **72**  | **16** | **116** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  offsetAnchor?: Property.OffsetAnchor<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **55**         | **72**  | **16** | **79** | No  |
   * | 46 _(motion-distance)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  offsetDistance?: Property.OffsetDistance<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | <offset-path> || <coord-box>`
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox |  Safari  |  Edge  | IE  |
   * | :----------------: | :-----: | :------: | :----: | :-: |
   * |       **55**       | **72**  | **15.4** | **79** | No  |
   * | 46 _(motion-path)_ |         |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  offsetPath?: Property.OffsetPath | undefined;
  /**
   * Since January 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `normal | auto | <position>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **116** | **122** | **16** | **116** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  offsetPosition?: Property.OffsetPosition<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `[ auto | reverse ] || <angle>`
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **56**         | **72**  | **16** | **79** | No  |
   * | 46 _(motion-rotation)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  offsetRotate?: Property.OffsetRotate | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `[ auto | reverse ] || <angle>`
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **56**         | **72**  | **16** | **79** | No  |
   * | 46 _(motion-rotation)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  offsetRotation?: Property.OffsetRotate | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<opacity-value>`
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
   */
  opacity?: Property.Opacity | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/order
   */
  order?: Property.Order | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **25** |   No    | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  orphans?: Property.Orphans | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <color>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  outlineColor?: Property.OutlineColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **1**  | **1.5** | **1.2** | **15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  outlineOffset?: Property.OutlineOffset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <outline-line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  outlineStyle?: Property.OutlineStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  outlineWidth?: Property.OutlineWidth<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |   Safari    |  Edge  | IE  |
   * | :----: | :-----: | :---------: | :----: | :-: |
   * | **56** | **66**  | **preview** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  overflowAnchor?: Property.OverflowAnchor | undefined;
  /**
   * Since September 2025, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **135** | **69**  | **26** | **135** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  overflowBlock?: Property.OverflowBlock | undefined;
  /**
   * **Syntax**: `padding-box | content-box`
   *
   * **Initial value**: `padding-box`
   */
  overflowClipBox?: Property.OverflowClipBox | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<visual-box> || <length [0,∞]>`
   *
   * **Initial value**: `0px`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **90** | **102** |   No   | **90** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  overflowClipMargin?: Property.OverflowClipMargin<TLength> | undefined;
  /**
   * Since September 2025, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **135** | **69**  | **26** | **135** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  overflowInline?: Property.OverflowInline | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2018.
   *
   * **Syntax**: `normal | break-word | anywhere`
   *
   * **Initial value**: `normal`
   *
   * |     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |
   * | :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |
   * |     **23**      |      **49**       |      **7**      |      **18**      | **5.5** _(word-wrap)_ |
   * | 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
   */
  overflowWrap?: Property.OverflowWrap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  overflowX?: Property.OverflowX | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  overflowY?: Property.OverflowY | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | auto`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **117** |   No    |   No   | **117** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  overlay?: Property.Overlay | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **77** | **73**  | **16** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  overscrollBehaviorBlock?: Property.OverscrollBehaviorBlock | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **77** | **73**  | **16** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  overscrollBehaviorInline?: Property.OverscrollBehaviorInline | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  | **16** | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  overscrollBehaviorX?: Property.OverscrollBehaviorX | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  | **16** | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  overscrollBehaviorY?: Property.OverscrollBehaviorY | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  paddingBlockEnd?: Property.PaddingBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  paddingBlockStart?: Property.PaddingBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  paddingBottom?: Property.PaddingBottom<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome           |        Firefox         |          Safari           |  Edge  | IE  |
   * | :-----------------------: | :--------------------: | :-----------------------: | :----: | :-: |
   * |          **69**           |         **41**         |         **12.1**          | **79** | No  |
   * | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  paddingInlineEnd?: Property.PaddingInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome            |         Firefox          |           Safari            |  Edge  | IE  |
   * | :-------------------------: | :----------------------: | :-------------------------: | :----: | :-: |
   * |           **69**            |          **41**          |          **12.1**           | **79** | No  |
   * | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  paddingInlineStart?: Property.PaddingInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  paddingLeft?: Property.PaddingLeft<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  paddingRight?: Property.PaddingRight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  paddingTop?: Property.PaddingTop<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since February 2023.
   *
   * **Syntax**: `auto | <custom-ident>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **85** | **110** | **1**  | **85** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  page?: Property.Page | undefined;
  /**
   * Since March 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `normal | [ fill || stroke || markers ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **123** | **60**  | **11** | **123** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  paintOrder?: Property.PaintOrder | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <length>`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **36**  |  **16**  |  **9**  | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  perspective?: Property.Perspective<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **36**  |  **16**  |  **9**  | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  perspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **1**  | **1.5** | **4**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
   */
  pointerEvents?: Property.PointerEvents | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `static | relative | absolute | sticky | fixed`
   *
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  position?: Property.Position | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | <anchor-name>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **125** | **preview** | **26** | **125** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  positionAnchor?: Property.PositionAnchor | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <position-area>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **129** | **preview** | **26** | **129** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  positionArea?: Property.PositionArea | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | [ [<dashed-ident> || <try-tactic>] | <'position-area'> ]#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **128** | **preview** | **26** | **128** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  positionTryFallbacks?: Property.PositionTryFallbacks | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | <try-size>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **125** |   No    | **26** | **125** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  positionTryOrder?: Property.PositionTryOrder | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `always | [ anchors-valid || anchors-visible || no-overflow ]`
   *
   * **Initial value**: `anchors-visible`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **125** | **preview** |   No   | **125** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  positionVisibility?: Property.PositionVisibility | undefined;
  /**
   * Since May 2025, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `economy | exact`
   *
   * **Initial value**: `economy`
   *
   * |  Chrome  |       Firefox       |  Safari  |   Edge   | IE  |
   * | :------: | :-----------------: | :------: | :------: | :-: |
   * | **136**  |       **97**        | **15.4** | **136**  | No  |
   * | 17 _-x-_ | 48 _(color-adjust)_ | 6 _-x-_  | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  printColorAdjust?: Property.PrintColorAdjust | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | auto | [ <string> <string> ]+`
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  quotes?: Property.Quotes | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **43** | **69**  | **9**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  r?: Property.R<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | both | horizontal | vertical | block | inline`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **4**  | **3**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  resize?: Property.Resize | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage> | <anchor()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  right?: Property.Right<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2022.
   *
   * **Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **104** | **72**  | **14.1** | **104** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  rotate?: Property.Rotate | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `normal | <length-percentage>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **47** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  rowGap?: Property.RowGap<TLength> | undefined;
  /**
   * Since December 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `start | center | space-between | space-around`
   *
   * **Initial value**: `space-around`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **128** | **38**  | **18.2** | **128** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  rubyAlign?: Property.RubyAlign | undefined;
  /**
   * **Syntax**: `separate | collapse | auto`
   *
   * **Initial value**: `separate`
   */
  rubyMerge?: Property.RubyMerge | undefined;
  /**
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   |   No    | **18.2** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  rubyOverhang?: Property.RubyOverhang | undefined;
  /**
   * Since December 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ alternate || [ over | under ] ] | inter-character`
   *
   * **Initial value**: `alternate`
   *
   * | Chrome  | Firefox |  Safari  | Edge  | IE  |
   * | :-----: | :-----: | :------: | :---: | :-: |
   * | **84**  | **38**  | **18.2** | 12-79 | No  |
   * | 1 _-x-_ |         | 7 _-x-_  |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  rubyPosition?: Property.RubyPosition | undefined;
  /**
   * Since March 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **43** | **69**  | **17.4** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  rx?: Property.Rx<TLength> | undefined;
  /**
   * Since March 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **43** | **69**  | **17.4** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  ry?: Property.Ry<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2022.
   *
   * **Syntax**: `none | [ <number> | <percentage> ]{1,3}`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **104** | **72**  | **14.1** | **104** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  scale?: Property.Scale | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `auto | smooth`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **61** | **36**  | **15.4** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior
   */
  scrollBehavior?: Property.ScrollBehavior | undefined;
  /**
   * **Syntax**: `none | nearest`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **133** |   No    |   No   | **133** | No  |
   */
  scrollInitialTarget?: Property.ScrollInitialTarget | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  scrollMarginBlockEnd?: Property.ScrollMarginBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  scrollMarginBlockStart?: Property.ScrollMarginBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |              Safari              |  Edge  | IE  |
   * | :----: | :-----: | :------------------------------: | :----: | :-: |
   * | **69** | **68**  |             **14.1**             | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-bottom)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  scrollMarginBottom?: Property.ScrollMarginBottom<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  scrollMarginInlineEnd?: Property.ScrollMarginInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  scrollMarginInlineStart?: Property.ScrollMarginInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari             |  Edge  | IE  |
   * | :----: | :-----: | :----------------------------: | :----: | :-: |
   * | **69** | **68**  |            **14.1**            | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-left)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  scrollMarginLeft?: Property.ScrollMarginLeft<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari              |  Edge  | IE  |
   * | :----: | :-----: | :-----------------------------: | :----: | :-: |
   * | **69** | **68**  |            **14.1**             | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-right)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  scrollMarginRight?: Property.ScrollMarginRight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |            Safari             |  Edge  | IE  |
   * | :----: | :-----: | :---------------------------: | :----: | :-: |
   * | **69** | **68**  |           **14.1**            | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-top)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  scrollMarginTop?: Property.ScrollMarginTop<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  scrollPaddingBlockEnd?: Property.ScrollPaddingBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  scrollPaddingBlockStart?: Property.ScrollPaddingBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  scrollPaddingBottom?: Property.ScrollPaddingBottom<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  scrollPaddingInlineEnd?: Property.ScrollPaddingInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  scrollPaddingInlineStart?: Property.ScrollPaddingInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  scrollPaddingLeft?: Property.ScrollPaddingLeft<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  scrollPaddingRight?: Property.ScrollPaddingRight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  scrollPaddingTop?: Property.ScrollPaddingTop<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `[ none | start | end | center ]{1,2}`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **11** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  scrollSnapAlign?: Property.ScrollSnapAlign | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |              Safari              |  Edge  | IE  |
   * | :----: | :-----: | :------------------------------: | :----: | :-: |
   * | **69** | **68**  |             **14.1**             | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-bottom)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  scrollSnapMarginBottom?: Property.ScrollMarginBottom<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari             |  Edge  | IE  |
   * | :----: | :-----: | :----------------------------: | :----: | :-: |
   * | **69** | **68**  |            **14.1**            | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-left)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  scrollSnapMarginLeft?: Property.ScrollMarginLeft<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari              |  Edge  | IE  |
   * | :----: | :-----: | :-----------------------------: | :----: | :-: |
   * | **69** | **68**  |            **14.1**             | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-right)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  scrollSnapMarginRight?: Property.ScrollMarginRight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |            Safari             |  Edge  | IE  |
   * | :----: | :-----: | :---------------------------: | :----: | :-: |
   * | **69** | **68**  |           **14.1**            | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-top)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  scrollSnapMarginTop?: Property.ScrollMarginTop<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2022.
   *
   * **Syntax**: `normal | always`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **75** | **103** | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  scrollSnapStop?: Property.ScrollSnapStop | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2022.
   *
   * **Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |      IE      |
   * | :----: | :-----: | :-----: | :----: | :----------: |
   * | **69** |  39-68  | **11**  | **79** | **10** _-x-_ |
   * |        |         | 9 _-x-_ |        |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  scrollSnapType?: Property.ScrollSnapType | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ block | inline | x | y ]#`
   *
   * **Initial value**: `block`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  scrollTimelineAxis?: Property.ScrollTimelineAxis | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ none | <dashed-ident> ]#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  scrollTimelineName?: Property.ScrollTimelineName | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | <color>{2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **121** | **64**  |   No   | **121** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  scrollbarColor?: Property.ScrollbarColor | undefined;
  /**
   * Since December 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto | stable && both-edges?`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **94** | **97**  | **18.2** | **94** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  scrollbarGutter?: Property.ScrollbarGutter | undefined;
  /**
   * Since December 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto | thin | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **121** | **64**  | **18.2** | **121** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  scrollbarWidth?: Property.ScrollbarWidth | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<opacity-value>`
   *
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **37** | **62**  | **10.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  shapeImageThreshold?: Property.ShapeImageThreshold | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **37** | **62**  | **10.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  shapeMargin?: Property.ShapeMargin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `none | [ <shape-box> || <basic-shape> ] | <image>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **37** | **62**  | **10.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  shapeOutside?: Property.ShapeOutside | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | optimizeSpeed | crispEdges | geometricPrecision`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **3**  | **4**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  shapeRendering?: Property.ShapeRendering | undefined;
  /**
   * **Syntax**: `normal | spell-out || digits || [ literal-punctuation | no-punctuation ]`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   |   No    | **11.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  speakAs?: Property.SpeakAs | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<'color'>`
   *
   * **Initial value**: `black`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  stopColor?: Property.StopColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<'opacity'>`
   *
   * **Initial value**: `black`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  stopOpacity?: Property.StopOpacity | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<paint>`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  stroke?: Property.Stroke | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   |   No    | **11.1** |  No  | No  |
   */
  strokeColor?: Property.StrokeColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `none | <dasharray>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  strokeDasharray?: Property.StrokeDasharray<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<length-percentage> | <number>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  strokeDashoffset?: Property.StrokeDashoffset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `butt | round | square`
   *
   * **Initial value**: `butt`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  strokeLinecap?: Property.StrokeLinecap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `miter | miter-clip | round | bevel | arcs`
   *
   * **Initial value**: `miter`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  strokeLinejoin?: Property.StrokeLinejoin | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `4`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  strokeMiterlimit?: Property.StrokeMiterlimit | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<'opacity'>`
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  strokeOpacity?: Property.StrokeOpacity | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<length-percentage> | <number>`
   *
   * **Initial value**: `1px`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  strokeWidth?: Property.StrokeWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2021.
   *
   * **Syntax**: `<integer> | <length>`
   *
   * **Initial value**: `8`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **21** | **91**  | **7**  | **79** | No  |
   * |        | 4 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  tabSize?: Property.TabSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | fixed`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **14** |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  tableLayout?: Property.TableLayout | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `start | end | left | right | center | justify | match-parent`
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  textAlign?: Property.TextAlign | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `auto | start | end | left | right | center | justify`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **47** | **49**  | **16** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  textAlignLast?: Property.TextAlignLast | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2016.
   *
   * **Syntax**: `start | middle | end`
   *
   * **Initial value**: `start`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤14** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  textAnchor?: Property.TextAnchor | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | <autospace> | auto`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **140** | **145** | **18.4** | **140** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  textAutospace?: Property.TextAutospace | undefined;
  /**
   * **Syntax**: `normal | <'text-box-trim'> || <'text-box-edge'>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **133** |   No    | **18.2** | **133** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  textBox?: Property.TextBox | undefined;
  /**
   * **Syntax**: `auto | <text-edge>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **133** |   No    | **18.2** | **133** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  textBoxEdge?: Property.TextBoxEdge | undefined;
  /**
   * **Syntax**: `none | trim-start | trim-end | trim-both`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **133** |   No    | **18.2** | **133** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  textBoxTrim?: Property.TextBoxTrim | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | all | [ digits <integer>? ]`
   *
   * **Initial value**: `none`
   *
   * |           Chrome           | Firefox |            Safari            |  Edge  |                   IE                   |
   * | :------------------------: | :-----: | :--------------------------: | :----: | :------------------------------------: |
   * |           **48**           | **48**  |           **15.4**           | **79** | **11** _(-ms-text-combine-horizontal)_ |
   * | 9 _(-webkit-text-combine)_ |         | 5.1 _(-webkit-text-combine)_ |        |                                        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  textCombineUpright?: Property.TextCombineUpright | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **36**  | **12.1** | **79** | No  |
   * |        |         | 8 _-x-_  |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  textDecorationColor?: Property.TextDecorationColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **36**  | **12.1** | **79** | No  |
   * |        |         | 8 _-x-_  |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  textDecorationLine?: Property.TextDecorationLine | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`
   *
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | 57-64  |   No    | **12.1** |  No  | No  |
   * |        |         | 7 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  textDecorationSkip?: Property.TextDecorationSkip | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `auto | all | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **64** | **70**  | **15.4** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  textDecorationSkipInk?: Property.TextDecorationSkipInk | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `solid | double | dotted | dashed | wavy`
   *
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **36**  | **12.1** | **79** | No  |
   * |        |         | 8 _-x-_  |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  textDecorationStyle?: Property.TextDecorationStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2021.
   *
   * **Syntax**: `auto | from-font | <length> | <percentage> `
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **89** | **70**  | **12.1** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  textDecorationThickness?: Property.TextDecorationThickness<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * |  Chrome  | Firefox | Safari |   Edge   | IE  |
   * | :------: | :-----: | :----: | :------: | :-: |
   * |  **99**  | **46**  | **7**  |  **99**  | No  |
   * | 25 _-x-_ |         |        | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  textEmphasisColor?: Property.TextEmphasisColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `auto | [ over | under ] && [ right | left ]?`
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari |   Edge   | IE  |
   * | :------: | :-----: | :----: | :------: | :-: |
   * |  **99**  | **46**  | **7**  |  **99**  | No  |
   * | 25 _-x-_ |         |        | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  textEmphasisPosition?: Property.TextEmphasisPosition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari |   Edge   | IE  |
   * | :------: | :-----: | :----: | :------: | :-: |
   * |  **99**  | **46**  | **7**  |  **99**  | No  |
   * | 25 _-x-_ |         |        | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  textEmphasisStyle?: Property.TextEmphasisStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage> && hanging? && each-line?`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  textIndent?: Property.TextIndent<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | inter-character | inter-word | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge  |   IE   |
   * | :----: | :-----: | :----: | :---: | :----: |
   * |   No   | **55**  |   No   | 12-79 | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  textJustify?: Property.TextJustify | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2020.
   *
   * **Syntax**: `mixed | upright | sideways`
   *
   * **Initial value**: `mixed`
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  | IE  |
   * | :------: | :-----: | :-------: | :----: | :-: |
   * |  **48**  | **41**  |  **14**   | **79** | No  |
   * | 12 _-x-_ |         | 5.1 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  textOrientation?: Property.TextOrientation | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ clip | ellipsis | <string> ]{1,2}`
   *
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **7**  | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-overflow
   */
  textOverflow?: Property.TextOverflow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | optimizeSpeed | optimizeLegibility | geometricPrecision`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **4**  |  **1**  | **5**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  textRendering?: Property.TextRendering | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <shadow-t>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  textShadow?: Property.TextShadow | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | auto | <percentage>`
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **54** |   No    |   No   | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  textSizeAdjust?: Property.TextSizeAdjust | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `space-all | normal | space-first | trim-start`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **123** |   No    |   No   | **123** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  textSpacingTrim?: Property.TextSpacingTrim | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | [ capitalize | uppercase | lowercase ] || full-width || full-size-kana | math-auto`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  textTransform?: Property.TextTransform | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since November 2020.
   *
   * **Syntax**: `auto | <length> | <percentage> `
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **70**  | **12.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  textUnderlineOffset?: Property.TextUnderlineOffset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `auto | from-font | [ under || [ left | right ] ]`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :------: | :----: | :---: |
   * | **33** | **74**  | **12.1** | **12** | **6** |
   * |        |         | 9 _-x-_  |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  textUnderlinePosition?: Property.TextUnderlinePosition | undefined;
  /**
   * Since October 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `wrap | nowrap`
   *
   * **Initial value**: `wrap`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **130** | **124** | **17.4** | **130** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  textWrapMode?: Property.TextWrapMode | undefined;
  /**
   * Since October 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto | balance | stable | pretty`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **130** | **124** | **17.5** | **130** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  textWrapStyle?: Property.TextWrapStyle | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <dashed-ident>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **116** |   No    | **26** | **116** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  timelineScope?: Property.TimelineScope | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage> | <anchor()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  top?: Property.Top<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2019.
   *
   * **Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |    IE    |
   * | :----: | :-----: | :----: | :----: | :------: |
   * | **36** | **52**  | **13** | **12** |  **11**  |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  touchAction?: Property.TouchAction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  |  Firefox  |  Safari   |  Edge  |   IE    |
   * | :-----: | :-------: | :-------: | :----: | :-----: |
   * | **36**  |  **16**   |   **9**   | **12** | **10**  |
   * | 1 _-x-_ | 3.5 _-x-_ | 3.1 _-x-_ |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform
   */
  transform?: Property.Transform | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `content-box | border-box | fill-box | stroke-box | view-box`
   *
   * **Initial value**: `view-box`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **64** | **55**  | **11** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  transformBox?: Property.TransformBox | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE    |
   * | :-----: | :-------: | :-----: | :----: | :-----: |
   * | **36**  |  **16**   |  **9**  | **12** | **10**  |
   * | 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  transformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `flat | preserve-3d`
   *
   * **Initial value**: `flat`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  | IE  |
   * | :------: | :------: | :-----: | :----: | :-: |
   * |  **36**  |  **16**  |  **9**  | **12** | No  |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  transformStyle?: Property.TransformStyle | undefined;
  /**
   * Since August 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<transition-behavior-value>#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **117** | **129** | **17.4** | **117** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  transitionBehavior?: Property.TransitionBehavior | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **26**  | **16**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  transitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  transitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  transitionProperty?: Property.TransitionProperty | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  transitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2022.
   *
   * **Syntax**: `none | <length-percentage> [ <length-percentage> <length>? ]?`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **104** | **72**  | **14.1** | **104** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  translate?: Property.Translate<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | embed | isolate | bidi-override | isolate-override | plaintext`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  unicodeBidi?: Property.UnicodeBidi | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | text | none | all`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |   Safari    |   Edge   |      IE      |
   * | :-----: | :-----: | :---------: | :------: | :----------: |
   * | **54**  | **69**  | **3** _-x-_ |  **79**  | **10** _-x-_ |
   * | 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
   */
  userSelect?: Property.UserSelect | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `none | non-scaling-stroke | non-scaling-size | non-rotation | fixed-position`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **6**  | **15**  | **5.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  vectorEffect?: Property.VectorEffect | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`
   *
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  verticalAlign?: Property.VerticalAlign<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ block | inline | x | y ]#`
   *
   * **Initial value**: `block`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  viewTimelineAxis?: Property.ViewTimelineAxis | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ [ auto | <length-percentage> ]{1,2} ]#`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  viewTimelineInset?: Property.ViewTimelineInset<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ none | <dashed-ident> ]#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  viewTimelineName?: Property.ViewTimelineName | undefined;
  /**
   * **Syntax**: `none | <custom-ident>+`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **125** | **144** | **18.2** | **125** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  viewTransitionClass?: Property.ViewTransitionClass | undefined;
  /**
   * Since October 2025, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | <custom-ident> | match-element`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **111** | **144** | **18** | **111** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  viewTransitionName?: Property.ViewTransitionName | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `visible | hidden | collapse`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
   */
  visibility?: Property.Visibility | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | pre | pre-wrap | pre-line | <'white-space-collapse'> || <'text-wrap-mode'>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
   */
  whiteSpace?: Property.WhiteSpace | undefined;
  /**
   * Since March 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `collapse | preserve | preserve-breaks | preserve-spaces | break-spaces`
   *
   * **Initial value**: `collapse`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **114** | **124** | **17.4** | **114** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  whiteSpaceCollapse?: Property.WhiteSpaceCollapse | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **25** |   No    | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  widows?: Property.Widows | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  width?: Property.Width<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | <animateable-feature>#`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **36** | **36**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
   */
  willChange?: Property.WillChange | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | break-all | keep-all | break-word | auto-phrase`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **15**  | **3**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  wordBreak?: Property.WordBreak | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | <length>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  wordSpacing?: Property.WordSpacing<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2018.
   *
   * **Syntax**: `normal | break-word`
   *
   * **Initial value**: `normal`
   */
  wordWrap?: Property.WordWrap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`
   *
   * **Initial value**: `horizontal-tb`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |  IE   |
   * | :-----: | :-----: | :-------: | :----: | :---: |
   * | **48**  | **41**  | **10.1**  | **12** | **9** |
   * | 8 _-x-_ |         | 5.1 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  writingMode?: Property.WritingMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **42** | **69**  | **9**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  x?: Property.X<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **42** | **69**  | **9**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  y?: Property.Y<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <integer>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
   */
  zIndex?: Property.ZIndex | undefined;
  /**
   * Since May 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `normal | reset | <number [0,∞]> || <percentage [0,∞]>`
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **1**  | **126** | **3.1** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  zoom?: Property.Zoom | undefined;
}

interface StandardShorthandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `initial | inherit | unset | revert | revert-layer`
   *
   * **Initial value**: There is no practical initial value for it.
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **37** | **27**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  all?: Property.All | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation>#`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  animation?: Property.Animation<TTime> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <'animation-range-start'> <'animation-range-end'>? ]#`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  animationRange?: Property.AnimationRange<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-layer>#? , <final-bg-layer>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  background?: Property.Background<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-position>#`
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  backgroundPosition?: Property.BackgroundPosition<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  border?: Property.Border<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-block-start'>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  borderBlock?: Property.BorderBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-top-color'>{1,2}`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  borderBlockColor?: Property.BorderBlockColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  borderBlockEnd?: Property.BorderBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  borderBlockStart?: Property.BorderBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-top-style'>{1,2}`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  borderBlockStyle?: Property.BorderBlockStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-top-width'>{1,2}`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  borderBlockWidth?: Property.BorderBlockWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  borderBottom?: Property.BorderBottom<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  borderColor?: Property.BorderColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **16**  |  **15**   |  **6**  | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  borderImage?: Property.BorderImage | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-block-start'>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  borderInline?: Property.BorderInline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-top-color'>{1,2}`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  borderInlineColor?: Property.BorderInlineColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  borderInlineEnd?: Property.BorderInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  borderInlineStart?: Property.BorderInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-top-style'>{1,2}`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  borderInlineStyle?: Property.BorderInlineStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-top-width'>{1,2}`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  borderInlineWidth?: Property.BorderInlineWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  borderLeft?: Property.BorderLeft<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,4} [ / <length-percentage [0,∞]>{1,4} ]?`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-radius
   */
  borderRadius?: Property.BorderRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  borderRight?: Property.BorderRight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-style>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  borderStyle?: Property.BorderStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  borderTop?: Property.BorderTop<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  borderWidth?: Property.BorderWidth<TLength> | undefined;
  /** **Syntax**: `<'caret-color'> || <'caret-shape'>` */
  caret?: Property.Caret | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  columnRule?: Property.ColumnRule<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'column-width'> || <'column-count'>`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **50** | **52**  |  **9**  | **12** | **10** |
   * |        |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  columns?: Property.Columns<TLength> | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ auto? [ none | <length> ] ]{1,2}`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **83** | **107** | **17** | **83** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  containIntrinsicSize?: Property.ContainIntrinsicSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since February 2023.
   *
   * **Syntax**: `<'container-name'> [ / <'container-type'> ]?`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **105** | **110** | **16** | **105** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  container?: Property.Container | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **22**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  flex?: Property.Flex<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<'flex-direction'> || <'flex-wrap'>`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **28**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  flexFlow?: Property.FlexFlow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ [ <'font-style'> || <font-variant-css2> || <'font-weight'> || <font-width-css3> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'># ] | <system-family-name>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  font?: Property.Font | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<'row-gap'> <'column-gap'>?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
   */
  gap?: Property.Gap<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  grid?: Property.Grid | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line> [ / <grid-line> ]{0,3}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  gridArea?: Property.GridArea | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line> [ / <grid-line> ]?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  gridColumn?: Property.GridColumn | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line> [ / <grid-line> ]?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  gridRow?: Property.GridRow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  gridTemplate?: Property.GridTemplate | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>{1,4}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  inset?: Property.Inset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  insetBlock?: Property.InsetBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  insetInline?: Property.InsetInline<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <integer>`
   *
   * **Initial value**: `none`
   *
   * |   Chrome    |   Firefox    |  Safari   |     Edge     | IE  |
   * | :---------: | :----------: | :-------: | :----------: | :-: |
   * | **6** _-x-_ | **68** _-x-_ | 18.2-18.4 | **17** _-x-_ | No  |
   * |             |              |  5 _-x-_  |              |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  lineClamp?: Property.LineClamp | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  listStyle?: Property.ListStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'margin-top'>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin
   */
  margin?: Property.Margin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'margin-top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  marginBlock?: Property.MarginBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'margin-top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  marginInline?: Property.MarginInline<TLength> | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<mask-layer>#`
   *
   * | Chrome  | Firefox |  Safari   | Edge  | IE  |
   * | :-----: | :-----: | :-------: | :---: | :-: |
   * | **120** | **53**  | **15.4**  | 12-79 | No  |
   * | 1 _-x-_ |         | 3.1 _-x-_ |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  mask?: Property.Mask<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`
   *
   * |              Chrome              | Firefox |             Safari             |               Edge                | IE  |
   * | :------------------------------: | :-----: | :----------------------------: | :-------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image)_ |   No    |            **17.2**            | **79** _(-webkit-mask-box-image)_ | No  |
   * |                                  |         | 3.1 _(-webkit-mask-box-image)_ |                                   |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  maskBorder?: Property.MaskBorder | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`
   *
   * |    Chrome     | Firefox | Safari |  Edge  | IE  |
   * | :-----------: | :-----: | :----: | :----: | :-: |
   * |    **55**     | **72**  | **16** | **79** | No  |
   * | 46 _(motion)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  motion?: Property.Offset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`
   *
   * |    Chrome     | Firefox | Safari |  Edge  | IE  |
   * | :-----------: | :-----: | :----: | :----: | :-: |
   * |    **55**     | **72**  | **16** | **79** | No  |
   * | 46 _(motion)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  offset?: Property.Offset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2023.
   *
   * **Syntax**: `<'outline-width'> || <'outline-style'> || <'outline-color'>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :------: | :----: | :---: |
   * | **94** | **88**  | **16.4** | **94** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline
   */
  outline?: Property.Outline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  overflow?: Property.Overflow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `[ contain | none | auto ]{1,2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  | **16** | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior
   */
  overscrollBehavior?: Property.OverscrollBehavior | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'padding-top'>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
   */
  padding?: Property.Padding<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'padding-top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  paddingBlock?: Property.PaddingBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'padding-top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  paddingInline?: Property.PaddingInline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'align-content'> <'justify-content'>?`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **59** | **45**  | **9**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  placeContent?: Property.PlaceContent | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'align-items'> <'justify-items'>?`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **59** | **45**  | **11** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  placeItems?: Property.PlaceItems | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'align-self'> <'justify-self'>?`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **59** | **45**  | **11** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  placeSelf?: Property.PlaceSelf | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<'position-try-order'>? <'position-try-fallbacks'>`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **125** | **preview** | **26** | **125** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  positionTry?: Property.PositionTry | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2021.
   *
   * **Syntax**: `<length>{1,4}`
   *
   * | Chrome | Firefox |          Safari           |  Edge  | IE  |
   * | :----: | :-----: | :-----------------------: | :----: | :-: |
   * | **69** | **90**  |         **14.1**          | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  scrollMargin?: Property.ScrollMargin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<length>{1,2}`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  scrollMarginBlock?: Property.ScrollMarginBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<length>{1,2}`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  scrollMarginInline?: Property.ScrollMarginInline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,4}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  scrollPadding?: Property.ScrollPadding<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  scrollPaddingBlock?: Property.ScrollPaddingBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  scrollPaddingInline?: Property.ScrollPaddingInline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2021.
   *
   * **Syntax**: `<length>{1,4}`
   *
   * | Chrome | Firefox |          Safari           |  Edge  | IE  |
   * | :----: | :-----: | :-----------------------: | :----: | :-: |
   * | **69** |  68-90  |         **14.1**          | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  scrollSnapMargin?: Property.ScrollMargin<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <'scroll-timeline-name'> <'scroll-timeline-axis'>? ]#`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  scrollTimeline?: Property.ScrollTimeline | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  textDecoration?: Property.TextDecoration<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`
   *
   * |  Chrome  | Firefox | Safari |   Edge   | IE  |
   * | :------: | :-----: | :----: | :------: | :-: |
   * |  **99**  | **46**  | **7**  |  **99**  | No  |
   * | 25 _-x-_ |         |        | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  textEmphasis?: Property.TextEmphasis | undefined;
  /**
   * Since March 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<'text-wrap-mode'> || <'text-wrap-style'>`
   *
   * **Initial value**: `wrap`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **114** | **121** | **17.4** | **114** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  textWrap?: Property.TextWrap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-transition>#`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  transition?: Property.Transition<TTime> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <'view-timeline-name'> [ <'view-timeline-axis'> || <'view-timeline-inset'> ]? ]#`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  viewTimeline?: Property.ViewTimeline | undefined;
}

interface StandardProperties<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardLonghandProperties<TLength, TTime>,
    StandardShorthandProperties<TLength, TTime> {}

interface VendorLonghandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  MozAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-direction>#`
   *
   * **Initial value**: `normal`
   */
  MozAnimationDirection?: Property.AnimationDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ auto | <time [0s,∞]> ]#`
   *
   * **Initial value**: `0s`
   */
  MozAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-fill-mode>#`
   *
   * **Initial value**: `none`
   */
  MozAnimationFillMode?: Property.AnimationFillMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-iteration-count>#`
   *
   * **Initial value**: `1`
   */
  MozAnimationIterationCount?: Property.AnimationIterationCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ none | <keyframes-name> ]#`
   *
   * **Initial value**: `none`
   */
  MozAnimationName?: Property.AnimationName | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-play-state>#`
   *
   * **Initial value**: `running`
   */
  MozAnimationPlayState?: Property.AnimationPlayState | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   */
  MozAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized`
   *
   * **Initial value**: `none` (but this value is overridden in the user agent CSS)
   */
  MozAppearance?: Property.MozAppearance | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `visible | hidden`
   *
   * **Initial value**: `visible`
   */
  MozBackfaceVisibility?: Property.BackfaceVisibility | undefined;
  /**
   * **Syntax**: `<url> | none`
   *
   * **Initial value**: `none`
   */
  MozBinding?: Property.MozBinding | undefined;
  /**
   * **Syntax**: `<color>+ | none`
   *
   * **Initial value**: `none`
   */
  MozBorderBottomColors?: Property.MozBorderBottomColors | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   */
  MozBorderEndColor?: Property.BorderInlineEndColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   */
  MozBorderEndStyle?: Property.BorderInlineEndStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   */
  MozBorderEndWidth?: Property.BorderInlineEndWidth<TLength> | undefined;
  /**
   * **Syntax**: `<color>+ | none`
   *
   * **Initial value**: `none`
   */
  MozBorderLeftColors?: Property.MozBorderLeftColors | undefined;
  /**
   * **Syntax**: `<color>+ | none`
   *
   * **Initial value**: `none`
   */
  MozBorderRightColors?: Property.MozBorderRightColors | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   */
  MozBorderStartColor?: Property.BorderInlineStartColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   */
  MozBorderStartStyle?: Property.BorderInlineStartStyle | undefined;
  /**
   * **Syntax**: `<color>+ | none`
   *
   * **Initial value**: `none`
   */
  MozBorderTopColors?: Property.MozBorderTopColors | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `content-box | border-box`
   *
   * **Initial value**: `content-box`
   */
  MozBoxSizing?: Property.BoxSizing | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  MozColumnRuleColor?: Property.ColumnRuleColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'border-style'>`
   *
   * **Initial value**: `none`
   */
  MozColumnRuleStyle?: Property.ColumnRuleStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'border-width'>`
   *
   * **Initial value**: `medium`
   */
  MozColumnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since November 2016.
   *
   * **Syntax**: `<length> | auto`
   *
   * **Initial value**: `auto`
   */
  MozColumnWidth?: Property.ColumnWidth<TLength> | undefined;
  /**
   * **Syntax**: `none | [ fill | fill-opacity | stroke | stroke-opacity ]#`
   *
   * **Initial value**: `none`
   */
  MozContextProperties?: Property.MozContextProperties | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `normal | <feature-tag-value>#`
   *
   * **Initial value**: `normal`
   */
  MozFontFeatureSettings?: Property.FontFeatureSettings | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | <string>`
   *
   * **Initial value**: `normal`
   */
  MozFontLanguageOverride?: Property.FontLanguageOverride | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | manual | auto`
   *
   * **Initial value**: `manual`
   */
  MozHyphens?: Property.Hyphens | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   */
  MozMarginEnd?: Property.MarginInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   */
  MozMarginStart?: Property.MarginInlineStart<TLength> | undefined;
  /**
   * The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.
   *
   * **Syntax**: `inline | block | horizontal | vertical`
   *
   * **Initial value**: `inline`
   */
  MozOrient?: Property.MozOrient | undefined;
  /**
   * The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.
   *
   * **Syntax**: `auto | never | always | <absolute-size> | <length>`
   *
   * **Initial value**: `auto`
   */
  MozOsxFontSmoothing?: Property.FontSmooth<TLength> | undefined;
  /**
   * **Syntax**: `<outline-radius>`
   *
   * **Initial value**: `0`
   */
  MozOutlineRadiusBottomleft?: Property.MozOutlineRadiusBottomleft<TLength> | undefined;
  /**
   * **Syntax**: `<outline-radius>`
   *
   * **Initial value**: `0`
   */
  MozOutlineRadiusBottomright?: Property.MozOutlineRadiusBottomright<TLength> | undefined;
  /**
   * **Syntax**: `<outline-radius>`
   *
   * **Initial value**: `0`
   */
  MozOutlineRadiusTopleft?: Property.MozOutlineRadiusTopleft<TLength> | undefined;
  /**
   * **Syntax**: `<outline-radius>`
   *
   * **Initial value**: `0`
   */
  MozOutlineRadiusTopright?: Property.MozOutlineRadiusTopright<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   */
  MozPaddingEnd?: Property.PaddingInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   */
  MozPaddingStart?: Property.PaddingInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <length>`
   *
   * **Initial value**: `none`
   */
  MozPerspective?: Property.Perspective<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   */
  MozPerspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
  /**
   * **Syntax**: `ignore | stretch-to-fit`
   *
   * **Initial value**: `stretch-to-fit`
   */
  MozStackSizing?: Property.MozStackSizing | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2021.
   *
   * **Syntax**: `<integer> | <length>`
   *
   * **Initial value**: `8`
   */
  MozTabSize?: Property.TabSize<TLength> | undefined;
  /**
   * **Syntax**: `none | blink`
   *
   * **Initial value**: `none`
   */
  MozTextBlink?: Property.MozTextBlink | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | auto | <percentage>`
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   */
  MozTextSizeAdjust?: Property.TextSizeAdjust | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   */
  MozTransform?: Property.Transform | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   */
  MozTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `flat | preserve-3d`
   *
   * **Initial value**: `flat`
   */
  MozTransformStyle?: Property.TransformStyle | undefined;
  /**
   * The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.
   *
   * **Syntax**: `read-only | read-write | write-only`
   *
   * **Initial value**: `read-only`
   */
  MozUserModify?: Property.MozUserModify | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | text | none | all`
   *
   * **Initial value**: `auto`
   */
  MozUserSelect?: Property.UserSelect | undefined;
  /**
   * **Syntax**: `drag | no-drag`
   *
   * **Initial value**: `drag`
   */
  MozWindowDragging?: Property.MozWindowDragging | undefined;
  /**
   * **Syntax**: `default | menu | tooltip | sheet | none`
   *
   * **Initial value**: `default`
   */
  MozWindowShadow?: Property.MozWindowShadow | undefined;
  /**
   * **Syntax**: `false | true`
   *
   * **Initial value**: `false`
   */
  msAccelerator?: Property.MsAccelerator | undefined;
  /**
   * **Syntax**: `tb | rl | bt | lr`
   *
   * **Initial value**: `tb`
   */
  msBlockProgression?: Property.MsBlockProgression | undefined;
  /**
   * **Syntax**: `none | chained`
   *
   * **Initial value**: `none`
   */
  msContentZoomChaining?: Property.MsContentZoomChaining | undefined;
  /**
   * **Syntax**: `<percentage>`
   *
   * **Initial value**: `400%`
   */
  msContentZoomLimitMax?: Property.MsContentZoomLimitMax | undefined;
  /**
   * **Syntax**: `<percentage>`
   *
   * **Initial value**: `100%`
   */
  msContentZoomLimitMin?: Property.MsContentZoomLimitMin | undefined;
  /**
   * **Syntax**: `snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )`
   *
   * **Initial value**: `snapInterval(0%, 100%)`
   */
  msContentZoomSnapPoints?: Property.MsContentZoomSnapPoints | undefined;
  /**
   * **Syntax**: `none | proximity | mandatory`
   *
   * **Initial value**: `none`
   */
  msContentZoomSnapType?: Property.MsContentZoomSnapType | undefined;
  /**
   * **Syntax**: `none | zoom`
   *
   * **Initial value**: zoom for the top level element, none for all other elements
   */
  msContentZooming?: Property.MsContentZooming | undefined;
  /**
   * **Syntax**: `<string>`
   *
   * **Initial value**: "" (the empty string)
   */
  msFilter?: Property.MsFilter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `row | row-reverse | column | column-reverse`
   *
   * **Initial value**: `row`
   */
  msFlexDirection?: Property.FlexDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   */
  msFlexPositive?: Property.FlexGrow | undefined;
  /**
   * **Syntax**: `[ none | <custom-ident> ]#`
   *
   * **Initial value**: `none`
   */
  msFlowFrom?: Property.MsFlowFrom | undefined;
  /**
   * **Syntax**: `[ none | <custom-ident> ]#`
   *
   * **Initial value**: `none`
   */
  msFlowInto?: Property.MsFlowInto | undefined;
  /**
   * **Syntax**: `none | <track-list> | <auto-track-list>`
   *
   * **Initial value**: `none`
   */
  msGridColumns?: Property.MsGridColumns<TLength> | undefined;
  /**
   * **Syntax**: `none | <track-list> | <auto-track-list>`
   *
   * **Initial value**: `none`
   */
  msGridRows?: Property.MsGridRows<TLength> | undefined;
  /**
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   */
  msHighContrastAdjust?: Property.MsHighContrastAdjust | undefined;
  /**
   * **Syntax**: `auto | <integer>{1,3}`
   *
   * **Initial value**: `auto`
   */
  msHyphenateLimitChars?: Property.MsHyphenateLimitChars | undefined;
  /**
   * **Syntax**: `no-limit | <integer>`
   *
   * **Initial value**: `no-limit`
   */
  msHyphenateLimitLines?: Property.MsHyphenateLimitLines | undefined;
  /**
   * **Syntax**: `<percentage> | <length>`
   *
   * **Initial value**: `0`
   */
  msHyphenateLimitZone?: Property.MsHyphenateLimitZone<TLength> | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | manual | auto`
   *
   * **Initial value**: `manual`
   */
  msHyphens?: Property.Hyphens | undefined;
  /**
   * **Syntax**: `auto | after`
   *
   * **Initial value**: `auto`
   */
  msImeAlign?: Property.MsImeAlign | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `auto | loose | normal | strict | anywhere`
   *
   * **Initial value**: `auto`
   */
  msLineBreak?: Property.LineBreak | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `0`
   */
  msOrder?: Property.Order | undefined;
  /**
   * **Syntax**: `auto | none | scrollbar | -ms-autohiding-scrollbar`
   *
   * **Initial value**: `auto`
   */
  msOverflowStyle?: Property.MsOverflowStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   */
  msOverflowX?: Property.OverflowX | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   */
  msOverflowY?: Property.OverflowY | undefined;
  /**
   * **Syntax**: `chained | none`
   *
   * **Initial value**: `chained`
   */
  msScrollChaining?: Property.MsScrollChaining | undefined;
  /**
   * **Syntax**: `auto | <length>`
   *
   * **Initial value**: `auto`
   */
  msScrollLimitXMax?: Property.MsScrollLimitXMax<TLength> | undefined;
  /**
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  msScrollLimitXMin?: Property.MsScrollLimitXMin<TLength> | undefined;
  /**
   * **Syntax**: `auto | <length>`
   *
   * **Initial value**: `auto`
   */
  msScrollLimitYMax?: Property.MsScrollLimitYMax<TLength> | undefined;
  /**
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  msScrollLimitYMin?: Property.MsScrollLimitYMin<TLength> | undefined;
  /**
   * **Syntax**: `none | railed`
   *
   * **Initial value**: `railed`
   */
  msScrollRails?: Property.MsScrollRails | undefined;
  /**
   * **Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`
   *
   * **Initial value**: `snapInterval(0px, 100%)`
   */
  msScrollSnapPointsX?: Property.MsScrollSnapPointsX | undefined;
  /**
   * **Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`
   *
   * **Initial value**: `snapInterval(0px, 100%)`
   */
  msScrollSnapPointsY?: Property.MsScrollSnapPointsY | undefined;
  /**
   * **Syntax**: `none | proximity | mandatory`
   *
   * **Initial value**: `none`
   */
  msScrollSnapType?: Property.MsScrollSnapType | undefined;
  /**
   * **Syntax**: `none | vertical-to-horizontal`
   *
   * **Initial value**: `none`
   */
  msScrollTranslation?: Property.MsScrollTranslation | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: depends on user agent
   */
  msScrollbar3dlightColor?: Property.MsScrollbar3dlightColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ButtonText`
   */
  msScrollbarArrowColor?: Property.MsScrollbarArrowColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: depends on user agent
   */
  msScrollbarBaseColor?: Property.MsScrollbarBaseColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ThreeDDarkShadow`
   */
  msScrollbarDarkshadowColor?: Property.MsScrollbarDarkshadowColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ThreeDFace`
   */
  msScrollbarFaceColor?: Property.MsScrollbarFaceColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ThreeDHighlight`
   */
  msScrollbarHighlightColor?: Property.MsScrollbarHighlightColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ThreeDDarkShadow`
   */
  msScrollbarShadowColor?: Property.MsScrollbarShadowColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `Scrollbar`
   */
  msScrollbarTrackColor?: Property.MsScrollbarTrackColor | undefined;
  /**
   * **Syntax**: `none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space`
   *
   * **Initial value**: `none`
   */
  msTextAutospace?: Property.MsTextAutospace | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | all | [ digits <integer>? ]`
   *
   * **Initial value**: `none`
   */
  msTextCombineHorizontal?: Property.TextCombineUpright | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ clip | ellipsis | <string> ]{1,2}`
   *
   * **Initial value**: `clip`
   */
  msTextOverflow?: Property.TextOverflow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2019.
   *
   * **Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`
   *
   * **Initial value**: `auto`
   */
  msTouchAction?: Property.TouchAction | undefined;
  /**
   * **Syntax**: `grippers | none`
   *
   * **Initial value**: `grippers`
   */
  msTouchSelect?: Property.MsTouchSelect | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   */
  msTransform?: Property.Transform | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   */
  msTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  msTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  msTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   */
  msTransitionProperty?: Property.TransitionProperty | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   */
  msTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * **Syntax**: `none | element | text`
   *
   * **Initial value**: `text`
   */
  msUserSelect?: Property.MsUserSelect | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | break-all | keep-all | break-word | auto-phrase`
   *
   * **Initial value**: `normal`
   */
  msWordBreak?: Property.WordBreak | undefined;
  /**
   * **Syntax**: `auto | both | start | end | maximum | clear`
   *
   * **Initial value**: `auto`
   */
  msWrapFlow?: Property.MsWrapFlow | undefined;
  /**
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  msWrapMargin?: Property.MsWrapMargin<TLength> | undefined;
  /**
   * **Syntax**: `wrap | none`
   *
   * **Initial value**: `wrap`
   */
  msWrapThrough?: Property.MsWrapThrough | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`
   *
   * **Initial value**: `horizontal-tb`
   */
  msWritingMode?: Property.WritingMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`
   *
   * **Initial value**: `normal`
   */
  WebkitAlignContent?: Property.AlignContent | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ] | anchor-center`
   *
   * **Initial value**: `normal`
   */
  WebkitAlignItems?: Property.AlignItems | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position> | anchor-center`
   *
   * **Initial value**: `auto`
   */
  WebkitAlignSelf?: Property.AlignSelf | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  WebkitAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-direction>#`
   *
   * **Initial value**: `normal`
   */
  WebkitAnimationDirection?: Property.AnimationDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ auto | <time [0s,∞]> ]#`
   *
   * **Initial value**: `0s`
   */
  WebkitAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-fill-mode>#`
   *
   * **Initial value**: `none`
   */
  WebkitAnimationFillMode?: Property.AnimationFillMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-iteration-count>#`
   *
   * **Initial value**: `1`
   */
  WebkitAnimationIterationCount?: Property.AnimationIterationCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ none | <keyframes-name> ]#`
   *
   * **Initial value**: `none`
   */
  WebkitAnimationName?: Property.AnimationName | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-play-state>#`
   *
   * **Initial value**: `running`
   */
  WebkitAnimationPlayState?: Property.AnimationPlayState | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   */
  WebkitAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button`
   *
   * **Initial value**: `none` (but this value is overridden in the user agent CSS)
   */
  WebkitAppearance?: Property.WebkitAppearance | undefined;
  /**
   * Since September 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | <filter-value-list>`
   *
   * **Initial value**: `none`
   */
  WebkitBackdropFilter?: Property.BackdropFilter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `visible | hidden`
   *
   * **Initial value**: `visible`
   */
  WebkitBackfaceVisibility?: Property.BackfaceVisibility | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-clip>#`
   *
   * **Initial value**: `border-box`
   */
  WebkitBackgroundClip?: Property.BackgroundClip | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<visual-box>#`
   *
   * **Initial value**: `padding-box`
   */
  WebkitBackgroundOrigin?: Property.BackgroundOrigin | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   */
  WebkitBackgroundSize?: Property.BackgroundSize<TLength> | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitBorderBeforeColor?: Property.WebkitBorderBeforeColor | undefined;
  /**
   * **Syntax**: `<'border-style'>`
   *
   * **Initial value**: `none`
   */
  WebkitBorderBeforeStyle?: Property.WebkitBorderBeforeStyle | undefined;
  /**
   * **Syntax**: `<'border-width'>`
   *
   * **Initial value**: `medium`
   */
  WebkitBorderBeforeWidth?: Property.WebkitBorderBeforeWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   */
  WebkitBorderBottomLeftRadius?: Property.BorderBottomLeftRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   */
  WebkitBorderBottomRightRadius?: Property.BorderBottomRightRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <number [0,∞]> | <percentage [0,∞]> ]{1,4}  && fill?`
   *
   * **Initial value**: `100%`
   */
  WebkitBorderImageSlice?: Property.BorderImageSlice | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   */
  WebkitBorderTopLeftRadius?: Property.BorderTopLeftRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   */
  WebkitBorderTopRightRadius?: Property.BorderTopRightRadius<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `slice | clone`
   *
   * **Initial value**: `slice`
   */
  WebkitBoxDecorationBreak?: Property.BoxDecorationBreak | undefined;
  /**
   * The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.
   *
   * **Syntax**: `[ above | below | right | left ]? <length>? <image>?`
   *
   * **Initial value**: `none`
   */
  WebkitBoxReflect?: Property.WebkitBoxReflect<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <shadow>#`
   *
   * **Initial value**: `none`
   */
  WebkitBoxShadow?: Property.BoxShadow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `content-box | border-box`
   *
   * **Initial value**: `content-box`
   */
  WebkitBoxSizing?: Property.BoxSizing | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`
   *
   * **Initial value**: `none`
   */
  WebkitClipPath?: Property.ClipPath | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<integer> | auto`
   *
   * **Initial value**: `auto`
   */
  WebkitColumnCount?: Property.ColumnCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `auto | balance`
   *
   * **Initial value**: `balance`
   */
  WebkitColumnFill?: Property.ColumnFill | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitColumnRuleColor?: Property.ColumnRuleColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'border-style'>`
   *
   * **Initial value**: `none`
   */
  WebkitColumnRuleStyle?: Property.ColumnRuleStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'border-width'>`
   *
   * **Initial value**: `medium`
   */
  WebkitColumnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `none | all`
   *
   * **Initial value**: `none`
   */
  WebkitColumnSpan?: Property.ColumnSpan | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since November 2016.
   *
   * **Syntax**: `<length> | auto`
   *
   * **Initial value**: `auto`
   */
  WebkitColumnWidth?: Property.ColumnWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2016.
   *
   * **Syntax**: `none | <filter-value-list>`
   *
   * **Initial value**: `none`
   */
  WebkitFilter?: Property.Filter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `content | <'width'>`
   *
   * **Initial value**: `auto`
   */
  WebkitFlexBasis?: Property.FlexBasis<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `row | row-reverse | column | column-reverse`
   *
   * **Initial value**: `row`
   */
  WebkitFlexDirection?: Property.FlexDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   */
  WebkitFlexGrow?: Property.FlexGrow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `1`
   */
  WebkitFlexShrink?: Property.FlexShrink | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `nowrap | wrap | wrap-reverse`
   *
   * **Initial value**: `nowrap`
   */
  WebkitFlexWrap?: Property.FlexWrap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `normal | <feature-tag-value>#`
   *
   * **Initial value**: `normal`
   */
  WebkitFontFeatureSettings?: Property.FontFeatureSettings | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | normal | none`
   *
   * **Initial value**: `auto`
   */
  WebkitFontKerning?: Property.FontKerning | undefined;
  /**
   * The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.
   *
   * **Syntax**: `auto | never | always | <absolute-size> | <length>`
   *
   * **Initial value**: `auto`
   */
  WebkitFontSmoothing?: Property.FontSmooth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`
   *
   * **Initial value**: `normal`
   */
  WebkitFontVariantLigatures?: Property.FontVariantLigatures | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto | <string>`
   *
   * **Initial value**: `auto`
   */
  WebkitHyphenateCharacter?: Property.HyphenateCharacter | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | manual | auto`
   *
   * **Initial value**: `manual`
   */
  WebkitHyphens?: Property.Hyphens | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | [ <number> <integer>? ]`
   *
   * **Initial value**: `normal`
   */
  WebkitInitialLetter?: Property.InitialLetter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`
   *
   * **Initial value**: `normal`
   */
  WebkitJustifyContent?: Property.JustifyContent | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `auto | loose | normal | strict | anywhere`
   *
   * **Initial value**: `auto`
   */
  WebkitLineBreak?: Property.LineBreak | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <integer>`
   *
   * **Initial value**: `none`
   */
  WebkitLineClamp?: Property.WebkitLineClamp | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'width'>`
   *
   * **Initial value**: `auto`
   */
  WebkitLogicalHeight?: Property.BlockSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'width'>`
   *
   * **Initial value**: `auto`
   */
  WebkitLogicalWidth?: Property.InlineSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   */
  WebkitMarginEnd?: Property.MarginInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   */
  WebkitMarginStart?: Property.MarginInlineStart<TLength> | undefined;
  /**
   * **Syntax**: `<attachment>#`
   *
   * **Initial value**: `scroll`
   */
  WebkitMaskAttachment?: Property.WebkitMaskAttachment | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <length> | <number> ]{1,4}`
   *
   * **Initial value**: `0`
   */
  WebkitMaskBoxImageOutset?: Property.MaskBorderOutset<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ stretch | repeat | round | space ]{1,2}`
   *
   * **Initial value**: `stretch`
   */
  WebkitMaskBoxImageRepeat?: Property.MaskBorderRepeat | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<number-percentage>{1,4} fill?`
   *
   * **Initial value**: `0`
   */
  WebkitMaskBoxImageSlice?: Property.MaskBorderSlice | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <image>`
   *
   * **Initial value**: `none`
   */
  WebkitMaskBoxImageSource?: Property.MaskBorderSource | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`
   *
   * **Initial value**: `auto`
   */
  WebkitMaskBoxImageWidth?: Property.MaskBorderWidth<TLength> | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ <coord-box> | no-clip | border | padding | content | text ]#`
   *
   * **Initial value**: `border`
   */
  WebkitMaskClip?: Property.WebkitMaskClip | undefined;
  /**
   * The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.
   *
   * **Syntax**: `<composite-style>#`
   *
   * **Initial value**: `source-over`
   */
  WebkitMaskComposite?: Property.WebkitMaskComposite | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<mask-reference>#`
   *
   * **Initial value**: `none`
   */
  WebkitMaskImage?: Property.WebkitMaskImage | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ <coord-box> | border | padding | content ]#`
   *
   * **Initial value**: `padding`
   */
  WebkitMaskOrigin?: Property.WebkitMaskOrigin | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<position>#`
   *
   * **Initial value**: `0% 0%`
   */
  WebkitMaskPosition?: Property.WebkitMaskPosition<TLength> | undefined;
  /**
   * The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right ]#`
   *
   * **Initial value**: `0%`
   */
  WebkitMaskPositionX?: Property.WebkitMaskPositionX<TLength> | undefined;
  /**
   * The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.
   *
   * **Syntax**: `[ <length-percentage> | top | center | bottom ]#`
   *
   * **Initial value**: `0%`
   */
  WebkitMaskPositionY?: Property.WebkitMaskPositionY<TLength> | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<repeat-style>#`
   *
   * **Initial value**: `repeat`
   */
  WebkitMaskRepeat?: Property.WebkitMaskRepeat | undefined;
  /**
   * The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.
   *
   * **Syntax**: `repeat | no-repeat | space | round`
   *
   * **Initial value**: `repeat`
   */
  WebkitMaskRepeatX?: Property.WebkitMaskRepeatX | undefined;
  /**
   * The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.
   *
   * **Syntax**: `repeat | no-repeat | space | round`
   *
   * **Initial value**: `repeat`
   */
  WebkitMaskRepeatY?: Property.WebkitMaskRepeatY | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   */
  WebkitMaskSize?: Property.WebkitMaskSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'max-width'>`
   *
   * **Initial value**: `none`
   */
  WebkitMaxInlineSize?: Property.MaxInlineSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `0`
   */
  WebkitOrder?: Property.Order | undefined;
  /**
   * **Syntax**: `auto | touch`
   *
   * **Initial value**: `auto`
   */
  WebkitOverflowScrolling?: Property.WebkitOverflowScrolling | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   */
  WebkitPaddingEnd?: Property.PaddingInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   */
  WebkitPaddingStart?: Property.PaddingInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <length>`
   *
   * **Initial value**: `none`
   */
  WebkitPerspective?: Property.Perspective<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   */
  WebkitPerspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
  /**
   * Since May 2025, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `economy | exact`
   *
   * **Initial value**: `economy`
   */
  WebkitPrintColorAdjust?: Property.PrintColorAdjust | undefined;
  /**
   * Since December 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ alternate || [ over | under ] ] | inter-character`
   *
   * **Initial value**: `alternate`
   */
  WebkitRubyPosition?: Property.RubyPosition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2022.
   *
   * **Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`
   *
   * **Initial value**: `none`
   */
  WebkitScrollSnapType?: Property.ScrollSnapType | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   */
  WebkitShapeMargin?: Property.ShapeMargin<TLength> | undefined;
  /**
   * **`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `black`
   */
  WebkitTapHighlightColor?: Property.WebkitTapHighlightColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | all | [ digits <integer>? ]`
   *
   * **Initial value**: `none`
   */
  WebkitTextCombine?: Property.TextCombineUpright | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextDecorationColor?: Property.TextDecorationColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`
   *
   * **Initial value**: `none`
   */
  WebkitTextDecorationLine?: Property.TextDecorationLine | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`
   *
   * **Initial value**: `objects`
   */
  WebkitTextDecorationSkip?: Property.TextDecorationSkip | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `solid | double | dotted | dashed | wavy`
   *
   * **Initial value**: `solid`
   */
  WebkitTextDecorationStyle?: Property.TextDecorationStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextEmphasisColor?: Property.TextEmphasisColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `auto | [ over | under ] && [ right | left ]?`
   *
   * **Initial value**: `auto`
   */
  WebkitTextEmphasisPosition?: Property.TextEmphasisPosition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`
   *
   * **Initial value**: `none`
   */
  WebkitTextEmphasisStyle?: Property.TextEmphasisStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2016.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextFillColor?: Property.WebkitTextFillColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2020.
   *
   * **Syntax**: `mixed | upright | sideways`
   *
   * **Initial value**: `mixed`
   */
  WebkitTextOrientation?: Property.TextOrientation | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | auto | <percentage>`
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   */
  WebkitTextSizeAdjust?: Property.TextSizeAdjust | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextStrokeColor?: Property.WebkitTextStrokeColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  WebkitTextStrokeWidth?: Property.WebkitTextStrokeWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `auto | from-font | [ under || [ left | right ] ]`
   *
   * **Initial value**: `auto`
   */
  WebkitTextUnderlinePosition?: Property.TextUnderlinePosition | undefined;
  /**
   * The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.
   *
   * **Syntax**: `default | none`
   *
   * **Initial value**: `default`
   */
  WebkitTouchCallout?: Property.WebkitTouchCallout | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   */
  WebkitTransform?: Property.Transform | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   */
  WebkitTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `flat | preserve-3d`
   *
   * **Initial value**: `flat`
   */
  WebkitTransformStyle?: Property.TransformStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  WebkitTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  WebkitTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   */
  WebkitTransitionProperty?: Property.TransitionProperty | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   */
  WebkitTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * **Syntax**: `read-only | read-write | read-write-plaintext-only`
   *
   * **Initial value**: `read-only`
   */
  WebkitUserModify?: Property.WebkitUserModify | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | text | none | all`
   *
   * **Initial value**: `auto`
   */
  WebkitUserSelect?: Property.WebkitUserSelect | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`
   *
   * **Initial value**: `horizontal-tb`
   */
  WebkitWritingMode?: Property.WritingMode | undefined;
}

interface VendorShorthandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation>#`
   */
  MozAnimation?: Property.Animation<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   */
  MozBorderImage?: Property.BorderImage | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`
   */
  MozColumnRule?: Property.ColumnRule<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'column-width'> || <'column-count'>`
   */
  MozColumns?: Property.Columns<TLength> | undefined;
  /** **Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?` */
  MozOutlineRadius?: Property.MozOutlineRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-transition>#`
   */
  MozTransition?: Property.Transition<TTime> | undefined;
  /** **Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>` */
  msContentZoomLimit?: Property.MsContentZoomLimit | undefined;
  /** **Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>` */
  msContentZoomSnap?: Property.MsContentZoomSnap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
   */
  msFlex?: Property.Flex<TLength> | undefined;
  /** **Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>` */
  msScrollLimit?: Property.MsScrollLimit | undefined;
  /** **Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>` */
  msScrollSnapX?: Property.MsScrollSnapX | undefined;
  /** **Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>` */
  msScrollSnapY?: Property.MsScrollSnapY | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-transition>#`
   */
  msTransition?: Property.Transition<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation>#`
   */
  WebkitAnimation?: Property.Animation<TTime> | undefined;
  /**
   * The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-width'> || <'border-style'> || <color>`
   */
  WebkitBorderBefore?: Property.WebkitBorderBefore<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   */
  WebkitBorderImage?: Property.BorderImage | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,4} [ / <length-percentage [0,∞]>{1,4} ]?`
   */
  WebkitBorderRadius?: Property.BorderRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`
   */
  WebkitColumnRule?: Property.ColumnRule<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'column-width'> || <'column-count'>`
   */
  WebkitColumns?: Property.Columns<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
   */
  WebkitFlex?: Property.Flex<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<'flex-direction'> || <'flex-wrap'>`
   */
  WebkitFlexFlow?: Property.FlexFlow | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <visual-box> | border | padding | content | text ] || [ <visual-box> | border | padding | content ] ]#`
   */
  WebkitMask?: Property.WebkitMask<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`
   */
  WebkitMaskBoxImage?: Property.MaskBorder | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`
   */
  WebkitTextEmphasis?: Property.TextEmphasis | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<length> || <color>`
   */
  WebkitTextStroke?: Property.WebkitTextStroke<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-transition>#`
   */
  WebkitTransition?: Property.Transition<TTime> | undefined;
}

interface VendorProperties<TLength = (string & {}) | 0, TTime = string & {}> extends VendorLonghandProperties<TLength, TTime>, VendorShorthandProperties<TLength, TTime> {}

interface ObsoleteProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | baseline | stretch`
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  boxAlign?: Property.BoxAlign | undefined;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Syntax**: `normal | reverse | inherit`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  boxDirection?: Property.BoxDirection | undefined;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  boxFlex?: Property.BoxFlex | undefined;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  boxFlexGroup?: Property.BoxFlexGroup | undefined;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Syntax**: `single | multiple`
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  boxLines?: Property.BoxLines | undefined;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  boxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`
   *
   * **Initial value**: `inline-axis`
   *
   * @deprecated
   */
  boxOrient?: Property.BoxOrient | undefined;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | justify`
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  boxPack?: Property.BoxPack | undefined;
  /**
   * The **`clip`** CSS property defines a visible portion of an element. The `clip` property applies only to absolutely positioned elements — that is, elements with `position:absolute` or `position:fixed`.
   *
   * **Syntax**: `<shape> | auto`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  clip?: Property.Clip | undefined;
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   *
   * **Syntax**: `<font-stretch-absolute>`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  fontStretch?: Property.FontStretch | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridColumnGap?: Property.GridColumnGap<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<'grid-row-gap'> <'grid-column-gap'>?`
   *
   * @deprecated
   */
  gridGap?: Property.GridGap<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridRowGap?: Property.GridRowGap<TLength> | undefined;
  /**
   * **Syntax**: `auto | normal | active | inactive | disabled`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  imeMode?: Property.ImeMode | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <position-area>`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  insetArea?: Property.PositionArea | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * @deprecated
   */
  offsetBlock?: Property.InsetBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetBlockEnd?: Property.InsetBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetBlockStart?: Property.InsetBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * @deprecated
   */
  offsetInline?: Property.InsetInline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetInlineEnd?: Property.InsetInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetInlineStart?: Property.InsetInlineStart<TLength> | undefined;
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   * **Syntax**: `auto | always | avoid | left | right | recto | verso`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  pageBreakAfter?: Property.PageBreakAfter | undefined;
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   * **Syntax**: `auto | always | avoid | left | right | recto | verso`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  pageBreakBefore?: Property.PageBreakBefore | undefined;
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   * **Syntax**: `auto | avoid`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  pageBreakInside?: Property.PageBreakInside | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | [ [<dashed-ident> || <try-tactic>] | <'position-area'> ]#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  positionTryOptions?: Property.PositionTryFallbacks | undefined;
  /**
   * **Syntax**: `none | <position>#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapCoordinate?: Property.ScrollSnapCoordinate<TLength> | undefined;
  /**
   * **Syntax**: `<position>`
   *
   * **Initial value**: `0px 0px`
   *
   * @deprecated
   */
  scrollSnapDestination?: Property.ScrollSnapDestination<TLength> | undefined;
  /**
   * **Syntax**: `none | repeat( <length-percentage> )`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapPointsX?: Property.ScrollSnapPointsX | undefined;
  /**
   * **Syntax**: `none | repeat( <length-percentage> )`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapPointsY?: Property.ScrollSnapPointsY | undefined;
  /**
   * **Syntax**: `none | mandatory | proximity`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapTypeX?: Property.ScrollSnapTypeX | undefined;
  /**
   * **Syntax**: `none | mandatory | proximity`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapTypeY?: Property.ScrollSnapTypeY | undefined;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | baseline | stretch`
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  KhtmlBoxAlign?: Property.BoxAlign | undefined;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Syntax**: `normal | reverse | inherit`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  KhtmlBoxDirection?: Property.BoxDirection | undefined;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  KhtmlBoxFlex?: Property.BoxFlex | undefined;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  KhtmlBoxFlexGroup?: Property.BoxFlexGroup | undefined;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Syntax**: `single | multiple`
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  KhtmlBoxLines?: Property.BoxLines | undefined;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  KhtmlBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`
   *
   * **Initial value**: `inline-axis`
   *
   * @deprecated
   */
  KhtmlBoxOrient?: Property.BoxOrient | undefined;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | justify`
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  KhtmlBoxPack?: Property.BoxPack | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `auto | loose | normal | strict | anywhere`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  KhtmlLineBreak?: Property.LineBreak | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<opacity-value>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  KhtmlOpacity?: Property.Opacity | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | text | none | all`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  KhtmlUserSelect?: Property.UserSelect | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-clip>#`
   *
   * **Initial value**: `border-box`
   *
   * @deprecated
   */
  MozBackgroundClip?: Property.BackgroundClip | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<visual-box>#`
   *
   * **Initial value**: `padding-box`
   *
   * @deprecated
   */
  MozBackgroundOrigin?: Property.BackgroundOrigin | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  MozBackgroundSize?: Property.BackgroundSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,4} [ / <length-percentage [0,∞]>{1,4} ]?`
   *
   * @deprecated
   */
  MozBorderRadius?: Property.BorderRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusBottomleft?: Property.BorderBottomLeftRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusBottomright?: Property.BorderBottomRightRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusTopleft?: Property.BorderTopLeftRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusTopright?: Property.BorderTopRightRadius<TLength> | undefined;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | baseline | stretch`
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  MozBoxAlign?: Property.BoxAlign | undefined;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Syntax**: `normal | reverse | inherit`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  MozBoxDirection?: Property.BoxDirection | undefined;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBoxFlex?: Property.BoxFlex | undefined;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  MozBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`
   *
   * **Initial value**: `inline-axis`
   *
   * @deprecated
   */
  MozBoxOrient?: Property.BoxOrient | undefined;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | justify`
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  MozBoxPack?: Property.BoxPack | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <shadow>#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozBoxShadow?: Property.BoxShadow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<integer> | auto`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozColumnCount?: Property.ColumnCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `auto | balance`
   *
   * **Initial value**: `balance`
   *
   * @deprecated
   */
  MozColumnFill?: Property.ColumnFill | undefined;
  /**
   * The non-standard **`-moz-float-edge`** CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.
   *
   * **Syntax**: `border-box | content-box | margin-box | padding-box`
   *
   * **Initial value**: `content-box`
   *
   * @deprecated
   */
  MozFloatEdge?: Property.MozFloatEdge | undefined;
  /**
   * The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.
   *
   * **Syntax**: `0 | 1`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozForceBrokenImageIcon?: Property.MozForceBrokenImageIcon | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<opacity-value>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  MozOpacity?: Property.Opacity | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2023.
   *
   * **Syntax**: `<'outline-width'> || <'outline-style'> || <'outline-color'>`
   *
   * @deprecated
   */
  MozOutline?: Property.Outline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <color>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozOutlineColor?: Property.OutlineColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <outline-line-style>`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozOutlineStyle?: Property.OutlineStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * @deprecated
   */
  MozOutlineWidth?: Property.OutlineWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `auto | start | end | left | right | center | justify`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozTextAlignLast?: Property.TextAlignLast | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * @deprecated
   */
  MozTextDecorationColor?: Property.TextDecorationColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozTextDecorationLine?: Property.TextDecorationLine | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `solid | double | dotted | dashed | wavy`
   *
   * **Initial value**: `solid`
   *
   * @deprecated
   */
  MozTextDecorationStyle?: Property.TextDecorationStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  MozTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  MozTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   *
   * @deprecated
   */
  MozTransitionProperty?: Property.TransitionProperty | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  MozTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.
   *
   * **Syntax**: `ignore | normal | select-after | select-before | select-menu | select-same | select-all | none`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozUserFocus?: Property.MozUserFocus | undefined;
  /**
   * In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.
   *
   * **Syntax**: `auto | none | enabled | disabled`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozUserInput?: Property.MozUserInput | undefined;
  /**
   * **Syntax**: `auto | normal | active | inactive | disabled`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  msImeMode?: Property.ImeMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation>#`
   *
   * @deprecated
   */
  OAnimation?: Property.Animation<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-direction>#`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  OAnimationDirection?: Property.AnimationDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ auto | <time [0s,∞]> ]#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-fill-mode>#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OAnimationFillMode?: Property.AnimationFillMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-iteration-count>#`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  OAnimationIterationCount?: Property.AnimationIterationCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ none | <keyframes-name> ]#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OAnimationName?: Property.AnimationName | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-play-state>#`
   *
   * **Initial value**: `running`
   *
   * @deprecated
   */
  OAnimationPlayState?: Property.AnimationPlayState | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  OAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  OBackgroundSize?: Property.BackgroundSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   *
   * @deprecated
   */
  OBorderImage?: Property.BorderImage | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `fill | contain | cover | none | scale-down`
   *
   * **Initial value**: `fill`
   *
   * @deprecated
   */
  OObjectFit?: Property.ObjectFit | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   *
   * @deprecated
   */
  OObjectPosition?: Property.ObjectPosition<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2021.
   *
   * **Syntax**: `<integer> | <length>`
   *
   * **Initial value**: `8`
   *
   * @deprecated
   */
  OTabSize?: Property.TabSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ clip | ellipsis | <string> ]{1,2}`
   *
   * **Initial value**: `clip`
   *
   * @deprecated
   */
  OTextOverflow?: Property.TextOverflow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OTransform?: Property.Transform | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   *
   * @deprecated
   */
  OTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-transition>#`
   *
   * @deprecated
   */
  OTransition?: Property.Transition<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   *
   * @deprecated
   */
  OTransitionProperty?: Property.TransitionProperty | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  OTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | baseline | stretch`
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  WebkitBoxAlign?: Property.BoxAlign | undefined;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Syntax**: `normal | reverse | inherit`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  WebkitBoxDirection?: Property.BoxDirection | undefined;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  WebkitBoxFlex?: Property.BoxFlex | undefined;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  WebkitBoxFlexGroup?: Property.BoxFlexGroup | undefined;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Syntax**: `single | multiple`
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  WebkitBoxLines?: Property.BoxLines | undefined;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  WebkitBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`
   *
   * **Initial value**: `inline-axis`
   *
   * @deprecated
   */
  WebkitBoxOrient?: Property.BoxOrient | undefined;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | justify`
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  WebkitBoxPack?: Property.BoxPack | undefined;
}

interface SvgProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  alignmentBaseline?: Property.AlignmentBaseline | undefined;
  baselineShift?: Property.BaselineShift<TLength> | undefined;
  clip?: Property.Clip | undefined;
  clipPath?: Property.ClipPath | undefined;
  clipRule?: Property.ClipRule | undefined;
  color?: Property.Color | undefined;
  colorInterpolation?: Property.ColorInterpolation | undefined;
  colorRendering?: Property.ColorRendering | undefined;
  cursor?: Property.Cursor | undefined;
  direction?: Property.Direction | undefined;
  display?: Property.Display | undefined;
  dominantBaseline?: Property.DominantBaseline | undefined;
  fill?: Property.Fill | undefined;
  fillOpacity?: Property.FillOpacity | undefined;
  fillRule?: Property.FillRule | undefined;
  filter?: Property.Filter | undefined;
  floodColor?: Property.FloodColor | undefined;
  floodOpacity?: Property.FloodOpacity | undefined;
  font?: Property.Font | undefined;
  fontFamily?: Property.FontFamily | undefined;
  fontSize?: Property.FontSize<TLength> | undefined;
  fontSizeAdjust?: Property.FontSizeAdjust | undefined;
  fontStretch?: Property.FontStretch | undefined;
  fontStyle?: Property.FontStyle | undefined;
  fontVariant?: Property.FontVariant | undefined;
  fontWeight?: Property.FontWeight | undefined;
  glyphOrientationVertical?: Property.GlyphOrientationVertical | undefined;
  imageRendering?: Property.ImageRendering | undefined;
  letterSpacing?: Property.LetterSpacing<TLength> | undefined;
  lightingColor?: Property.LightingColor | undefined;
  lineHeight?: Property.LineHeight<TLength> | undefined;
  marker?: Property.Marker | undefined;
  markerEnd?: Property.MarkerEnd | undefined;
  markerMid?: Property.MarkerMid | undefined;
  markerStart?: Property.MarkerStart | undefined;
  mask?: Property.Mask<TLength> | undefined;
  opacity?: Property.Opacity | undefined;
  overflow?: Property.Overflow | undefined;
  paintOrder?: Property.PaintOrder | undefined;
  pointerEvents?: Property.PointerEvents | undefined;
  shapeRendering?: Property.ShapeRendering | undefined;
  stopColor?: Property.StopColor | undefined;
  stopOpacity?: Property.StopOpacity | undefined;
  stroke?: Property.Stroke | undefined;
  strokeDasharray?: Property.StrokeDasharray<TLength> | undefined;
  strokeDashoffset?: Property.StrokeDashoffset<TLength> | undefined;
  strokeLinecap?: Property.StrokeLinecap | undefined;
  strokeLinejoin?: Property.StrokeLinejoin | undefined;
  strokeMiterlimit?: Property.StrokeMiterlimit | undefined;
  strokeOpacity?: Property.StrokeOpacity | undefined;
  strokeWidth?: Property.StrokeWidth<TLength> | undefined;
  textAnchor?: Property.TextAnchor | undefined;
  textDecoration?: Property.TextDecoration<TLength> | undefined;
  textRendering?: Property.TextRendering | undefined;
  unicodeBidi?: Property.UnicodeBidi | undefined;
  vectorEffect?: Property.VectorEffect | undefined;
  visibility?: Property.Visibility | undefined;
  whiteSpace?: Property.WhiteSpace | undefined;
  wordSpacing?: Property.WordSpacing<TLength> | undefined;
  writingMode?: Property.WritingMode | undefined;
}

interface Properties<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardProperties<TLength, TTime>,
    VendorProperties<TLength, TTime>,
    ObsoleteProperties<TLength, TTime>,
    SvgProperties<TLength, TTime> {}

type Globals = "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";

declare namespace Property {
  export type AccentColor = Globals | DataType.Color | "auto";

  export type AlignContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});

  export type AlignItems = Globals | DataType.SelfPosition | "anchor-center" | "baseline" | "normal" | "stretch" | (string & {});

  export type AlignSelf = Globals | DataType.SelfPosition | "anchor-center" | "auto" | "baseline" | "normal" | "stretch" | (string & {});

  export type AlignTracks = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});

  export type AlignmentBaseline = Globals | "alphabetic" | "baseline" | "central" | "ideographic" | "mathematical" | "middle" | "text-after-edge" | "text-before-edge";

  export type All = Globals;

  export type AnchorName = Globals | "none" | (string & {});

  export type AnchorScope = Globals | "all" | "none" | (string & {});

  export type Animation<TTime = string & {}> = Globals | DataType.SingleAnimation<TTime> | (string & {});

  export type AnimationComposition = Globals | DataType.SingleAnimationComposition | (string & {});

  export type AnimationDelay<TTime = string & {}> = Globals | TTime | (string & {});

  export type AnimationDirection = Globals | DataType.SingleAnimationDirection | (string & {});

  export type AnimationDuration<TTime = string & {}> = Globals | TTime | "auto" | (string & {});

  export type AnimationFillMode = Globals | DataType.SingleAnimationFillMode | (string & {});

  export type AnimationIterationCount = Globals | "infinite" | (string & {}) | (number & {});

  export type AnimationName = Globals | "none" | (string & {});

  export type AnimationPlayState = Globals | "paused" | "running" | (string & {});

  export type AnimationRange<TLength = (string & {}) | 0> = Globals | DataType.TimelineRangeName | TLength | "normal" | (string & {});

  export type AnimationRangeEnd<TLength = (string & {}) | 0> = Globals | DataType.TimelineRangeName | TLength | "normal" | (string & {});

  export type AnimationRangeStart<TLength = (string & {}) | 0> = Globals | DataType.TimelineRangeName | TLength | "normal" | (string & {});

  export type AnimationTimeline = Globals | DataType.SingleAnimationTimeline | (string & {});

  export type AnimationTimingFunction = Globals | DataType.EasingFunction | (string & {});

  export type Appearance = Globals | DataType.CompatAuto | "auto" | "menulist-button" | "none" | "textfield";

  export type AspectRatio = Globals | "auto" | (string & {}) | (number & {});

  export type BackdropFilter = Globals | "none" | (string & {});

  export type BackfaceVisibility = Globals | "hidden" | "visible";

  export type Background<TLength = (string & {}) | 0> = Globals | DataType.BgLayer<TLength> | DataType.FinalBgLayer<TLength> | (string & {});

  export type BackgroundAttachment = Globals | DataType.Attachment | (string & {});

  export type BackgroundBlendMode = Globals | DataType.BlendMode | (string & {});

  export type BackgroundClip = Globals | DataType.BgClip | (string & {});

  export type BackgroundColor = Globals | DataType.Color;

  export type BackgroundImage = Globals | "none" | (string & {});

  export type BackgroundOrigin = Globals | DataType.VisualBox | (string & {});

  export type BackgroundPosition<TLength = (string & {}) | 0> = Globals | DataType.BgPosition<TLength> | (string & {});

  export type BackgroundPositionX<TLength = (string & {}) | 0> = Globals | TLength | "center" | "left" | "right" | "x-end" | "x-start" | (string & {});

  export type BackgroundPositionY<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "top" | "y-end" | "y-start" | (string & {});

  export type BackgroundRepeat = Globals | DataType.RepeatStyle | (string & {});

  export type BackgroundSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});

  export type BaselineShift<TLength = (string & {}) | 0> = Globals | TLength | "baseline" | "sub" | "super" | (string & {});

  export type BlockSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type Border<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBlock<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBlockColor = Globals | DataType.Color | (string & {});

  export type BorderBlockEnd<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBlockEndColor = Globals | DataType.Color;

  export type BorderBlockEndStyle = Globals | DataType.LineStyle;

  export type BorderBlockEndWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderBlockStart<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBlockStartColor = Globals | DataType.Color;

  export type BorderBlockStartStyle = Globals | DataType.LineStyle;

  export type BorderBlockStartWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderBlockStyle = Globals | DataType.LineStyle | (string & {});

  export type BorderBlockWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});

  export type BorderBottom<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBottomColor = Globals | DataType.Color;

  export type BorderBottomLeftRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderBottomRightRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderBottomStyle = Globals | DataType.LineStyle;

  export type BorderBottomWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderCollapse = Globals | "collapse" | "separate";

  export type BorderColor = Globals | DataType.Color | (string & {});

  export type BorderEndEndRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderEndStartRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderImage = Globals | "none" | "repeat" | "round" | "space" | "stretch" | (string & {}) | (number & {});

  export type BorderImageOutset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});

  export type BorderImageRepeat = Globals | "repeat" | "round" | "space" | "stretch" | (string & {});

  export type BorderImageSlice = Globals | (string & {}) | (number & {});

  export type BorderImageSource = Globals | "none" | (string & {});

  export type BorderImageWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});

  export type BorderInline<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderInlineColor = Globals | DataType.Color | (string & {});

  export type BorderInlineEnd<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderInlineEndColor = Globals | DataType.Color;

  export type BorderInlineEndStyle = Globals | DataType.LineStyle;

  export type BorderInlineEndWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderInlineStart<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderInlineStartColor = Globals | DataType.Color;

  export type BorderInlineStartStyle = Globals | DataType.LineStyle;

  export type BorderInlineStartWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderInlineStyle = Globals | DataType.LineStyle | (string & {});

  export type BorderInlineWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});

  export type BorderLeft<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderLeftColor = Globals | DataType.Color;

  export type BorderLeftStyle = Globals | DataType.LineStyle;

  export type BorderLeftWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderRight<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderRightColor = Globals | DataType.Color;

  export type BorderRightStyle = Globals | DataType.LineStyle;

  export type BorderRightWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderSpacing<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderStartEndRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderStartStartRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderStyle = Globals | DataType.LineStyle | (string & {});

  export type BorderTop<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderTopColor = Globals | DataType.Color;

  export type BorderTopLeftRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderTopRightRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderTopStyle = Globals | DataType.LineStyle;

  export type BorderTopWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});

  export type Bottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type BoxAlign = Globals | "baseline" | "center" | "end" | "start" | "stretch";

  export type BoxDecorationBreak = Globals | "clone" | "slice";

  export type BoxDirection = Globals | "inherit" | "normal" | "reverse";

  export type BoxFlex = Globals | (number & {}) | (string & {});

  export type BoxFlexGroup = Globals | (number & {}) | (string & {});

  export type BoxLines = Globals | "multiple" | "single";

  export type BoxOrdinalGroup = Globals | (number & {}) | (string & {});

  export type BoxOrient = Globals | "block-axis" | "horizontal" | "inherit" | "inline-axis" | "vertical";

  export type BoxPack = Globals | "center" | "end" | "justify" | "start";

  export type BoxShadow = Globals | "none" | (string & {});

  export type BoxSizing = Globals | "border-box" | "content-box";

  export type BreakAfter =
    | Globals
    | "all"
    | "always"
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "avoid-region"
    | "column"
    | "left"
    | "page"
    | "recto"
    | "region"
    | "right"
    | "verso";

  export type BreakBefore =
    | Globals
    | "all"
    | "always"
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "avoid-region"
    | "column"
    | "left"
    | "page"
    | "recto"
    | "region"
    | "right"
    | "verso";

  export type BreakInside = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";

  export type CaptionSide = Globals | "bottom" | "top";

  export type Caret = Globals | DataType.Color | "auto" | "bar" | "block" | "underscore" | (string & {});

  export type CaretColor = Globals | DataType.Color | "auto";

  export type CaretShape = Globals | "auto" | "bar" | "block" | "underscore";

  export type Clear = Globals | "both" | "inline-end" | "inline-start" | "left" | "none" | "right";

  export type Clip = Globals | "auto" | (string & {});

  export type ClipPath = Globals | DataType.GeometryBox | "none" | (string & {});

  export type ClipRule = Globals | "evenodd" | "nonzero";

  export type Color = Globals | DataType.Color;

  export type PrintColorAdjust = Globals | "economy" | "exact";

  export type ColorInterpolationFilters = Globals | "auto" | "linearRGB" | "sRGB";

  export type ColorScheme = Globals | "dark" | "light" | "normal" | (string & {});

  export type ColumnCount = Globals | "auto" | (number & {}) | (string & {});

  export type ColumnFill = Globals | "auto" | "balance";

  export type ColumnGap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});

  export type ColumnRule<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type ColumnRuleColor = Globals | DataType.Color;

  export type ColumnRuleStyle = Globals | DataType.LineStyle | (string & {});

  export type ColumnRuleWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});

  export type ColumnSpan = Globals | "all" | "none";

  export type ColumnWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto";

  export type Columns<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});

  export type Contain = Globals | "content" | "inline-size" | "layout" | "none" | "paint" | "size" | "strict" | "style" | (string & {});

  export type ContainIntrinsicBlockSize<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});

  export type ContainIntrinsicHeight<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});

  export type ContainIntrinsicInlineSize<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});

  export type ContainIntrinsicSize<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});

  export type ContainIntrinsicWidth<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});

  export type Container = Globals | "none" | (string & {});

  export type ContainerName = Globals | "none" | (string & {});

  export type ContainerType = Globals | "inline-size" | "normal" | "scroll-state" | "size" | (string & {});

  export type Content = Globals | DataType.Quote | "none" | "normal" | (string & {});

  export type ContentVisibility = Globals | "auto" | "hidden" | "visible";

  export type CounterIncrement = Globals | "none" | (string & {});

  export type CounterReset = Globals | "none" | (string & {});

  export type CounterSet = Globals | "none" | (string & {});

  export type Cursor = Globals | DataType.CursorPredefined | (string & {});

  export type Cx<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type Cy<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type D = Globals | "none" | (string & {});

  export type Direction = Globals | "ltr" | "rtl";

  export type Display =
    | Globals
    | DataType.DisplayOutside
    | DataType.DisplayInside
    | DataType.DisplayInternal
    | DataType.DisplayLegacy
    | "contents"
    | "list-item"
    | "none"
    | (string & {});

  export type DominantBaseline = Globals | "alphabetic" | "auto" | "central" | "hanging" | "ideographic" | "mathematical" | "middle" | "text-bottom" | "text-top";

  export type EmptyCells = Globals | "hide" | "show";

  export type FieldSizing = Globals | "content" | "fixed";

  export type Fill = Globals | DataType.Paint;

  export type FillOpacity = Globals | (string & {}) | (number & {});

  export type FillRule = Globals | "evenodd" | "nonzero";

  export type Filter = Globals | "none" | (string & {});

  export type Flex<TLength = (string & {}) | 0> = Globals | TLength | "auto" | "content" | "fit-content" | "max-content" | "min-content" | "none" | (string & {}) | (number & {});

  export type FlexBasis<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-auto"
    | "auto"
    | "content"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type FlexDirection = Globals | "column" | "column-reverse" | "row" | "row-reverse";

  export type FlexFlow = Globals | "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | (string & {});

  export type FlexGrow = Globals | (number & {}) | (string & {});

  export type FlexShrink = Globals | (number & {}) | (string & {});

  export type FlexWrap = Globals | "nowrap" | "wrap" | "wrap-reverse";

  export type Float = Globals | "inline-end" | "inline-start" | "left" | "none" | "right";

  export type FloodColor = Globals | DataType.Color;

  export type FloodOpacity = Globals | (string & {}) | (number & {});

  export type Font = Globals | DataType.SystemFamilyName | (string & {});

  export type FontFamily = Globals | DataType.GenericFamily | (string & {});

  export type FontFeatureSettings = Globals | "normal" | (string & {});

  export type FontKerning = Globals | "auto" | "none" | "normal";

  export type FontLanguageOverride = Globals | "normal" | (string & {});

  export type FontOpticalSizing = Globals | "auto" | "none";

  export type FontPalette = Globals | "dark" | "light" | "normal" | (string & {});

  export type FontSize<TLength = (string & {}) | 0> = Globals | DataType.AbsoluteSize | TLength | "larger" | "math" | "smaller" | (string & {});

  export type FontSizeAdjust = Globals | "from-font" | "none" | (string & {}) | (number & {});

  export type FontSmooth<TLength = (string & {}) | 0> = Globals | DataType.AbsoluteSize | TLength | "always" | "auto" | "never";

  export type FontStretch = Globals | DataType.FontStretchAbsolute;

  export type FontStyle = Globals | "italic" | "normal" | "oblique" | (string & {});

  export type FontSynthesis = Globals | "none" | "position" | "small-caps" | "style" | "weight" | (string & {});

  export type FontSynthesisPosition = Globals | "auto" | "none";

  export type FontSynthesisSmallCaps = Globals | "auto" | "none";

  export type FontSynthesisStyle = Globals | "auto" | "none";

  export type FontSynthesisWeight = Globals | "auto" | "none";

  export type FontVariant =
    | Globals
    | DataType.EastAsianVariantValues
    | "all-petite-caps"
    | "all-small-caps"
    | "common-ligatures"
    | "contextual"
    | "diagonal-fractions"
    | "discretionary-ligatures"
    | "full-width"
    | "historical-forms"
    | "historical-ligatures"
    | "lining-nums"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "petite-caps"
    | "proportional-nums"
    | "proportional-width"
    | "ruby"
    | "slashed-zero"
    | "small-caps"
    | "stacked-fractions"
    | "tabular-nums"
    | "titling-caps"
    | "unicase"
    | (string & {});

  export type FontVariantAlternates = Globals | "historical-forms" | "normal" | (string & {});

  export type FontVariantCaps = Globals | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";

  export type FontVariantEastAsian = Globals | DataType.EastAsianVariantValues | "full-width" | "normal" | "proportional-width" | "ruby" | (string & {});

  export type FontVariantEmoji = Globals | "emoji" | "normal" | "text" | "unicode";

  export type FontVariantLigatures =
    | Globals
    | "common-ligatures"
    | "contextual"
    | "discretionary-ligatures"
    | "historical-ligatures"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | (string & {});

  export type FontVariantNumeric =
    | Globals
    | "diagonal-fractions"
    | "lining-nums"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "proportional-nums"
    | "slashed-zero"
    | "stacked-fractions"
    | "tabular-nums"
    | (string & {});

  export type FontVariantPosition = Globals | "normal" | "sub" | "super";

  export type FontVariationSettings = Globals | "normal" | (string & {});

  export type FontWeight = Globals | DataType.FontWeightAbsolute | "bolder" | "lighter";

  export type FontWidth =
    | Globals
    | "condensed"
    | "expanded"
    | "extra-condensed"
    | "extra-expanded"
    | "normal"
    | "semi-condensed"
    | "semi-expanded"
    | "ultra-condensed"
    | "ultra-expanded"
    | (string & {});

  export type ForcedColorAdjust = Globals | "auto" | "none" | "preserve-parent-color";

  export type Gap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});

  export type Grid = Globals | "none" | (string & {});

  export type GridArea = Globals | DataType.GridLine | (string & {});

  export type GridAutoColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | (string & {});

  export type GridAutoFlow = Globals | "column" | "dense" | "row" | (string & {});

  export type GridAutoRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | (string & {});

  export type GridColumn = Globals | DataType.GridLine | (string & {});

  export type GridColumnEnd = Globals | DataType.GridLine;

  export type GridColumnGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type GridColumnStart = Globals | DataType.GridLine;

  export type GridGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type GridRow = Globals | DataType.GridLine | (string & {});

  export type GridRowEnd = Globals | DataType.GridLine;

  export type GridRowGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type GridRowStart = Globals | DataType.GridLine;

  export type GridTemplate = Globals | "none" | (string & {});

  export type GridTemplateAreas = Globals | "none" | (string & {});

  export type GridTemplateColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | "subgrid" | (string & {});

  export type GridTemplateRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | "subgrid" | (string & {});

  export type HangingPunctuation = Globals | "allow-end" | "first" | "force-end" | "last" | "none" | (string & {});

  export type Height<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type HyphenateCharacter = Globals | "auto" | (string & {});

  export type HyphenateLimitChars = Globals | "auto" | (string & {}) | (number & {});

  export type Hyphens = Globals | "auto" | "manual" | "none";

  export type ImageOrientation = Globals | "flip" | "from-image" | (string & {});

  export type ImageRendering = Globals | "-moz-crisp-edges" | "-webkit-optimize-contrast" | "auto" | "crisp-edges" | "pixelated" | "smooth";

  export type ImageResolution = Globals | "from-image" | (string & {});

  export type ImeMode = Globals | "active" | "auto" | "disabled" | "inactive" | "normal";

  export type InitialLetter = Globals | "normal" | (string & {}) | (number & {});

  export type InitialLetterAlign = Globals | "alphabetic" | "auto" | "hanging" | "ideographic";

  export type InlineSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type Inset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type PositionArea = Globals | DataType.PositionArea | "none";

  export type InsetBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InterpolateSize = Globals | "allow-keywords" | "numeric-only";

  export type Isolation = Globals | "auto" | "isolate";

  export type JustifyContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "left" | "normal" | "right" | (string & {});

  export type JustifyItems = Globals | DataType.SelfPosition | "anchor-center" | "baseline" | "left" | "legacy" | "normal" | "right" | "stretch" | (string & {});

  export type JustifySelf = Globals | DataType.SelfPosition | "anchor-center" | "auto" | "baseline" | "left" | "normal" | "right" | "stretch" | (string & {});

  export type JustifyTracks = Globals | DataType.ContentDistribution | DataType.ContentPosition | "left" | "normal" | "right" | (string & {});

  export type Left<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type LetterSpacing<TLength = (string & {}) | 0> = Globals | TLength | "normal";

  export type LightingColor = Globals | DataType.Color;

  export type LineBreak = Globals | "anywhere" | "auto" | "loose" | "normal" | "strict";

  export type LineClamp = Globals | "none" | (number & {}) | (string & {});

  export type LineHeight<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {}) | (number & {});

  export type LineHeightStep<TLength = (string & {}) | 0> = Globals | TLength;

  export type ListStyle = Globals | "inside" | "none" | "outside" | (string & {});

  export type ListStyleImage = Globals | "none" | (string & {});

  export type ListStylePosition = Globals | "inside" | "outside";

  export type ListStyleType = Globals | "none" | (string & {});

  export type Margin<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginBottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginLeft<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginRight<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginTop<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginTrim = Globals | "all" | "in-flow" | "none";

  export type Marker = Globals | "none" | (string & {});

  export type MarkerEnd = Globals | "none" | (string & {});

  export type MarkerMid = Globals | "none" | (string & {});

  export type MarkerStart = Globals | "none" | (string & {});

  export type Mask<TLength = (string & {}) | 0> = Globals | DataType.MaskLayer<TLength> | (string & {});

  export type MaskBorder = Globals | "alpha" | "luminance" | "none" | "repeat" | "round" | "space" | "stretch" | (string & {}) | (number & {});

  export type MaskBorderMode = Globals | "alpha" | "luminance";

  export type MaskBorderOutset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});

  export type MaskBorderRepeat = Globals | "repeat" | "round" | "space" | "stretch" | (string & {});

  export type MaskBorderSlice = Globals | (string & {}) | (number & {});

  export type MaskBorderSource = Globals | "none" | (string & {});

  export type MaskBorderWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});

  export type MaskClip = Globals | DataType.PaintBox | "no-clip" | "view-box" | (string & {});

  export type MaskComposite = Globals | DataType.CompositingOperator | (string & {});

  export type MaskImage = Globals | "none" | (string & {});

  export type MaskMode = Globals | DataType.MaskingMode | (string & {});

  export type MaskOrigin = Globals | DataType.PaintBox | "view-box" | (string & {});

  export type MaskPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | (string & {});

  export type MaskRepeat = Globals | DataType.RepeatStyle | (string & {});

  export type MaskSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});

  export type MaskType = Globals | "alpha" | "luminance";

  export type MasonryAutoFlow = Globals | "definite-first" | "next" | "ordered" | "pack" | (string & {});

  export type MathDepth = Globals | "auto-add" | (string & {}) | (number & {});

  export type MathShift = Globals | "compact" | "normal";

  export type MathStyle = Globals | "compact" | "normal";

  export type MaxBlockSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "fit-content"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});

  export type MaxHeight<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});

  export type MaxInlineSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "fit-content"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});

  export type MaxLines = Globals | "none" | (number & {}) | (string & {});

  export type MaxWidth<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});

  export type MinBlockSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type MinHeight<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "auto"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | (string & {});

  export type MinInlineSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type MinWidth<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "auto"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "min-intrinsic"
    | (string & {});

  export type MixBlendMode = Globals | DataType.BlendMode | "plus-darker" | "plus-lighter";

  export type Offset<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | DataType.PaintBox | "auto" | "none" | "normal" | "view-box" | (string & {});

  export type OffsetDistance<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type OffsetPath = Globals | DataType.PaintBox | "none" | "view-box" | (string & {});

  export type OffsetRotate = Globals | "auto" | "reverse" | (string & {});

  export type ObjectFit = Globals | "contain" | "cover" | "fill" | "none" | "scale-down";

  export type ObjectPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;

  export type ObjectViewBox = Globals | "none" | (string & {});

  export type OffsetAnchor<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "auto";

  export type OffsetPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "auto" | "normal";

  export type Opacity = Globals | (string & {}) | (number & {});

  export type Order = Globals | (number & {}) | (string & {});

  export type Orphans = Globals | (number & {}) | (string & {});

  export type Outline<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.OutlineLineStyle | DataType.Color | "auto" | (string & {});

  export type OutlineColor = Globals | DataType.Color | "auto";

  export type OutlineOffset<TLength = (string & {}) | 0> = Globals | TLength;

  export type OutlineStyle = Globals | DataType.OutlineLineStyle | "auto";

  export type OutlineWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type Overflow = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "overlay" | "scroll" | "visible" | (string & {});

  export type OverflowAnchor = Globals | "auto" | "none";

  export type OverflowBlock = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";

  export type OverflowClipBox = Globals | "content-box" | "padding-box";

  export type OverflowClipMargin<TLength = (string & {}) | 0> = Globals | DataType.VisualBox | TLength | (string & {});

  export type OverflowInline = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";

  export type OverflowWrap = Globals | "anywhere" | "break-word" | "normal";

  export type OverflowX = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "overlay" | "scroll" | "visible";

  export type OverflowY = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "overlay" | "scroll" | "visible";

  export type Overlay = Globals | "auto" | "none";

  export type OverscrollBehavior = Globals | "auto" | "contain" | "none" | (string & {});

  export type OverscrollBehaviorBlock = Globals | "auto" | "contain" | "none";

  export type OverscrollBehaviorInline = Globals | "auto" | "contain" | "none";

  export type OverscrollBehaviorX = Globals | "auto" | "contain" | "none";

  export type OverscrollBehaviorY = Globals | "auto" | "contain" | "none";

  export type Padding<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingBlock<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingBlockStart<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingBottom<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingInline<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingInlineStart<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingLeft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingRight<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingTop<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type Page = Globals | "auto" | (string & {});

  export type PageBreakAfter = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";

  export type PageBreakBefore = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";

  export type PageBreakInside = Globals | "auto" | "avoid";

  export type PaintOrder = Globals | "fill" | "markers" | "normal" | "stroke" | (string & {});

  export type Perspective<TLength = (string & {}) | 0> = Globals | TLength | "none";

  export type PerspectiveOrigin<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;

  export type PlaceContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});

  export type PlaceItems = Globals | DataType.SelfPosition | "anchor-center" | "baseline" | "normal" | "stretch" | (string & {});

  export type PlaceSelf = Globals | DataType.SelfPosition | "anchor-center" | "auto" | "baseline" | "normal" | "stretch" | (string & {});

  export type PointerEvents = Globals | "all" | "auto" | "fill" | "inherit" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke";

  export type Position = Globals | "-webkit-sticky" | "absolute" | "fixed" | "relative" | "static" | "sticky";

  export type PositionAnchor = Globals | "auto" | (string & {});

  export type PositionTry = Globals | DataType.TryTactic | DataType.PositionArea | "none" | (string & {});

  export type PositionTryFallbacks = Globals | DataType.TryTactic | DataType.PositionArea | "none" | (string & {});

  export type PositionTryOrder = Globals | DataType.TrySize | "normal";

  export type PositionVisibility = Globals | "always" | "anchors-valid" | "anchors-visible" | "no-overflow" | (string & {});

  export type Quotes = Globals | "auto" | "none" | (string & {});

  export type R<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type Resize = Globals | "block" | "both" | "horizontal" | "inline" | "none" | "vertical";

  export type Right<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type Rotate = Globals | "none" | (string & {});

  export type RowGap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});

  export type RubyAlign = Globals | "center" | "space-around" | "space-between" | "start";

  export type RubyMerge = Globals | "auto" | "collapse" | "separate";

  export type RubyOverhang = Globals | "auto" | "none";

  export type RubyPosition = Globals | "alternate" | "inter-character" | "over" | "under" | (string & {});

  export type Rx<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type Ry<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type Scale = Globals | "none" | (string & {}) | (number & {});

  export type ScrollBehavior = Globals | "auto" | "smooth";

  export type ScrollInitialTarget = Globals | "nearest" | "none";

  export type ScrollMargin<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ScrollMarginBlock<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ScrollMarginBlockEnd<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginBlockStart<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginBottom<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginInline<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ScrollMarginInlineEnd<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginInlineStart<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginLeft<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginRight<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginTop<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollPadding<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingBottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingLeft<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingRight<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingTop<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollSnapAlign = Globals | "center" | "end" | "none" | "start" | (string & {});

  export type ScrollSnapCoordinate<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "none" | (string & {});

  export type ScrollSnapDestination<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;

  export type ScrollSnapPointsX = Globals | "none" | (string & {});

  export type ScrollSnapPointsY = Globals | "none" | (string & {});

  export type ScrollSnapStop = Globals | "always" | "normal";

  export type ScrollSnapType = Globals | "block" | "both" | "inline" | "none" | "x" | "y" | (string & {});

  export type ScrollSnapTypeX = Globals | "mandatory" | "none" | "proximity";

  export type ScrollSnapTypeY = Globals | "mandatory" | "none" | "proximity";

  export type ScrollTimeline = Globals | "none" | (string & {});

  export type ScrollTimelineAxis = Globals | "block" | "inline" | "x" | "y" | (string & {});

  export type ScrollTimelineName = Globals | "none" | (string & {});

  export type ScrollbarColor = Globals | "auto" | (string & {});

  export type ScrollbarGutter = Globals | "auto" | "stable" | (string & {});

  export type ScrollbarWidth = Globals | "auto" | "none" | "thin";

  export type ShapeImageThreshold = Globals | (string & {}) | (number & {});

  export type ShapeMargin<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ShapeOutside = Globals | DataType.VisualBox | "margin-box" | "none" | (string & {});

  export type ShapeRendering = Globals | "auto" | "crispEdges" | "geometricPrecision" | "optimizeSpeed";

  export type SpeakAs = Globals | "digits" | "literal-punctuation" | "no-punctuation" | "normal" | "spell-out" | (string & {});

  export type StopColor = Globals | DataType.Color;

  export type StopOpacity = Globals | (string & {}) | (number & {});

  export type Stroke = Globals | DataType.Paint;

  export type StrokeColor = Globals | DataType.Color;

  export type StrokeDasharray<TLength = (string & {}) | 0> = Globals | DataType.Dasharray<TLength> | "none";

  export type StrokeDashoffset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});

  export type StrokeLinecap = Globals | "butt" | "round" | "square";

  export type StrokeLinejoin = Globals | "arcs" | "bevel" | "miter" | "miter-clip" | "round";

  export type StrokeMiterlimit = Globals | (number & {}) | (string & {});

  export type StrokeOpacity = Globals | (string & {}) | (number & {});

  export type StrokeWidth<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});

  export type TabSize<TLength = (string & {}) | 0> = Globals | TLength | (number & {}) | (string & {});

  export type TableLayout = Globals | "auto" | "fixed";

  export type TextAlign =
    | Globals
    | "-khtml-center"
    | "-khtml-left"
    | "-khtml-right"
    | "-moz-center"
    | "-moz-left"
    | "-moz-right"
    | "-webkit-center"
    | "-webkit-left"
    | "-webkit-match-parent"
    | "-webkit-right"
    | "center"
    | "end"
    | "justify"
    | "left"
    | "match-parent"
    | "right"
    | "start";

  export type TextAlignLast = Globals | "auto" | "center" | "end" | "justify" | "left" | "right" | "start";

  export type TextAnchor = Globals | "end" | "middle" | "start";

  export type TextAutospace = Globals | DataType.Autospace | "auto" | "normal";

  export type TextBox = Globals | DataType.TextEdge | "auto" | "none" | "normal" | "trim-both" | "trim-end" | "trim-start" | (string & {});

  export type TextBoxEdge = Globals | DataType.TextEdge | "auto";

  export type TextBoxTrim = Globals | "none" | "trim-both" | "trim-end" | "trim-start";

  export type TextCombineUpright = Globals | "all" | "digits" | "none" | (string & {});

  export type TextDecoration<TLength = (string & {}) | 0> =
    | Globals
    | DataType.Color
    | TLength
    | "auto"
    | "blink"
    | "dashed"
    | "dotted"
    | "double"
    | "from-font"
    | "grammar-error"
    | "line-through"
    | "none"
    | "overline"
    | "solid"
    | "spelling-error"
    | "underline"
    | "wavy"
    | (string & {});

  export type TextDecorationColor = Globals | DataType.Color;

  export type TextDecorationLine = Globals | "blink" | "grammar-error" | "line-through" | "none" | "overline" | "spelling-error" | "underline" | (string & {});

  export type TextDecorationSkip = Globals | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | (string & {});

  export type TextDecorationSkipInk = Globals | "all" | "auto" | "none";

  export type TextDecorationStyle = Globals | "dashed" | "dotted" | "double" | "solid" | "wavy";

  export type TextDecorationThickness<TLength = (string & {}) | 0> = Globals | TLength | "auto" | "from-font" | (string & {});

  export type TextEmphasis = Globals | DataType.Color | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {});

  export type TextEmphasisColor = Globals | DataType.Color;

  export type TextEmphasisPosition = Globals | "auto" | "over" | "under" | (string & {});

  export type TextEmphasisStyle = Globals | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {});

  export type TextIndent<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type TextJustify = Globals | "auto" | "distribute" | "inter-character" | "inter-word" | "none";

  export type TextOrientation = Globals | "mixed" | "sideways" | "sideways-right" | "upright";

  export type TextOverflow = Globals | "clip" | "ellipsis" | (string & {});

  export type TextRendering = Globals | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";

  export type TextShadow = Globals | "none" | (string & {});

  export type TextSizeAdjust = Globals | "auto" | "none" | (string & {});

  export type TextSpacingTrim = Globals | "normal" | "space-all" | "space-first" | "trim-start";

  export type TextTransform = Globals | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "math-auto" | "none" | "uppercase" | (string & {});

  export type TextUnderlineOffset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type TextUnderlinePosition = Globals | "auto" | "from-font" | "left" | "right" | "under" | (string & {});

  export type TextWrap = Globals | "auto" | "balance" | "nowrap" | "pretty" | "stable" | "wrap" | (string & {});

  export type TextWrapMode = Globals | "nowrap" | "wrap";

  export type TextWrapStyle = Globals | "auto" | "balance" | "pretty" | "stable";

  export type TimelineScope = Globals | "none" | (string & {});

  export type Top<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type TouchAction =
    | Globals
    | "-ms-manipulation"
    | "-ms-none"
    | "-ms-pan-x"
    | "-ms-pan-y"
    | "-ms-pinch-zoom"
    | "auto"
    | "manipulation"
    | "none"
    | "pan-down"
    | "pan-left"
    | "pan-right"
    | "pan-up"
    | "pan-x"
    | "pan-y"
    | "pinch-zoom"
    | (string & {});

  export type Transform = Globals | "none" | (string & {});

  export type TransformBox = Globals | "border-box" | "content-box" | "fill-box" | "stroke-box" | "view-box";

  export type TransformOrigin<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});

  export type TransformStyle = Globals | "flat" | "preserve-3d";

  export type Transition<TTime = string & {}> = Globals | DataType.SingleTransition<TTime> | (string & {});

  export type TransitionBehavior = Globals | "allow-discrete" | "normal" | (string & {});

  export type TransitionDelay<TTime = string & {}> = Globals | TTime | (string & {});

  export type TransitionDuration<TTime = string & {}> = Globals | TTime | (string & {});

  export type TransitionProperty = Globals | "all" | "none" | (string & {});

  export type TransitionTimingFunction = Globals | DataType.EasingFunction | (string & {});

  export type Translate<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});

  export type UnicodeBidi =
    | Globals
    | "-moz-isolate"
    | "-moz-isolate-override"
    | "-moz-plaintext"
    | "-webkit-isolate"
    | "-webkit-isolate-override"
    | "-webkit-plaintext"
    | "bidi-override"
    | "embed"
    | "isolate"
    | "isolate-override"
    | "normal"
    | "plaintext";

  export type UserSelect = Globals | "-moz-none" | "all" | "auto" | "none" | "text";

  export type VectorEffect = Globals | "fixed-position" | "non-rotation" | "non-scaling-size" | "non-scaling-stroke" | "none";

  export type VerticalAlign<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "baseline"
    | "bottom"
    | "middle"
    | "sub"
    | "super"
    | "text-bottom"
    | "text-top"
    | "top"
    | (string & {});

  export type ViewTimeline = Globals | "none" | (string & {});

  export type ViewTimelineAxis = Globals | "block" | "inline" | "x" | "y" | (string & {});

  export type ViewTimelineInset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ViewTimelineName = Globals | "none" | (string & {});

  export type ViewTransitionClass = Globals | "none" | (string & {});

  export type ViewTransitionName = Globals | "match-element" | "none" | (string & {});

  export type Visibility = Globals | "collapse" | "hidden" | "visible";

  export type WhiteSpace =
    | Globals
    | "-moz-pre-wrap"
    | "break-spaces"
    | "collapse"
    | "normal"
    | "nowrap"
    | "pre"
    | "pre-line"
    | "pre-wrap"
    | "preserve"
    | "preserve-breaks"
    | "preserve-spaces"
    | "wrap"
    | (string & {});

  export type WhiteSpaceCollapse = Globals | "break-spaces" | "collapse" | "preserve" | "preserve-breaks" | "preserve-spaces";

  export type Widows = Globals | (number & {}) | (string & {});

  export type Width<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "auto"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "min-intrinsic"
    | (string & {});

  export type WillChange = Globals | DataType.AnimateableFeature | "auto" | (string & {});

  export type WordBreak = Globals | "auto-phrase" | "break-all" | "break-word" | "keep-all" | "normal";

  export type WordSpacing<TLength = (string & {}) | 0> = Globals | TLength | "normal";

  export type WordWrap = Globals | "break-word" | "normal";

  export type WritingMode = Globals | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl";

  export type X<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type Y<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ZIndex = Globals | "auto" | (number & {}) | (string & {});

  export type Zoom = Globals | "normal" | "reset" | (string & {}) | (number & {});

  export type MozAppearance =
    | Globals
    | "-moz-mac-unified-toolbar"
    | "-moz-win-borderless-glass"
    | "-moz-win-browsertabbar-toolbox"
    | "-moz-win-communications-toolbox"
    | "-moz-win-communicationstext"
    | "-moz-win-exclude-glass"
    | "-moz-win-glass"
    | "-moz-win-media-toolbox"
    | "-moz-win-mediatext"
    | "-moz-window-button-box"
    | "-moz-window-button-box-maximized"
    | "-moz-window-button-close"
    | "-moz-window-button-maximize"
    | "-moz-window-button-minimize"
    | "-moz-window-button-restore"
    | "-moz-window-frame-bottom"
    | "-moz-window-frame-left"
    | "-moz-window-frame-right"
    | "-moz-window-titlebar"
    | "-moz-window-titlebar-maximized"
    | "button"
    | "button-arrow-down"
    | "button-arrow-next"
    | "button-arrow-previous"
    | "button-arrow-up"
    | "button-bevel"
    | "button-focus"
    | "caret"
    | "checkbox"
    | "checkbox-container"
    | "checkbox-label"
    | "checkmenuitem"
    | "dualbutton"
    | "groupbox"
    | "listbox"
    | "listitem"
    | "menuarrow"
    | "menubar"
    | "menucheckbox"
    | "menuimage"
    | "menuitem"
    | "menuitemtext"
    | "menulist"
    | "menulist-button"
    | "menulist-text"
    | "menulist-textfield"
    | "menupopup"
    | "menuradio"
    | "menuseparator"
    | "meterbar"
    | "meterchunk"
    | "none"
    | "progressbar"
    | "progressbar-vertical"
    | "progresschunk"
    | "progresschunk-vertical"
    | "radio"
    | "radio-container"
    | "radio-label"
    | "radiomenuitem"
    | "range"
    | "range-thumb"
    | "resizer"
    | "resizerpanel"
    | "scale-horizontal"
    | "scale-vertical"
    | "scalethumb-horizontal"
    | "scalethumb-vertical"
    | "scalethumbend"
    | "scalethumbstart"
    | "scalethumbtick"
    | "scrollbarbutton-down"
    | "scrollbarbutton-left"
    | "scrollbarbutton-right"
    | "scrollbarbutton-up"
    | "scrollbarthumb-horizontal"
    | "scrollbarthumb-vertical"
    | "scrollbartrack-horizontal"
    | "scrollbartrack-vertical"
    | "searchfield"
    | "separator"
    | "sheet"
    | "spinner"
    | "spinner-downbutton"
    | "spinner-textfield"
    | "spinner-upbutton"
    | "splitter"
    | "statusbar"
    | "statusbarpanel"
    | "tab"
    | "tab-scroll-arrow-back"
    | "tab-scroll-arrow-forward"
    | "tabpanel"
    | "tabpanels"
    | "textfield"
    | "textfield-multiline"
    | "toolbar"
    | "toolbarbutton"
    | "toolbarbutton-dropdown"
    | "toolbargripper"
    | "toolbox"
    | "tooltip"
    | "treeheader"
    | "treeheadercell"
    | "treeheadersortarrow"
    | "treeitem"
    | "treeline"
    | "treetwisty"
    | "treetwistyopen"
    | "treeview";

  export type MozBinding = Globals | "none" | (string & {});

  export type MozBorderBottomColors = Globals | DataType.Color | "none" | (string & {});

  export type MozBorderLeftColors = Globals | DataType.Color | "none" | (string & {});

  export type MozBorderRightColors = Globals | DataType.Color | "none" | (string & {});

  export type MozBorderTopColors = Globals | DataType.Color | "none" | (string & {});

  export type MozContextProperties = Globals | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | (string & {});

  export type MozFloatEdge = Globals | "border-box" | "content-box" | "margin-box" | "padding-box";

  export type MozForceBrokenImageIcon = Globals | 0 | (string & {}) | 1;

  export type MozOrient = Globals | "block" | "horizontal" | "inline" | "vertical";

  export type MozOutlineRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozOutlineRadiusBottomleft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozOutlineRadiusBottomright<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozOutlineRadiusTopleft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozOutlineRadiusTopright<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozStackSizing = Globals | "ignore" | "stretch-to-fit";

  export type MozTextBlink = Globals | "blink" | "none";

  export type MozUserFocus = Globals | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same";

  export type MozUserInput = Globals | "auto" | "disabled" | "enabled" | "none";

  export type MozUserModify = Globals | "read-only" | "read-write" | "write-only";

  export type MozWindowDragging = Globals | "drag" | "no-drag";

  export type MozWindowShadow = Globals | "default" | "menu" | "none" | "sheet" | "tooltip";

  export type MsAccelerator = Globals | "false" | "true";

  export type MsBlockProgression = Globals | "bt" | "lr" | "rl" | "tb";

  export type MsContentZoomChaining = Globals | "chained" | "none";

  export type MsContentZoomLimit = Globals | (string & {});

  export type MsContentZoomLimitMax = Globals | (string & {});

  export type MsContentZoomLimitMin = Globals | (string & {});

  export type MsContentZoomSnap = Globals | "mandatory" | "none" | "proximity" | (string & {});

  export type MsContentZoomSnapPoints = Globals | (string & {});

  export type MsContentZoomSnapType = Globals | "mandatory" | "none" | "proximity";

  export type MsContentZooming = Globals | "none" | "zoom";

  export type MsFilter = Globals | (string & {});

  export type MsFlowFrom = Globals | "none" | (string & {});

  export type MsFlowInto = Globals | "none" | (string & {});

  export type MsGridColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | (string & {});

  export type MsGridRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | (string & {});

  export type MsHighContrastAdjust = Globals | "auto" | "none";

  export type MsHyphenateLimitChars = Globals | "auto" | (string & {}) | (number & {});

  export type MsHyphenateLimitLines = Globals | "no-limit" | (number & {}) | (string & {});

  export type MsHyphenateLimitZone<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MsImeAlign = Globals | "after" | "auto";

  export type MsOverflowStyle = Globals | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar";

  export type MsScrollChaining = Globals | "chained" | "none";

  export type MsScrollLimit = Globals | (string & {});

  export type MsScrollLimitXMax<TLength = (string & {}) | 0> = Globals | TLength | "auto";

  export type MsScrollLimitXMin<TLength = (string & {}) | 0> = Globals | TLength;

  export type MsScrollLimitYMax<TLength = (string & {}) | 0> = Globals | TLength | "auto";

  export type MsScrollLimitYMin<TLength = (string & {}) | 0> = Globals | TLength;

  export type MsScrollRails = Globals | "none" | "railed";

  export type MsScrollSnapPointsX = Globals | (string & {});

  export type MsScrollSnapPointsY = Globals | (string & {});

  export type MsScrollSnapType = Globals | "mandatory" | "none" | "proximity";

  export type MsScrollSnapX = Globals | (string & {});

  export type MsScrollSnapY = Globals | (string & {});

  export type MsScrollTranslation = Globals | "none" | "vertical-to-horizontal";

  export type MsScrollbar3dlightColor = Globals | DataType.Color;

  export type MsScrollbarArrowColor = Globals | DataType.Color;

  export type MsScrollbarBaseColor = Globals | DataType.Color;

  export type MsScrollbarDarkshadowColor = Globals | DataType.Color;

  export type MsScrollbarFaceColor = Globals | DataType.Color;

  export type MsScrollbarHighlightColor = Globals | DataType.Color;

  export type MsScrollbarShadowColor = Globals | DataType.Color;

  export type MsScrollbarTrackColor = Globals | DataType.Color;

  export type MsTextAutospace = Globals | "ideograph-alpha" | "ideograph-numeric" | "ideograph-parenthesis" | "ideograph-space" | "none";

  export type MsTouchSelect = Globals | "grippers" | "none";

  export type MsUserSelect = Globals | "element" | "none" | "text";

  export type MsWrapFlow = Globals | "auto" | "both" | "clear" | "end" | "maximum" | "start";

  export type MsWrapMargin<TLength = (string & {}) | 0> = Globals | TLength;

  export type MsWrapThrough = Globals | "none" | "wrap";

  export type WebkitAppearance =
    | Globals
    | "-apple-pay-button"
    | "button"
    | "button-bevel"
    | "caret"
    | "checkbox"
    | "default-button"
    | "inner-spin-button"
    | "listbox"
    | "listitem"
    | "media-controls-background"
    | "media-controls-fullscreen-background"
    | "media-current-time-display"
    | "media-enter-fullscreen-button"
    | "media-exit-fullscreen-button"
    | "media-fullscreen-button"
    | "media-mute-button"
    | "media-overlay-play-button"
    | "media-play-button"
    | "media-seek-back-button"
    | "media-seek-forward-button"
    | "media-slider"
    | "media-sliderthumb"
    | "media-time-remaining-display"
    | "media-toggle-closed-captions-button"
    | "media-volume-slider"
    | "media-volume-slider-container"
    | "media-volume-sliderthumb"
    | "menulist"
    | "menulist-button"
    | "menulist-text"
    | "menulist-textfield"
    | "meter"
    | "none"
    | "progress-bar"
    | "progress-bar-value"
    | "push-button"
    | "radio"
    | "searchfield"
    | "searchfield-cancel-button"
    | "searchfield-decoration"
    | "searchfield-results-button"
    | "searchfield-results-decoration"
    | "slider-horizontal"
    | "slider-vertical"
    | "sliderthumb-horizontal"
    | "sliderthumb-vertical"
    | "square-button"
    | "textarea"
    | "textfield";

  export type WebkitBorderBefore<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type WebkitBorderBeforeColor = Globals | DataType.Color;

  export type WebkitBorderBeforeStyle = Globals | DataType.LineStyle | (string & {});

  export type WebkitBorderBeforeWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});

  export type WebkitBoxReflect<TLength = (string & {}) | 0> = Globals | TLength | "above" | "below" | "left" | "right" | (string & {});

  export type WebkitLineClamp = Globals | "none" | (number & {}) | (string & {});

  export type WebkitMask<TLength = (string & {}) | 0> =
    | Globals
    | DataType.Position<TLength>
    | DataType.RepeatStyle
    | DataType.VisualBox
    | "border"
    | "content"
    | "none"
    | "padding"
    | "text"
    | (string & {});

  export type WebkitMaskAttachment = Globals | DataType.Attachment | (string & {});

  export type WebkitMaskClip = Globals | DataType.PaintBox | "border" | "content" | "no-clip" | "padding" | "text" | "view-box" | (string & {});

  export type WebkitMaskComposite = Globals | DataType.CompositeStyle | (string & {});

  export type WebkitMaskImage = Globals | "none" | (string & {});

  export type WebkitMaskOrigin = Globals | DataType.PaintBox | "border" | "content" | "padding" | "view-box" | (string & {});

  export type WebkitMaskPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | (string & {});

  export type WebkitMaskPositionX<TLength = (string & {}) | 0> = Globals | TLength | "center" | "left" | "right" | (string & {});

  export type WebkitMaskPositionY<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "top" | (string & {});

  export type WebkitMaskRepeat = Globals | DataType.RepeatStyle | (string & {});

  export type WebkitMaskRepeatX = Globals | "no-repeat" | "repeat" | "round" | "space";

  export type WebkitMaskRepeatY = Globals | "no-repeat" | "repeat" | "round" | "space";

  export type WebkitMaskSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});

  export type WebkitOverflowScrolling = Globals | "auto" | "touch";

  export type WebkitTapHighlightColor = Globals | DataType.Color;

  export type WebkitTextFillColor = Globals | DataType.Color;

  export type WebkitTextStroke<TLength = (string & {}) | 0> = Globals | DataType.Color | TLength | (string & {});

  export type WebkitTextStrokeColor = Globals | DataType.Color;

  export type WebkitTextStrokeWidth<TLength = (string & {}) | 0> = Globals | TLength;

  export type WebkitTouchCallout = Globals | "default" | "none";

  export type WebkitUserModify = Globals | "read-only" | "read-write" | "read-write-plaintext-only";

  export type WebkitUserSelect = Globals | "all" | "auto" | "none" | "text";

  export type ColorInterpolation = Globals | "auto" | "linearRGB" | "sRGB";

  export type ColorRendering = Globals | "auto" | "optimizeQuality" | "optimizeSpeed";

  export type GlyphOrientationVertical = Globals | "auto" | (string & {}) | (number & {});
}

/**
 * **Attention!** Data types receives its name from the spec. E.g. `<color>` becomes `DataType.Color` and
 * `<content-distribution>` becomes `DataType.ContentDistribution`. It happens quite frequent that these data types
 * are split into several data types or/and name changes as the spec develops. So there's a risk that a minor/patch
 * update from `csstype` can break your typing if you're using the `DataType` namespace.
 */
declare namespace DataType {
  type AbsoluteSize = "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small" | "xxx-large";

  type AnimateableFeature = "contents" | "scroll-position" | (string & {});

  type Attachment = "fixed" | "local" | "scroll";

  type Autospace = "ideograph-alpha" | "ideograph-numeric" | "insert" | "no-autospace" | "punctuation" | "replace" | (string & {});

  type BgClip = VisualBox | "border-area" | "text";

  type BgLayer<TLength> = BgPosition<TLength> | RepeatStyle | Attachment | VisualBox | "none" | (string & {});

  type BgPosition<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});

  type BgSize<TLength> = TLength | "auto" | "contain" | "cover" | (string & {});

  type BlendMode =
    | "color"
    | "color-burn"
    | "color-dodge"
    | "darken"
    | "difference"
    | "exclusion"
    | "hard-light"
    | "hue"
    | "lighten"
    | "luminosity"
    | "multiply"
    | "normal"
    | "overlay"
    | "saturation"
    | "screen"
    | "soft-light";

  type Color = ColorBase | SystemColor | DeprecatedSystemColor | "currentColor" | (string & {});

  type ColorBase = NamedColor | "transparent" | (string & {});

  type CompatAuto = "button" | "checkbox" | "listbox" | "menulist" | "meter" | "progress-bar" | "radio" | "searchfield" | "textarea";

  type CompositeStyle =
    | "clear"
    | "copy"
    | "destination-atop"
    | "destination-in"
    | "destination-out"
    | "destination-over"
    | "source-atop"
    | "source-in"
    | "source-out"
    | "source-over"
    | "xor";

  type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";

  type ContentDistribution = "space-around" | "space-between" | "space-evenly" | "stretch";

  type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";

  type CubicBezierEasingFunction = "ease" | "ease-in" | "ease-in-out" | "ease-out" | (string & {});

  type CursorPredefined =
    | "-moz-grab"
    | "-moz-zoom-in"
    | "-moz-zoom-out"
    | "-webkit-grab"
    | "-webkit-grabbing"
    | "-webkit-zoom-in"
    | "-webkit-zoom-out"
    | "alias"
    | "all-scroll"
    | "auto"
    | "cell"
    | "col-resize"
    | "context-menu"
    | "copy"
    | "crosshair"
    | "default"
    | "e-resize"
    | "ew-resize"
    | "grab"
    | "grabbing"
    | "help"
    | "move"
    | "n-resize"
    | "ne-resize"
    | "nesw-resize"
    | "no-drop"
    | "none"
    | "not-allowed"
    | "ns-resize"
    | "nw-resize"
    | "nwse-resize"
    | "pointer"
    | "progress"
    | "row-resize"
    | "s-resize"
    | "se-resize"
    | "sw-resize"
    | "text"
    | "vertical-text"
    | "w-resize"
    | "wait"
    | "zoom-in"
    | "zoom-out";

  type Dasharray<TLength> = TLength | (string & {}) | (number & {});

  type DeprecatedSystemColor =
    | "ActiveBorder"
    | "ActiveCaption"
    | "AppWorkspace"
    | "Background"
    | "ButtonHighlight"
    | "ButtonShadow"
    | "CaptionText"
    | "InactiveBorder"
    | "InactiveCaption"
    | "InactiveCaptionText"
    | "InfoBackground"
    | "InfoText"
    | "Menu"
    | "MenuText"
    | "Scrollbar"
    | "ThreeDDarkShadow"
    | "ThreeDFace"
    | "ThreeDHighlight"
    | "ThreeDLightShadow"
    | "ThreeDShadow"
    | "Window"
    | "WindowFrame"
    | "WindowText";

  type DisplayInside = "-ms-flexbox" | "-ms-grid" | "-webkit-flex" | "flex" | "flow" | "flow-root" | "grid" | "ruby" | "table";

  type DisplayInternal =
    | "ruby-base"
    | "ruby-base-container"
    | "ruby-text"
    | "ruby-text-container"
    | "table-caption"
    | "table-cell"
    | "table-column"
    | "table-column-group"
    | "table-footer-group"
    | "table-header-group"
    | "table-row"
    | "table-row-group";

  type DisplayLegacy = "-ms-inline-flexbox" | "-ms-inline-grid" | "-webkit-inline-flex" | "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table";

  type DisplayOutside = "block" | "inline" | "run-in";

  type EasingFunction = CubicBezierEasingFunction | StepEasingFunction | "linear" | (string & {});

  type EastAsianVariantValues = "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional";

  type FinalBgLayer<TLength> = BgPosition<TLength> | RepeatStyle | Attachment | VisualBox | Color | "none" | (string & {});

  type FontStretchAbsolute =
    | "condensed"
    | "expanded"
    | "extra-condensed"
    | "extra-expanded"
    | "normal"
    | "semi-condensed"
    | "semi-expanded"
    | "ultra-condensed"
    | "ultra-expanded"
    | (string & {});

  type FontWeightAbsolute = "bold" | "normal" | (number & {}) | (string & {});

  type GenericComplete = "-apple-system" | "cursive" | "fantasy" | "math" | "monospace" | "sans-serif" | "serif" | "system-ui";

  type GenericFamily = GenericComplete | GenericIncomplete | "emoji" | "fangsong";

  type GenericIncomplete = "ui-monospace" | "ui-rounded" | "ui-sans-serif" | "ui-serif";

  type GeometryBox = VisualBox | "fill-box" | "margin-box" | "stroke-box" | "view-box";

  type GridLine = "auto" | (string & {}) | (number & {});

  type LineStyle = "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid";

  type LineWidth<TLength> = TLength | "medium" | "thick" | "thin";

  type MaskLayer<TLength> = Position<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | "none" | (string & {});

  type MaskingMode = "alpha" | "luminance" | "match-source";

  type NamedColor =
    | "aliceblue"
    | "antiquewhite"
    | "aqua"
    | "aquamarine"
    | "azure"
    | "beige"
    | "bisque"
    | "black"
    | "blanchedalmond"
    | "blue"
    | "blueviolet"
    | "brown"
    | "burlywood"
    | "cadetblue"
    | "chartreuse"
    | "chocolate"
    | "coral"
    | "cornflowerblue"
    | "cornsilk"
    | "crimson"
    | "cyan"
    | "darkblue"
    | "darkcyan"
    | "darkgoldenrod"
    | "darkgray"
    | "darkgreen"
    | "darkgrey"
    | "darkkhaki"
    | "darkmagenta"
    | "darkolivegreen"
    | "darkorange"
    | "darkorchid"
    | "darkred"
    | "darksalmon"
    | "darkseagreen"
    | "darkslateblue"
    | "darkslategray"
    | "darkslategrey"
    | "darkturquoise"
    | "darkviolet"
    | "deeppink"
    | "deepskyblue"
    | "dimgray"
    | "dimgrey"
    | "dodgerblue"
    | "firebrick"
    | "floralwhite"
    | "forestgreen"
    | "fuchsia"
    | "gainsboro"
    | "ghostwhite"
    | "gold"
    | "goldenrod"
    | "gray"
    | "green"
    | "greenyellow"
    | "grey"
    | "honeydew"
    | "hotpink"
    | "indianred"
    | "indigo"
    | "ivory"
    | "khaki"
    | "lavender"
    | "lavenderblush"
    | "lawngreen"
    | "lemonchiffon"
    | "lightblue"
    | "lightcoral"
    | "lightcyan"
    | "lightgoldenrodyellow"
    | "lightgray"
    | "lightgreen"
    | "lightgrey"
    | "lightpink"
    | "lightsalmon"
    | "lightseagreen"
    | "lightskyblue"
    | "lightslategray"
    | "lightslategrey"
    | "lightsteelblue"
    | "lightyellow"
    | "lime"
    | "limegreen"
    | "linen"
    | "magenta"
    | "maroon"
    | "mediumaquamarine"
    | "mediumblue"
    | "mediumorchid"
    | "mediumpurple"
    | "mediumseagreen"
    | "mediumslateblue"
    | "mediumspringgreen"
    | "mediumturquoise"
    | "mediumvioletred"
    | "midnightblue"
    | "mintcream"
    | "mistyrose"
    | "moccasin"
    | "navajowhite"
    | "navy"
    | "oldlace"
    | "olive"
    | "olivedrab"
    | "orange"
    | "orangered"
    | "orchid"
    | "palegoldenrod"
    | "palegreen"
    | "paleturquoise"
    | "palevioletred"
    | "papayawhip"
    | "peachpuff"
    | "peru"
    | "pink"
    | "plum"
    | "powderblue"
    | "purple"
    | "rebeccapurple"
    | "red"
    | "rosybrown"
    | "royalblue"
    | "saddlebrown"
    | "salmon"
    | "sandybrown"
    | "seagreen"
    | "seashell"
    | "sienna"
    | "silver"
    | "skyblue"
    | "slateblue"
    | "slategray"
    | "slategrey"
    | "snow"
    | "springgreen"
    | "steelblue"
    | "tan"
    | "teal"
    | "thistle"
    | "tomato"
    | "turquoise"
    | "violet"
    | "wheat"
    | "white"
    | "whitesmoke"
    | "yellow"
    | "yellowgreen";

  type OutlineLineStyle = "dashed" | "dotted" | "double" | "groove" | "inset" | "none" | "outset" | "ridge" | "solid";

  type PageSize = "A3" | "A4" | "A5" | "B4" | "B5" | "JIS-B4" | "JIS-B5" | "ledger" | "legal" | "letter";

  type Paint = Color | "context-fill" | "context-stroke" | "none" | (string & {});

  type PaintBox = VisualBox | "fill-box" | "stroke-box";

  type Position<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});

  type PositionArea =
    | "block-end"
    | "block-start"
    | "bottom"
    | "center"
    | "end"
    | "inline-end"
    | "inline-start"
    | "left"
    | "right"
    | "self-block-end"
    | "self-block-start"
    | "self-end"
    | "self-inline-end"
    | "self-inline-start"
    | "self-start"
    | "span-all"
    | "span-block-end"
    | "span-block-start"
    | "span-bottom"
    | "span-end"
    | "span-inline-end"
    | "span-inline-start"
    | "span-left"
    | "span-right"
    | "span-self-block-end"
    | "span-self-block-start"
    | "span-self-end"
    | "span-self-inline-end"
    | "span-self-inline-start"
    | "span-self-start"
    | "span-start"
    | "span-top"
    | "span-x-end"
    | "span-x-self-end"
    | "span-x-self-start"
    | "span-x-start"
    | "span-y-end"
    | "span-y-self-end"
    | "span-y-self-start"
    | "span-y-start"
    | "start"
    | "top"
    | "x-end"
    | "x-self-end"
    | "x-self-start"
    | "x-start"
    | "y-end"
    | "y-self-end"
    | "y-self-start"
    | "y-start"
    | (string & {});

  type Quote = "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote";

  type RepeatStyle = "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | (string & {});

  type SelfPosition = "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start";

  type SingleAnimation<TTime> =
    | EasingFunction
    | SingleAnimationDirection
    | SingleAnimationFillMode
    | SingleAnimationTimeline
    | TTime
    | "auto"
    | "infinite"
    | "none"
    | "paused"
    | "running"
    | (string & {})
    | (number & {});

  type SingleAnimationComposition = "accumulate" | "add" | "replace";

  type SingleAnimationDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";

  type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";

  type SingleAnimationTimeline = "auto" | "none" | (string & {});

  type SingleTransition<TTime> = EasingFunction | TTime | "all" | "allow-discrete" | "none" | "normal" | (string & {});

  type StepEasingFunction = "step-end" | "step-start" | (string & {});

  type SystemColor =
    | "AccentColor"
    | "AccentColorText"
    | "ActiveText"
    | "ButtonBorder"
    | "ButtonFace"
    | "ButtonText"
    | "Canvas"
    | "CanvasText"
    | "Field"
    | "FieldText"
    | "GrayText"
    | "Highlight"
    | "HighlightText"
    | "LinkText"
    | "Mark"
    | "MarkText"
    | "SelectedItem"
    | "SelectedItemText"
    | "VisitedText";

  type SystemFamilyName = "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar";

  type TextEdge = "cap" | "ex" | "ideographic" | "ideographic-ink" | "text" | (string & {});

  type TimelineRangeName = "contain" | "cover" | "entry" | "entry-crossing" | "exit" | "exit-crossing";

  type TrackBreadth<TLength> = TLength | "auto" | "max-content" | "min-content" | (string & {});

  type TrySize = "most-block-size" | "most-height" | "most-inline-size" | "most-width";

  type TryTactic = "flip-block" | "flip-inline" | "flip-start" | (string & {});

  type VisualBox = "border-box" | "content-box" | "padding-box";
}

// NOTE: Users of the `experimental` builds of React should add a reference
// to 'react/experimental' in their project. See experimental.d.ts's top comment
// for reference and documentation on how exactly to do it.



type NativeAnimationEvent = AnimationEvent;
type NativeClipboardEvent = ClipboardEvent;
type NativeCompositionEvent = CompositionEvent;
type NativeDragEvent = DragEvent;
type NativeFocusEvent = FocusEvent;
type NativeInputEvent = InputEvent;
type NativeKeyboardEvent = KeyboardEvent;
type NativeMouseEvent = MouseEvent;
type NativeTouchEvent = TouchEvent;
type NativePointerEvent = PointerEvent;
type NativeTransitionEvent = TransitionEvent;
type NativeUIEvent = UIEvent;
type NativeWheelEvent = WheelEvent;

/**
 * Used to represent DOM API's where users can either pass
 * true or false as a boolean or as its equivalent strings.
 */
type Booleanish = boolean | "true" | "false";

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin MDN}
 */
type CrossOrigin = "anonymous" | "use-credentials" | "" | undefined;

declare const UNDEFINED_VOID_ONLY: unique symbol;

/**
 * The function returned from an effect passed to {@link React.useEffect useEffect},
 * which can be used to clean up the effect when the component unmounts.
 *
 * @see {@link https://react.dev/reference/react/useEffect React Docs}
 */
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never };
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };


declare namespace React {
    //
    // React Elements
    // ----------------------------------------------------------------------

    /**
     * Used to retrieve the possible components which accept a given set of props.
     *
     * Can be passed no type parameters to get a union of all possible components
     * and tags.
     *
     * Is a superset of {@link ComponentType}.
     *
     * @template P The props to match against. If not passed, defaults to any.
     * @template Tag An optional tag to match against. If not passed, attempts to match against all possible tags.
     *
     * @example
     *
     * ```tsx
     * // All components and tags (img, embed etc.)
     * // which accept `src`
     * type SrcComponents = ElementType<{ src: any }>;
     * ```
     *
     * @example
     *
     * ```tsx
     * // All components
     * type AllComponents = ElementType;
     * ```
     *
     * @example
     *
     * ```tsx
     * // All custom components which match `src`, and tags which
     * // match `src`, narrowed down to just `audio` and `embed`
     * type SrcComponents = ElementType<{ src: any }, 'audio' | 'embed'>;
     * ```
     */
    type ElementType<P = any, Tag extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> =
        | { [K in Tag]: P extends JSX.IntrinsicElements[K] ? K : never }[Tag]
        | ComponentType<P>;

    /**
     * Represents any user-defined component, either as a function or a class.
     *
     * Similar to {@link JSXElementConstructor}, but with extra properties like
     * {@link FunctionComponent.defaultProps defaultProps } and
     * {@link ComponentClass.contextTypes contextTypes}.
     *
     * @template P The props the component accepts.
     *
     * @see {@link ComponentClass}
     * @see {@link FunctionComponent}
     */
    type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;

    /**
     * Represents any user-defined component, either as a function or a class.
     *
     * Similar to {@link ComponentType}, but without extra properties like
     * {@link FunctionComponent.defaultProps defaultProps } and
     * {@link ComponentClass.contextTypes contextTypes}.
     *
     * @template P The props the component accepts.
     */
    type JSXElementConstructor<P> =
        | ((
            props: P,
            /**
             * @deprecated
             *
             * @see {@link https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-stateless-function-components React Docs}
             */
            deprecatedLegacyContext?: any,
        ) => ReactNode)
        | (new(
            props: P,
            /**
             * @deprecated
             *
             * @see {@link https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods React Docs}
             */
            deprecatedLegacyContext?: any,
        ) => Component<any, any>);

    /**
     * A readonly ref container where {@link current} cannot be mutated.
     *
     * Created by {@link createRef}, or {@link useRef} when passed `null`.
     *
     * @template T The type of the ref's value.
     *
     * @example
     *
     * ```tsx
     * const ref = createRef<HTMLDivElement>();
     *
     * ref.current = document.createElement('div'); // Error
     * ```
     */
    interface RefObject<T> {
        /**
         * The current value of the ref.
         */
        readonly current: T | null;
    }

    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES {
    }
    /**
     * A callback fired whenever the ref's value changes.
     *
     * @template T The type of the ref's value.
     *
     * @see {@link https://react.dev/reference/react-dom/components/common#ref-callback React Docs}
     *
     * @example
     *
     * ```tsx
     * <div ref={(node) => console.log(node)} />
     * ```
     */
    type RefCallback<T> = {
        bivarianceHack(
            instance: T | null,
        ):
            | void
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES
            ];
    }["bivarianceHack"];

    /**
     * A union type of all possible shapes for React refs.
     *
     * @see {@link RefCallback}
     * @see {@link RefObject}
     */

    type Ref<T> = RefCallback<T> | RefObject<T> | null;
    /**
     * A legacy implementation of refs where you can pass a string to a ref prop.
     *
     * @see {@link https://react.dev/reference/react/Component#refs React Docs}
     *
     * @example
     *
     * ```tsx
     * <div ref="myRef" />
     * ```
     */
    // TODO: Remove the string ref special case from `PropsWithRef` once we remove LegacyRef
    type LegacyRef<T> = string | Ref<T>;

    /**
     * Retrieves the type of the 'ref' prop for a given component type or tag name.
     *
     * @template C The component type.
     *
     * @example
     *
     * ```tsx
     * type MyComponentRef = React.ElementRef<typeof MyComponent>;
     * ```
     *
     * @example
     *
     * ```tsx
     * type DivRef = React.ElementRef<'div'>;
     * ```
     */
    type ElementRef<
        C extends
            | ForwardRefExoticComponent<any>
            | { new(props: any): Component<any> }
            | ((props: any, deprecatedLegacyContext?: any) => ReactNode)
            | keyof JSX.IntrinsicElements,
    > =
        // need to check first if `ref` is a valid prop for ts@3.0
        // otherwise it will infer `{}` instead of `never`
        "ref" extends keyof ComponentPropsWithRef<C>
            ? NonNullable<ComponentPropsWithRef<C>["ref"]> extends RefAttributes<
                infer Instance
            >["ref"] ? Instance
            : never
            : never;

    type ComponentState = any;

    /**
     * A value which uniquely identifies a node among items in an array.
     *
     * @see {@link https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key React Docs}
     */
    type Key = string | number | bigint;

    /**
     * @internal The props any component can receive.
     * You don't have to add this type. All components automatically accept these props.
     * ```tsx
     * const Component = () => <div />;
     * <Component key="one" />
     * ```
     *
     * WARNING: The implementation of a component will never have access to these attributes.
     * The following example would be incorrect usage because {@link Component} would never have access to `key`:
     * ```tsx
     * const Component = (props: React.Attributes) => props.key;
     * ```
     */
    interface Attributes {
        key?: Key | null | undefined;
    }
    /**
     * The props any component accepting refs can receive.
     * Class components, built-in browser components (e.g. `div`) and forwardRef components can receive refs and automatically accept these props.
     * ```tsx
     * const Component = forwardRef(() => <div />);
     * <Component ref={(current) => console.log(current)} />
     * ```
     *
     * You only need this type if you manually author the types of props that need to be compatible with legacy refs.
     * ```tsx
     * interface Props extends React.RefAttributes<HTMLDivElement> {}
     * declare const Component: React.FunctionComponent<Props>;
     * ```
     *
     * Otherwise it's simpler to directly use {@link Ref} since you can safely use the
     * props type to describe to props that a consumer can pass to the component
     * as well as describing the props the implementation of a component "sees".
     * {@link RefAttributes} is generally not safe to describe both consumer and seen props.
     *
     * ```tsx
     * interface Props extends {
     *   ref?: React.Ref<HTMLDivElement> | undefined;
     * }
     * declare const Component: React.FunctionComponent<Props>;
     * ```
     *
     * WARNING: The implementation of a component will not have access to the same type in versions of React supporting string refs.
     * The following example would be incorrect usage because {@link Component} would never have access to a `ref` with type `string`
     * ```tsx
     * const Component = (props: React.RefAttributes) => props.ref;
     * ```
     */
    interface RefAttributes<T> extends Attributes {
        /**
         * Allows getting a ref to the component instance.
         * Once the component unmounts, React will set `ref.current` to `null`
         * (or call the ref with `null` if you passed a callback ref).
         *
         * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
         */
        ref?: LegacyRef<T> | undefined;
    }

    /**
     * Represents the built-in attributes available to class components.
     */
    interface ClassAttributes<T> extends RefAttributes<T> {
    }

    /**
     * Represents a JSX element.
     *
     * Where {@link ReactNode} represents everything that can be rendered, `ReactElement`
     * only represents JSX.
     *
     * @template P The type of the props object
     * @template T The type of the component or tag
     *
     * @example
     *
     * ```tsx
     * const element: ReactElement = <div />;
     * ```
     */
    interface ReactElement<
        P = any,
        T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
    > {
        type: T;
        props: P;
        key: string | null;
    }

    /**
     * @deprecated
     */
    interface ReactComponentElement<
        T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
        P = Pick<ComponentProps<T>, Exclude<keyof ComponentProps<T>, "key" | "ref">>,
    > extends ReactElement<P, Exclude<T, number>> {}

    interface FunctionComponentElement<P> extends ReactElement<P, FunctionComponent<P>> {
        ref?: ("ref" extends keyof P ? P extends { ref?: infer R | undefined } ? R : never : never) | undefined;
    }

    type CElement<P, T extends Component<P, ComponentState>> = ComponentElement<P, T>;
    interface ComponentElement<P, T extends Component<P, ComponentState>> extends ReactElement<P, ComponentClass<P>> {
        ref?: LegacyRef<T> | undefined;
    }

    /**
     * @deprecated Use {@link ComponentElement} instead.
     */
    type ClassicElement<P> = CElement<P, ClassicComponent<P, ComponentState>>;

    // string fallback for custom web-components
    interface DOMElement<P extends HTMLAttributes<T> | SVGAttributes<T>, T extends Element>
        extends ReactElement<P, string>
    {
        ref: LegacyRef<T>;
    }

    // ReactHTML for ReactHTMLElement
    interface ReactHTMLElement<T extends HTMLElement> extends DetailedReactHTMLElement<AllHTMLAttributes<T>, T> {}

    interface DetailedReactHTMLElement<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMElement<P, T> {
        type: keyof ReactHTML;
    }

    // ReactSVG for ReactSVGElement
    interface ReactSVGElement extends DOMElement<SVGAttributes<SVGElement>, SVGElement> {
        type: keyof ReactSVG;
    }

    interface ReactPortal extends ReactElement {
        children: ReactNode;
    }

    //
    // Factories
    // ----------------------------------------------------------------------

    /** @deprecated */
    type Factory<P> = (props?: Attributes & P, ...children: ReactNode[]) => ReactElement<P>;

    /** @deprecated */
    type SFCFactory<P> = FunctionComponentFactory<P>;

    /** @deprecated */
    type FunctionComponentFactory<P> = (
        props?: Attributes & P,
        ...children: ReactNode[]
    ) => FunctionComponentElement<P>;

    /** @deprecated */
    type ComponentFactory<P, T extends Component<P, ComponentState>> = (
        props?: ClassAttributes<T> & P,
        ...children: ReactNode[]
    ) => CElement<P, T>;

    /** @deprecated */
    type CFactory<P, T extends Component<P, ComponentState>> = ComponentFactory<P, T>;
    /** @deprecated */
    type ClassicFactory<P> = CFactory<P, ClassicComponent<P, ComponentState>>;

    /** @deprecated */
    type DOMFactory<P extends DOMAttributes<T>, T extends Element> = (
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ) => DOMElement<P, T>;

    /** @deprecated */
    interface HTMLFactory<T extends HTMLElement> extends DetailedHTMLFactory<AllHTMLAttributes<T>, T> {}

    /** @deprecated */
    interface DetailedHTMLFactory<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMFactory<P, T> {
        (props?: ClassAttributes<T> & P | null, ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
    }

    /** @deprecated */
    interface SVGFactory extends DOMFactory<SVGAttributes<SVGElement>, SVGElement> {
        (
            props?: ClassAttributes<SVGElement> & SVGAttributes<SVGElement> | null,
            ...children: ReactNode[]
        ): ReactSVGElement;
    }

    /**
     * @deprecated - This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactText = string | number;
    /**
     * @deprecated - This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactChild = ReactElement | string | number;

    /**
     * @deprecated Use either `ReactNode[]` if you need an array or `Iterable<ReactNode>` if its passed to a host component.
     */
    interface ReactNodeArray extends ReadonlyArray<ReactNode> {}
    /**
     * WARNING: Not related to `React.Fragment`.
     * @deprecated This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactFragment = Iterable<ReactNode>;

    /**
     * Different release channels declare additional types of ReactNode this particular release channel accepts.
     * App or library types should never augment this interface.
     */
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES {}

    /**
     * Represents all of the things React can render.
     *
     * Where {@link ReactElement} only represents JSX, `ReactNode` represents everything that can be rendered.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/react-types/reactnode/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * // Typing children
     * type Props = { children: ReactNode }
     *
     * const Component = ({ children }: Props) => <div>{children}</div>
     *
     * <Component>hello</Component>
     * ```
     *
     * @example
     *
     * ```tsx
     * // Typing a custom element
     * type Props = { customElement: ReactNode }
     *
     * const Component = ({ customElement }: Props) => <div>{customElement}</div>
     *
     * <Component customElement={<div>hello</div>} />
     * ```
     */
    // non-thenables need to be kept in sync with AwaitedReactNode
    type ReactNode =
        | ReactElement
        | string
        | number
        | Iterable<ReactNode>
        | ReactPortal
        | boolean
        | null
        | undefined
        | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES[
            keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES
        ];

    //
    // Top Level API
    // ----------------------------------------------------------------------

    // DOM Elements
    /** @deprecated */
    function createFactory<T extends HTMLElement>(
        type: keyof ReactHTML,
    ): HTMLFactory<T>;
    /** @deprecated */
    function createFactory(
        type: keyof ReactSVG,
    ): SVGFactory;
    /** @deprecated */
    function createFactory<P extends DOMAttributes<T>, T extends Element>(
        type: string,
    ): DOMFactory<P, T>;

    // Custom components
    /** @deprecated */
    function createFactory<P>(type: FunctionComponent<P>): FunctionComponentFactory<P>;
    /** @deprecated */
    function createFactory<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
        type: ClassType<P, T, C>,
    ): CFactory<P, T>;
    /** @deprecated */
    function createFactory<P>(type: ComponentClass<P>): Factory<P>;

    // DOM Elements
    // TODO: generalize this to everything in `keyof ReactHTML`, not just "input"
    function createElement(
        type: "input",
        props?: InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> | null,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    function createElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        type: keyof ReactHTML,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<P, T>;
    function createElement<P extends SVGAttributes<T>, T extends SVGElement>(
        type: keyof ReactSVG,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): ReactSVGElement;
    function createElement<P extends DOMAttributes<T>, T extends Element>(
        type: string,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): DOMElement<P, T>;

    // Custom components

    function createElement<P extends {}>(
        type: FunctionComponent<P>,
        props?: Attributes & P | null,
        ...children: ReactNode[]
    ): FunctionComponentElement<P>;
    function createElement<P extends {}, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
        type: ClassType<P, T, C>,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): CElement<P, T>;
    function createElement<P extends {}>(
        type: FunctionComponent<P> | ComponentClass<P> | string,
        props?: Attributes & P | null,
        ...children: ReactNode[]
    ): ReactElement<P>;

    // DOM Elements
    // ReactHTMLElement
    function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        element: DetailedReactHTMLElement<P, T>,
        props?: P,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<P, T>;
    // ReactHTMLElement, less specific
    function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        element: ReactHTMLElement<T>,
        props?: P,
        ...children: ReactNode[]
    ): ReactHTMLElement<T>;
    // SVGElement
    function cloneElement<P extends SVGAttributes<T>, T extends SVGElement>(
        element: ReactSVGElement,
        props?: P,
        ...children: ReactNode[]
    ): ReactSVGElement;
    // DOM Element (has to be the last, because type checking stops at first overload that fits)
    function cloneElement<P extends DOMAttributes<T>, T extends Element>(
        element: DOMElement<P, T>,
        props?: DOMAttributes<T> & P,
        ...children: ReactNode[]
    ): DOMElement<P, T>;

    // Custom components
    function cloneElement<P>(
        element: FunctionComponentElement<P>,
        props?: Partial<P> & Attributes,
        ...children: ReactNode[]
    ): FunctionComponentElement<P>;
    function cloneElement<P, T extends Component<P, ComponentState>>(
        element: CElement<P, T>,
        props?: Partial<P> & ClassAttributes<T>,
        ...children: ReactNode[]
    ): CElement<P, T>;
    function cloneElement<P>(
        element: ReactElement<P>,
        props?: Partial<P> & Attributes,
        ...children: ReactNode[]
    ): ReactElement<P>;

    /**
     * Describes the props accepted by a Context {@link Provider}.
     *
     * @template T The type of the value the context provides.
     */
    interface ProviderProps<T> {
        value: T;
        children?: ReactNode | undefined;
    }

    /**
     * Describes the props accepted by a Context {@link Consumer}.
     *
     * @template T The type of the value the context provides.
     */
    interface ConsumerProps<T> {
        children: (value: T) => ReactNode;
    }

    /**
     * An object masquerading as a component. These are created by functions
     * like {@link forwardRef}, {@link memo}, and {@link createContext}.
     *
     * In order to make TypeScript work, we pretend that they are normal
     * components.
     *
     * But they are, in fact, not callable - instead, they are objects which
     * are treated specially by the renderer.
     *
     * @template P The props the component accepts.
     */
    interface ExoticComponent<P = {}> {
        (props: P): ReactNode;
        readonly $$typeof: symbol;
    }

    /**
     * An {@link ExoticComponent} with a `displayName` property applied to it.
     *
     * @template P The props the component accepts.
     */
    interface NamedExoticComponent<P = {}> extends ExoticComponent<P> {
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         */
        displayName?: string | undefined;
    }

    /**
     * An {@link ExoticComponent} with a `propTypes` property applied to it.
     *
     * @template P The props the component accepts.
     */
    interface ProviderExoticComponent<P> extends ExoticComponent<P> {
        propTypes?: WeakValidationMap<P> | undefined;
    }

    /**
     * Used to retrieve the type of a context object from a {@link Context}.
     *
     * @template C The context object.
     *
     * @example
     *
     * ```tsx
     * import { createContext } from 'react';
     *
     * const MyContext = createContext({ foo: 'bar' });
     *
     * type ContextType = ContextType<typeof MyContext>;
     * // ContextType = { foo: string }
     * ```
     */
    type ContextType<C extends Context<any>> = C extends Context<infer T> ? T : never;

    /**
     * Wraps your components to specify the value of this context for all components inside.
     *
     * @see {@link https://react.dev/reference/react/createContext#provider React Docs}
     *
     * @example
     *
     * ```tsx
     * import { createContext } from 'react';
     *
     * const ThemeContext = createContext('light');
     *
     * function App() {
     *   return (
     *     <ThemeContext.Provider value="dark">
     *       <Toolbar />
     *     </ThemeContext.Provider>
     *   );
     * }
     * ```
     */
    type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;

    /**
     * The old way to read context, before {@link useContext} existed.
     *
     * @see {@link https://react.dev/reference/react/createContext#consumer React Docs}
     *
     * @example
     *
     * ```tsx
     * import { UserContext } from './user-context';
     *
     * function Avatar() {
     *   return (
     *     <UserContext.Consumer>
     *       {user => <img src={user.profileImage} alt={user.name} />}
     *     </UserContext.Consumer>
     *   );
     * }
     * ```
     */
    type Consumer<T> = ExoticComponent<ConsumerProps<T>>;

    /**
     * Context lets components pass information deep down without explicitly
     * passing props.
     *
     * Created from {@link createContext}
     *
     * @see {@link https://react.dev/learn/passing-data-deeply-with-context React Docs}
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * import { createContext } from 'react';
     *
     * const ThemeContext = createContext('light');
     * ```
     */
    interface Context<T> {
        Provider: Provider<T>;
        Consumer: Consumer<T>;
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         */
        displayName?: string | undefined;
    }

    /**
     * Lets you create a {@link Context} that components can provide or read.
     *
     * @param defaultValue The value you want the context to have when there is no matching
     * {@link Provider} in the tree above the component reading the context. This is meant
     * as a "last resort" fallback.
     *
     * @see {@link https://react.dev/reference/react/createContext#reference React Docs}
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * import { createContext } from 'react';
     *
     * const ThemeContext = createContext('light');
     * ```
     */
    function createContext<T>(
        // If you thought this should be optional, see
        // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
        defaultValue: T,
    ): Context<T>;

    function isValidElement<P>(object: {} | null | undefined): object is ReactElement<P>;

    /**
     * Maintainer's note: Sync with {@link ReactChildren} until {@link ReactChildren} is removed.
     */
    const Children: {
        map<T, C>(
            children: C | readonly C[],
            fn: (child: C, index: number) => T,
        ): C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
        forEach<C>(children: C | readonly C[], fn: (child: C, index: number) => void): void;
        count(children: any): number;
        only<C>(children: C): C extends any[] ? never : C;
        toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
    };
    /**
     * Lets you group elements without a wrapper node.
     *
     * @see {@link https://react.dev/reference/react/Fragment React Docs}
     *
     * @example
     *
     * ```tsx
     * import { Fragment } from 'react';
     *
     * <Fragment>
     *   <td>Hello</td>
     *   <td>World</td>
     * </Fragment>
     * ```
     *
     * @example
     *
     * ```tsx
     * // Using the <></> shorthand syntax:
     *
     * <>
     *   <td>Hello</td>
     *   <td>World</td>
     * </>
     * ```
     */
    const Fragment: ExoticComponent<{ children?: ReactNode | undefined }>;

    /**
     * Lets you find common bugs in your components early during development.
     *
     * @see {@link https://react.dev/reference/react/StrictMode React Docs}
     *
     * @example
     *
     * ```tsx
     * import { StrictMode } from 'react';
     *
     * <StrictMode>
     *   <App />
     * </StrictMode>
     * ```
     */
    const StrictMode: ExoticComponent<{ children?: ReactNode | undefined }>;

    /**
     * The props accepted by {@link Suspense}.
     *
     * @see {@link https://react.dev/reference/react/Suspense React Docs}
     */
    interface SuspenseProps {
        children?: ReactNode | undefined;

        /** A fallback react tree to show when a Suspense child (like React.lazy) suspends */
        fallback?: ReactNode;

        /**
         * A name for this Suspense boundary for instrumentation purposes.
         * The name will help identify this boundary in React DevTools.
         */
        name?: string | undefined;
    }

    /**
     * Lets you display a fallback until its children have finished loading.
     *
     * @see {@link https://react.dev/reference/react/Suspense React Docs}
     *
     * @example
     *
     * ```tsx
     * import { Suspense } from 'react';
     *
     * <Suspense fallback={<Loading />}>
     *   <ProfileDetails />
     * </Suspense>
     * ```
     */
    const Suspense: ExoticComponent<SuspenseProps>;
    const version: string;

    /**
     * The callback passed to {@link ProfilerProps.onRender}.
     *
     * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
     */
    type ProfilerOnRenderCallback = (
        /**
         * The string id prop of the {@link Profiler} tree that has just committed. This lets
         * you identify which part of the tree was committed if you are using multiple
         * profilers.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        id: string,
        /**
         * This lets you know whether the tree has just been mounted for the first time
         * or re-rendered due to a change in props, state, or hooks.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        phase: "mount" | "update" | "nested-update",
        /**
         * The number of milliseconds spent rendering the {@link Profiler} and its descendants
         * for the current update. This indicates how well the subtree makes use of
         * memoization (e.g. {@link memo} and {@link useMemo}). Ideally this value should decrease
         * significantly after the initial mount as many of the descendants will only need to
         * re-render if their specific props change.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        actualDuration: number,
        /**
         * The number of milliseconds estimating how much time it would take to re-render the entire
         * {@link Profiler} subtree without any optimizations. It is calculated by summing up the most
         * recent render durations of each component in the tree. This value estimates a worst-case
         * cost of rendering (e.g. the initial mount or a tree with no memoization). Compare
         * {@link actualDuration} against it to see if memoization is working.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        baseDuration: number,
        /**
         * A numeric timestamp for when React began rendering the current update.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        startTime: number,
        /**
         * A numeric timestamp for when React committed the current update. This value is shared
         * between all profilers in a commit, enabling them to be grouped if desirable.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        commitTime: number,
    ) => void;

    /**
     * The props accepted by {@link Profiler}.
     *
     * @see {@link https://react.dev/reference/react/Profiler React Docs}
     */
    interface ProfilerProps {
        children?: ReactNode | undefined;
        id: string;
        onRender: ProfilerOnRenderCallback;
    }

    /**
     * Lets you measure rendering performance of a React tree programmatically.
     *
     * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
     *
     * @example
     *
     * ```tsx
     * <Profiler id="App" onRender={onRender}>
     *   <App />
     * </Profiler>
     * ```
     */
    const Profiler: ExoticComponent<ProfilerProps>;

    //
    // Component API
    // ----------------------------------------------------------------------

    type ReactInstance = Component<any> | Element;

    // Base component for plain JS classes
    interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> {}
    class Component<P, S> {
        /**
         * If set, `this.context` will be set at runtime to the current value of the given Context.
         *
         * @example
         *
         * ```ts
         * type MyContext = number
         * const Ctx = React.createContext<MyContext>(0)
         *
         * class Foo extends React.Component {
         *   static contextType = Ctx
         *   context!: React.ContextType<typeof Ctx>
         *   render () {
         *     return <>My context's value: {this.context}</>;
         *   }
         * }
         * ```
         *
         * @see {@link https://react.dev/reference/react/Component#static-contexttype}
         */
        static contextType?: Context<any> | undefined;

        /**
         * If using the new style context, re-declare this in your class to be the
         * `React.ContextType` of your `static contextType`.
         * Should be used with type annotation or static contextType.
         *
         * @example
         * ```ts
         * static contextType = MyContext
         * // For TS pre-3.7:
         * context!: React.ContextType<typeof MyContext>
         * // For TS 3.7 and above:
         * declare context: React.ContextType<typeof MyContext>
         * ```
         *
         * @see {@link https://react.dev/reference/react/Component#context React Docs}
         */
        context: unknown;

        constructor(props: P);
        /**
         * @deprecated
         * @see {@link https://legacy.reactjs.org/docs/legacy-context.html React Docs}
         */
        constructor(props: P, context: any);

        // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
        // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
        // Also, the ` | S` allows intellisense to not be dumbisense
        setState<K extends keyof S>(
            state: ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null) | (Pick<S, K> | S | null),
            callback?: () => void,
        ): void;

        forceUpdate(callback?: () => void): void;
        render(): ReactNode;

        readonly props: Readonly<P>;
        state: Readonly<S>;
        /**
         * @deprecated
         *
         * @see {@link https://legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs Legacy React Docs}
         */
        refs: {
            [key: string]: ReactInstance;
        };
    }

    class PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {}

    /**
     * @deprecated Use `ClassicComponent` from `create-react-class`
     *
     * @see {@link https://legacy.reactjs.org/docs/react-without-es6.html Legacy React Docs}
     * @see {@link https://www.npmjs.com/package/create-react-class `create-react-class` on npm}
     */
    interface ClassicComponent<P = {}, S = {}> extends Component<P, S> {
        replaceState(nextState: S, callback?: () => void): void;
        isMounted(): boolean;
        getInitialState?(): S;
    }

    interface ChildContextProvider<CC> {
        getChildContext(): CC;
    }

    //
    // Class Interfaces
    // ----------------------------------------------------------------------

    /**
     * Represents the type of a function component. Can optionally
     * receive a type argument that represents the props the component
     * receives.
     *
     * @template P The props the component accepts.
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
     * @alias for {@link FunctionComponent}
     *
     * @example
     *
     * ```tsx
     * // With props:
     * type Props = { name: string }
     *
     * const MyComponent: FC<Props> = (props) => {
     *  return <div>{props.name}</div>
     * }
     * ```
     *
     * @example
     *
     * ```tsx
     * // Without props:
     * const MyComponentWithoutProps: FC = () => {
     *   return <div>MyComponentWithoutProps</div>
     * }
     * ```
     */
    type FC<P = {}> = FunctionComponent<P>;

    /**
     * Represents the type of a function component. Can optionally
     * receive a type argument that represents the props the component
     * accepts.
     *
     * @template P The props the component accepts.
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * // With props:
     * type Props = { name: string }
     *
     * const MyComponent: FunctionComponent<Props> = (props) => {
     *  return <div>{props.name}</div>
     * }
     * ```
     *
     * @example
     *
     * ```tsx
     * // Without props:
     * const MyComponentWithoutProps: FunctionComponent = () => {
     *   return <div>MyComponentWithoutProps</div>
     * }
     * ```
     */
    interface FunctionComponent<P = {}> {
        (
            props: P,
            /**
             * @deprecated
             *
             * @see {@link https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods React Docs}
             */
            deprecatedLegacyContext?: any,
        ): ReactNode;
        /**
         * Used to declare the types of the props accepted by the
         * component. These types will be checked during rendering
         * and in development only.
         *
         * We recommend using TypeScript instead of checking prop
         * types at runtime.
         *
         * @see {@link https://react.dev/reference/react/Component#static-proptypes React Docs}
         */
        propTypes?: WeakValidationMap<P> | undefined;
        /**
         * @deprecated
         *
         * Lets you specify which legacy context is consumed by
         * this component.
         *
         * @see {@link https://legacy.reactjs.org/docs/legacy-context.html Legacy React Docs}
         */
        contextTypes?: ValidationMap<any> | undefined;
        /**
         * Used to define default values for the props accepted by
         * the component.
         *
         * @see {@link https://react.dev/reference/react/Component#static-defaultprops React Docs}
         *
         * @example
         *
         * ```tsx
         * type Props = { name?: string }
         *
         * const MyComponent: FC<Props> = (props) => {
         *   return <div>{props.name}</div>
         * }
         *
         * MyComponent.defaultProps = {
         *   name: 'John Doe'
         * }
         * ```
         *
         * @deprecated Use {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value|default values for destructuring assignments instead}.
         */
        defaultProps?: Partial<P> | undefined;
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         *
         * @example
         *
         * ```tsx
         *
         * const MyComponent: FC = () => {
         *   return <div>Hello!</div>
         * }
         *
         * MyComponent.displayName = 'MyAwesomeComponent'
         * ```
         */
        displayName?: string | undefined;
    }

    /**
     * @deprecated - Equivalent to {@link React.FunctionComponent}.
     *
     * @see {@link React.FunctionComponent}
     * @alias {@link VoidFunctionComponent}
     */
    type VFC<P = {}> = VoidFunctionComponent<P>;

    /**
     * @deprecated - Equivalent to {@link React.FunctionComponent}.
     *
     * @see {@link React.FunctionComponent}
     */
    interface VoidFunctionComponent<P = {}> {
        (
            props: P,
            /**
             * @deprecated
             *
             * @see {@link https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods React Docs}
             */
            deprecatedLegacyContext?: any,
        ): ReactNode;
        propTypes?: WeakValidationMap<P> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        /**
         * @deprecated Use {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value|default values for destructuring assignments instead}.
         */
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }

    /**
     * The type of the ref received by a {@link ForwardRefRenderFunction}.
     *
     * @see {@link ForwardRefRenderFunction}
     */
    type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

    /**
     * The type of the function passed to {@link forwardRef}. This is considered different
     * to a normal {@link FunctionComponent} because it receives an additional argument,
     *
     * @param props Props passed to the component, if any.
     * @param ref A ref forwarded to the component of type {@link ForwardedRef}.
     *
     * @template T The type of the forwarded ref.
     * @template P The type of the props the component accepts.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/ React TypeScript Cheatsheet}
     * @see {@link forwardRef}
     */
    interface ForwardRefRenderFunction<T, P = {}> {
        (props: P, ref: ForwardedRef<T>): ReactNode;
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * Will show `ForwardRef(${Component.displayName || Component.name})`
         * in devtools by default, but can be given its own specific name.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         */
        displayName?: string | undefined;
        /**
         * defaultProps are not supported on render functions passed to forwardRef.
         *
         * @see {@link https://github.com/microsoft/TypeScript/issues/36826 linked GitHub issue} for context
         * @see {@link https://react.dev/reference/react/Component#static-defaultprops React Docs}
         */
        defaultProps?: never | undefined;
        /**
         * propTypes are not supported on render functions passed to forwardRef.
         *
         * @see {@link https://github.com/microsoft/TypeScript/issues/36826 linked GitHub issue} for context
         * @see {@link https://react.dev/reference/react/Component#static-proptypes React Docs}
         */
        propTypes?: never | undefined;
    }

    /**
     * Represents a component class in React.
     *
     * @template P The props the component accepts.
     * @template S The internal state of the component.
     */
    interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
        new(
            props: P,
            /**
             * @deprecated
             *
             * @see {@link https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods React Docs}
             */
            deprecatedLegacyContext?: any,
        ): Component<P, S>;
        /**
         * Used to declare the types of the props accepted by the
         * component. These types will be checked during rendering
         * and in development only.
         *
         * We recommend using TypeScript instead of checking prop
         * types at runtime.
         *
         * @see {@link https://react.dev/reference/react/Component#static-proptypes React Docs}
         */
        propTypes?: WeakValidationMap<P> | undefined;
        contextType?: Context<any> | undefined;
        /**
         * @deprecated use {@link ComponentClass.contextType} instead
         *
         * Lets you specify which legacy context is consumed by
         * this component.
         *
         * @see {@link https://legacy.reactjs.org/docs/legacy-context.html Legacy React Docs}
         */
        contextTypes?: ValidationMap<any> | undefined;
        /**
         * @deprecated
         *
         * @see {@link https://legacy.reactjs.org/docs/legacy-context.html#how-to-use-context Legacy React Docs}
         */
        childContextTypes?: ValidationMap<any> | undefined;
        /**
         * Used to define default values for the props accepted by
         * the component.
         *
         * @see {@link https://react.dev/reference/react/Component#static-defaultprops React Docs}
         */
        defaultProps?: Partial<P> | undefined;
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         */
        displayName?: string | undefined;
    }

    /**
     * @deprecated Use `ClassicComponentClass` from `create-react-class`
     *
     * @see {@link https://legacy.reactjs.org/docs/react-without-es6.html Legacy React Docs}
     * @see {@link https://www.npmjs.com/package/create-react-class `create-react-class` on npm}
     */
    interface ClassicComponentClass<P = {}> extends ComponentClass<P> {
        new(props: P, deprecatedLegacyContext?: any): ClassicComponent<P, ComponentState>;
        getDefaultProps?(): P;
    }

    /**
     * Used in {@link createElement} and {@link createFactory} to represent
     * a class.
     *
     * An intersection type is used to infer multiple type parameters from
     * a single argument, which is useful for many top-level API defs.
     * See {@link https://github.com/Microsoft/TypeScript/issues/7234 this GitHub issue}
     * for more info.
     */
    type ClassType<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>> =
        & C
        & (new(props: P, deprecatedLegacyContext?: any) => T);

    //
    // Component Specs and Lifecycle
    // ----------------------------------------------------------------------

    // This should actually be something like `Lifecycle<P, S> | DeprecatedLifecycle<P, S>`,
    // as React will _not_ call the deprecated lifecycle methods if any of the new lifecycle
    // methods are present.
    interface ComponentLifecycle<P, S, SS = any> extends NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> {
        /**
         * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
         */
        componentDidMount?(): void;
        /**
         * Called to determine whether the change in props and state should trigger a re-render.
         *
         * `Component` always returns true.
         * `PureComponent` implements a shallow comparison on props and state and returns true if any
         * props or states have changed.
         *
         * If false is returned, {@link Component.render}, `componentWillUpdate`
         * and `componentDidUpdate` will not be called.
         */
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
        /**
         * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
         * cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.
         */
        componentWillUnmount?(): void;
        /**
         * Catches exceptions generated in descendant components. Unhandled exceptions will cause
         * the entire component tree to unmount.
         */
        componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
    }

    // Unfortunately, we have no way of declaring that the component constructor must implement this
    interface StaticLifecycle<P, S> {
        getDerivedStateFromProps?: GetDerivedStateFromProps<P, S> | undefined;
        getDerivedStateFromError?: GetDerivedStateFromError<P, S> | undefined;
    }

    type GetDerivedStateFromProps<P, S> =
        /**
         * Returns an update to a component's state based on its new props and old state.
         *
         * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
         */
        (nextProps: Readonly<P>, prevState: S) => Partial<S> | null;

    type GetDerivedStateFromError<P, S> =
        /**
         * This lifecycle is invoked after an error has been thrown by a descendant component.
         * It receives the error that was thrown as a parameter and should return a value to update state.
         *
         * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
         */
        (error: any) => Partial<S> | null;

    // This should be "infer SS" but can't use it yet
    interface NewLifecycle<P, S, SS> {
        /**
         * Runs before React applies the result of {@link Component.render render} to the document, and
         * returns an object to be given to {@link componentDidUpdate}. Useful for saving
         * things such as scroll position before {@link Component.render render} causes changes to it.
         *
         * Note: the presence of this method prevents any of the deprecated
         * lifecycle events from running.
         */
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
        /**
         * Called immediately after updating occurs. Not called for the initial render.
         *
         * The snapshot is only present if {@link getSnapshotBeforeUpdate} is present and returns non-null.
         */
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;
    }

    interface DeprecatedLifecycle<P, S> {
        /**
         * Called immediately before mounting occurs, and before {@link Component.render}.
         * Avoid introducing any side-effects or subscriptions in this method.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use {@link ComponentLifecycle.componentDidMount componentDidMount} or the constructor instead; will stop working in React 17
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        componentWillMount?(): void;
        /**
         * Called immediately before mounting occurs, and before {@link Component.render}.
         * Avoid introducing any side-effects or subscriptions in this method.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use {@link ComponentLifecycle.componentDidMount componentDidMount} or the constructor instead
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        UNSAFE_componentWillMount?(): void;
        /**
         * Called when the component may be receiving new props.
         * React may call this even if props have not changed, so be sure to compare new and existing
         * props if you only want to handle changes.
         *
         * Calling {@link Component.setState} generally does not trigger this method.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use static {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} instead; will stop working in React 17
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        /**
         * Called when the component may be receiving new props.
         * React may call this even if props have not changed, so be sure to compare new and existing
         * props if you only want to handle changes.
         *
         * Calling {@link Component.setState} generally does not trigger this method.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use static {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} instead
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        /**
         * Called immediately before rendering when new props or state is received. Not called for the initial render.
         *
         * Note: You cannot call {@link Component.setState} here.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
        /**
         * Called immediately before rendering when new props or state is received. Not called for the initial render.
         *
         * Note: You cannot call {@link Component.setState} here.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use getSnapshotBeforeUpdate instead
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    }

    /**
     * @deprecated
     *
     * @see {@link https://legacy.reactjs.org/blog/2016/07/13/mixins-considered-harmful.html Mixins Considered Harmful}
     */
    interface Mixin<P, S> extends ComponentLifecycle<P, S> {
        mixins?: Array<Mixin<P, S>> | undefined;
        statics?: {
            [key: string]: any;
        } | undefined;

        displayName?: string | undefined;
        propTypes?: ValidationMap<any> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        childContextTypes?: ValidationMap<any> | undefined;

        getDefaultProps?(): P;
        getInitialState?(): S;
    }

    /**
     * @deprecated
     *
     * @see {@link https://legacy.reactjs.org/blog/2016/07/13/mixins-considered-harmful.html Mixins Considered Harmful}
     */
    interface ComponentSpec<P, S> extends Mixin<P, S> {
        render(): ReactNode;

        [propertyName: string]: any;
    }

    function createRef<T>(): RefObject<T>;

    /**
     * The type of the component returned from {@link forwardRef}.
     *
     * @template P The props the component accepts, if any.
     *
     * @see {@link ExoticComponent}
     */
    interface ForwardRefExoticComponent<P> extends NamedExoticComponent<P> {
        /**
         * @deprecated Use {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value|default values for destructuring assignments instead}.
         */
        defaultProps?: Partial<P> | undefined;
        propTypes?: WeakValidationMap<P> | undefined;
    }

    /**
     * Lets your component expose a DOM node to a parent component
     * using a ref.
     *
     * @see {@link https://react.dev/reference/react/forwardRef React Docs}
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/ React TypeScript Cheatsheet}
     *
     * @param render See the {@link ForwardRefRenderFunction}.
     *
     * @template T The type of the DOM node.
     * @template P The props the component accepts, if any.
     *
     * @example
     *
     * ```tsx
     * interface Props {
     *   children?: ReactNode;
     *   type: "submit" | "button";
     * }
     *
     * export const FancyButton = forwardRef<HTMLButtonElement, Props>((props, ref) => (
     *   <button ref={ref} className="MyClassName" type={props.type}>
     *     {props.children}
     *   </button>
     * ));
     * ```
     */
    function forwardRef<T, P = {}>(
        render: ForwardRefRenderFunction<T, PropsWithoutRef<P>>,
    ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

    /**
     * Omits the 'ref' attribute from the given props object.
     *
     * @template P The props object type.
     */
    type PropsWithoutRef<P> =
        // Omit would not be sufficient for this. We'd like to avoid unnecessary mapping and need a distributive conditional to support unions.
        // see: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
        // https://github.com/Microsoft/TypeScript/issues/28339
        P extends any ? ("ref" extends keyof P ? Omit<P, "ref"> : P) : P;
    /** Ensures that the props do not include string ref, which cannot be forwarded */
    type PropsWithRef<P> =
        // Note: String refs can be forwarded. We can't fix this bug without breaking a bunch of libraries now though.
        // Just "P extends { ref?: infer R }" looks sufficient, but R will infer as {} if P is {}.
        "ref" extends keyof P
            ? P extends { ref?: infer R | undefined }
                ? string extends R ? PropsWithoutRef<P> & { ref?: Exclude<R, string> | undefined }
                : P
            : P
            : P;

    type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };

    /**
     * Used to retrieve the props a component accepts. Can either be passed a string,
     * indicating a DOM element (e.g. 'div', 'span', etc.) or the type of a React
     * component.
     *
     * It's usually better to use {@link ComponentPropsWithRef} or {@link ComponentPropsWithoutRef}
     * instead of this type, as they let you be explicit about whether or not to include
     * the `ref` prop.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/react-types/componentprops/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * // Retrieves the props an 'input' element accepts
     * type InputProps = React.ComponentProps<'input'>;
     * ```
     *
     * @example
     *
     * ```tsx
     * const MyComponent = (props: { foo: number, bar: string }) => <div />;
     *
     * // Retrieves the props 'MyComponent' accepts
     * type MyComponentProps = React.ComponentProps<typeof MyComponent>;
     * ```
     */
    type ComponentProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = T extends
        JSXElementConstructor<infer P> ? P
        : T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T]
        : {};

    /**
     * Used to retrieve the props a component accepts with its ref. Can either be
     * passed a string, indicating a DOM element (e.g. 'div', 'span', etc.) or the
     * type of a React component.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/react-types/componentprops/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * // Retrieves the props an 'input' element accepts
     * type InputProps = React.ComponentPropsWithRef<'input'>;
     * ```
     *
     * @example
     *
     * ```tsx
     * const MyComponent = (props: { foo: number, bar: string }) => <div />;
     *
     * // Retrieves the props 'MyComponent' accepts
     * type MyComponentPropsWithRef = React.ComponentPropsWithRef<typeof MyComponent>;
     * ```
     */
    type ComponentPropsWithRef<T extends ElementType> = T extends (new(props: infer P) => Component<any, any>)
        ? PropsWithoutRef<P> & RefAttributes<InstanceType<T>>
        : PropsWithRef<ComponentProps<T>>;
    /**
     * Used to retrieve the props a custom component accepts with its ref.
     *
     * Unlike {@link ComponentPropsWithRef}, this only works with custom
     * components, i.e. components you define yourself. This is to improve
     * type-checking performance.
     *
     * @example
     *
     * ```tsx
     * const MyComponent = (props: { foo: number, bar: string }) => <div />;
     *
     * // Retrieves the props 'MyComponent' accepts
     * type MyComponentPropsWithRef = React.CustomComponentPropsWithRef<typeof MyComponent>;
     * ```
     */
    type CustomComponentPropsWithRef<T extends ComponentType> = T extends (new(props: infer P) => Component<any, any>)
        ? (PropsWithoutRef<P> & RefAttributes<InstanceType<T>>)
        : T extends ((props: infer P, legacyContext?: any) => ReactNode) ? PropsWithRef<P>
        : never;

    /**
     * Used to retrieve the props a component accepts without its ref. Can either be
     * passed a string, indicating a DOM element (e.g. 'div', 'span', etc.) or the
     * type of a React component.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/react-types/componentprops/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * ```tsx
     * // Retrieves the props an 'input' element accepts
     * type InputProps = React.ComponentPropsWithoutRef<'input'>;
     * ```
     *
     * @example
     *
     * ```tsx
     * const MyComponent = (props: { foo: number, bar: string }) => <div />;
     *
     * // Retrieves the props 'MyComponent' accepts
     * type MyComponentPropsWithoutRef = React.ComponentPropsWithoutRef<typeof MyComponent>;
     * ```
     */
    type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<ComponentProps<T>>;

    type ComponentRef<T extends ElementType> = T extends NamedExoticComponent<
        ComponentPropsWithoutRef<T> & RefAttributes<infer Method>
    > ? Method
        : ComponentPropsWithRef<T> extends RefAttributes<infer Method> ? Method
        : never;

    // will show `Memo(${Component.displayName || Component.name})` in devtools by default,
    // but can be given its own specific name
    type MemoExoticComponent<T extends ComponentType<any>> = NamedExoticComponent<CustomComponentPropsWithRef<T>> & {
        readonly type: T;
    };

    /**
     * Lets you skip re-rendering a component when its props are unchanged.
     *
     * @see {@link https://react.dev/reference/react/memo React Docs}
     *
     * @param Component The component to memoize.
     * @param propsAreEqual A function that will be used to determine if the props have changed.
     *
     * @example
     *
     * ```tsx
     * import { memo } from 'react';
     *
     * const SomeComponent = memo(function SomeComponent(props: { foo: string }) {
     *   // ...
     * });
     * ```
     */
    function memo<P extends object>(
        Component: FunctionComponent<P>,
        propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean,
    ): NamedExoticComponent<P>;
    function memo<T extends ComponentType<any>>(
        Component: T,
        propsAreEqual?: (prevProps: Readonly<ComponentProps<T>>, nextProps: Readonly<ComponentProps<T>>) => boolean,
    ): MemoExoticComponent<T>;

    interface LazyExoticComponent<T extends ComponentType<any>>
        extends ExoticComponent<CustomComponentPropsWithRef<T>>
    {
        readonly _result: T;
    }

    /**
     * Lets you defer loading a component’s code until it is rendered for the first time.
     *
     * @see {@link https://react.dev/reference/react/lazy React Docs}
     *
     * @param load A function that returns a `Promise` or another thenable (a `Promise`-like object with a
     * then method). React will not call `load` until the first time you attempt to render the returned
     * component. After React first calls load, it will wait for it to resolve, and then render the
     * resolved value’s `.default` as a React component. Both the returned `Promise` and the `Promise`’s
     * resolved value will be cached, so React will not call load more than once. If the `Promise` rejects,
     * React will throw the rejection reason for the nearest Error Boundary to handle.
     *
     * @example
     *
     * ```tsx
     * import { lazy } from 'react';
     *
     * const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
     * ```
     */
    function lazy<T extends ComponentType<any>>(
        load: () => Promise<{ default: T }>,
    ): LazyExoticComponent<T>;

    //
    // React Hooks
    // ----------------------------------------------------------------------

    /**
     * The instruction passed to a {@link Dispatch} function in {@link useState}
     * to tell React what the next value of the {@link useState} should be.
     *
     * Often found wrapped in {@link Dispatch}.
     *
     * @template S The type of the state.
     *
     * @example
     *
     * ```tsx
     * // This return type correctly represents the type of
     * // `setCount` in the example below.
     * const useCustomState = (): Dispatch<SetStateAction<number>> => {
     *   const [count, setCount] = useState(0);
     *
     *   return setCount;
     * }
     * ```
     */
    type SetStateAction<S> = S | ((prevState: S) => S);

    /**
     * A function that can be used to update the state of a {@link useState}
     * or {@link useReducer} hook.
     */
    type Dispatch<A> = (value: A) => void;
    /**
     * A {@link Dispatch} function can sometimes be called without any arguments.
     */
    type DispatchWithoutAction = () => void;
    // Unlike redux, the actions _can_ be anything
    type Reducer<S, A> = (prevState: S, action: A) => S;
    // If useReducer accepts a reducer without action, dispatch may be called without any parameters.
    type ReducerWithoutAction<S> = (prevState: S) => S;
    // types used to try and prevent the compiler from reducing S
    // to a supertype common with the second argument to useReducer()
    type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;
    type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<any, infer A> ? A : never;
    // The identity check is done with the SameValue algorithm (Object.is), which is stricter than ===
    type ReducerStateWithoutAction<R extends ReducerWithoutAction<any>> = R extends ReducerWithoutAction<infer S> ? S
        : never;
    type DependencyList = readonly unknown[];

    // NOTE: callbacks are _only_ allowed to return either void, or a destructor.
    type EffectCallback = () => void | Destructor;

    interface MutableRefObject<T> {
        current: T;
    }

    // This will technically work if you give a Consumer<T> or Provider<T> but it's deprecated and warns
    /**
     * Accepts a context object (the value returned from `React.createContext`) and returns the current
     * context value, as given by the nearest context provider for the given context.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useContext}
     */
    function useContext<T>(context: Context<T> /*, (not public API) observedBits?: number|boolean */): T;
    /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useState}
     */
    function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
    // convenience overload when first argument is omitted
    /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useState}
     */
    function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
    /**
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useReducer}
     */
    // overload where dispatch could accept 0 arguments.
    function useReducer<R extends ReducerWithoutAction<any>, I>(
        reducer: R,
        initializerArg: I,
        initializer: (arg: I) => ReducerStateWithoutAction<R>,
    ): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
    /**
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useReducer}
     */
    // overload where dispatch could accept 0 arguments.
    function useReducer<R extends ReducerWithoutAction<any>>(
        reducer: R,
        initializerArg: ReducerStateWithoutAction<R>,
        initializer?: undefined,
    ): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
    /**
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useReducer}
     */
    // overload where "I" may be a subset of ReducerState<R>; used to provide autocompletion.
    // If "I" matches ReducerState<R> exactly then the last overload will allow initializer to be omitted.
    // the last overload effectively behaves as if the identity function (x => x) is the initializer.
    function useReducer<R extends Reducer<any, any>, I>(
        reducer: R,
        initializerArg: I & ReducerState<R>,
        initializer: (arg: I & ReducerState<R>) => ReducerState<R>,
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useReducer}
     */
    // overload for free "I"; all goes as long as initializer converts it into "ReducerState<R>".
    function useReducer<R extends Reducer<any, any>, I>(
        reducer: R,
        initializerArg: I,
        initializer: (arg: I) => ReducerState<R>,
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useReducer}
     */

    // I'm not sure if I keep this 2-ary or if I make it (2,3)-ary; it's currently (2,3)-ary.
    // The Flow types do have an overload for 3-ary invocation with undefined initializer.

    // NOTE: without the ReducerState indirection, TypeScript would reduce S to be the most common
    // supertype between the reducer's return type and the initialState (or the initializer's return type),
    // which would prevent autocompletion from ever working.

    // TODO: double-check if this weird overload logic is necessary. It is possible it's either a bug
    // in older versions, or a regression in newer versions of the typescript completion service.
    function useReducer<R extends Reducer<any, any>>(
        reducer: R,
        initialState: ReducerState<R>,
        initializer?: undefined,
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
     * (`initialValue`). The returned object will persist for the full lifetime of the component.
     *
     * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useRef}
     */
    function useRef<T>(initialValue: T): MutableRefObject<T>;
    // convenience overload for refs given as a ref prop as they typically start with a null value
    /**
     * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
     * (`initialValue`). The returned object will persist for the full lifetime of the component.
     *
     * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * Usage note: if you need the result of useRef to be directly mutable, include `| null` in the type
     * of the generic argument.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useRef}
     */
    function useRef<T>(initialValue: T | null): RefObject<T>;
    // convenience overload for potentially undefined initialValue / call with 0 arguments
    // has a default to stop it from defaulting to {} instead
    /**
     * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
     * (`initialValue`). The returned object will persist for the full lifetime of the component.
     *
     * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useRef}
     */
    function useRef<T = undefined>(initialValue?: undefined): MutableRefObject<T | undefined>;
    /**
     * The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations.
     * Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
     * `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.
     *
     * Prefer the standard `useEffect` when possible to avoid blocking visual updates.
     *
     * If you’re migrating code from a class component, `useLayoutEffect` fires in the same phase as
     * `componentDidMount` and `componentDidUpdate`.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useLayoutEffect}
     */
    function useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
    /**
     * Accepts a function that contains imperative, possibly effectful code.
     *
     * @param effect Imperative function that can return a cleanup function
     * @param deps If present, effect will only activate if the values in the list change.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useEffect}
     */
    function useEffect(effect: EffectCallback, deps?: DependencyList): void;
    // NOTE: this does not accept strings, but this will have to be fixed by removing strings from type Ref<T>
    /**
     * `useImperativeHandle` customizes the instance value that is exposed to parent components when using
     * `ref`. As always, imperative code using refs should be avoided in most cases.
     *
     * `useImperativeHandle` should be used with `React.forwardRef`.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useImperativeHandle}
     */
    function useImperativeHandle<T, R extends T>(ref: Ref<T> | undefined, init: () => R, deps?: DependencyList): void;
    // I made 'inputs' required here and in useMemo as there's no point to memoizing without the memoization key
    // useCallback(X) is identical to just using X, useMemo(() => Y) is identical to just using Y.
    /**
     * `useCallback` will return a memoized version of the callback that only changes if one of the `inputs`
     * has changed.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useCallback}
     */
    // A specific function type would not trigger implicit any.
    // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/52873#issuecomment-845806435 for a comparison between `Function` and more specific types.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    function useCallback<T extends Function>(callback: T, deps: DependencyList): T;
    /**
     * `useMemo` will only recompute the memoized value when one of the `deps` has changed.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useMemo}
     */
    // allow undefined, but don't make it optional as that is very likely a mistake
    function useMemo<T>(factory: () => T, deps: DependencyList): T;
    /**
     * `useDebugValue` can be used to display a label for custom hooks in React DevTools.
     *
     * NOTE: We don’t recommend adding debug values to every custom hook.
     * It’s most valuable for custom hooks that are part of shared libraries.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useDebugValue}
     */
    // the name of the custom hook is itself derived from the function name at runtime:
    // it's just the function name without the "use" prefix.
    function useDebugValue<T>(value: T, format?: (value: T) => any): void;

    // must be synchronous
    export type TransitionFunction = () => VoidOrUndefinedOnly;
    // strange definition to allow vscode to show documentation on the invocation
    export interface TransitionStartFunction {
        /**
         * State updates caused inside the callback are allowed to be deferred.
         *
         * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
         *
         * @param callback A _synchronous_ function which causes state updates that can be deferred.
         */
        (callback: TransitionFunction): void;
    }

    /**
     * Returns a deferred version of the value that may “lag behind” it.
     *
     * This is commonly used to keep the interface responsive when you have something that renders immediately
     * based on user input and something that needs to wait for a data fetch.
     *
     * A good example of this is a text input.
     *
     * @param value The value that is going to be deferred
     *
     * @see {@link https://react.dev/reference/react/useDeferredValue}
     */
    export function useDeferredValue<T>(value: T): T;

    /**
     * Allows components to avoid undesirable loading states by waiting for content to load
     * before transitioning to the next screen. It also allows components to defer slower,
     * data fetching updates until subsequent renders so that more crucial updates can be
     * rendered immediately.
     *
     * The `useTransition` hook returns two values in an array.
     *
     * The first is a boolean, React’s way of informing us whether we’re waiting for the transition to finish.
     * The second is a function that takes a callback. We can use it to tell React which state we want to defer.
     *
     * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
     *
     * @see {@link https://react.dev/reference/react/useTransition}
     */
    export function useTransition(): [boolean, TransitionStartFunction];

    /**
     * Similar to `useTransition` but allows uses where hooks are not available.
     *
     * @param callback A _synchronous_ function which causes state updates that can be deferred.
     */
    export function startTransition(scope: TransitionFunction): void;

    /**
     * Wrap any code rendering and triggering updates to your components into `act()` calls.
     *
     * Ensures that the behavior in your tests matches what happens in the browser
     * more closely by executing pending `useEffect`s before returning. This also
     * reduces the amount of re-renders done.
     *
     * @param callback A synchronous, void callback that will execute as a single, complete React commit.
     *
     * @see https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks
     */
    // While act does always return Thenable, if a void function is passed, we pretend the return value is also void to not trigger dangling Promise lint rules.
    export function act(callback: () => VoidOrUndefinedOnly): void;
    export function act<T>(callback: () => T | Promise<T>): Promise<T>;

    export function useId(): string;

    /**
     * @param effect Imperative function that can return a cleanup function
     * @param deps If present, effect will only activate if the values in the list change.
     *
     * @see {@link https://github.com/facebook/react/pull/21913}
     */
    export function useInsertionEffect(effect: EffectCallback, deps?: DependencyList): void;

    /**
     * @param subscribe
     * @param getSnapshot
     *
     * @see {@link https://github.com/reactwg/react-18/discussions/86}
     */
    // keep in sync with `useSyncExternalStore` from `use-sync-external-store`
    export function useSyncExternalStore<Snapshot>(
        subscribe: (onStoreChange: () => void) => () => void,
        getSnapshot: () => Snapshot,
        getServerSnapshot?: () => Snapshot,
    ): Snapshot;

    //
    // Event System
    // ----------------------------------------------------------------------
    // TODO: change any to unknown when moving to TS v3
    interface BaseSyntheticEvent<E = object, C = any, T = any> {
        nativeEvent: E;
        currentTarget: C;
        target: T;
        bubbles: boolean;
        cancelable: boolean;
        defaultPrevented: boolean;
        eventPhase: number;
        isTrusted: boolean;
        preventDefault(): void;
        isDefaultPrevented(): boolean;
        stopPropagation(): void;
        isPropagationStopped(): boolean;
        persist(): void;
        timeStamp: number;
        type: string;
    }

    /**
     * currentTarget - a reference to the element on which the event listener is registered.
     *
     * target - a reference to the element from which the event was originally dispatched.
     * This might be a child element to the element on which the event listener is registered.
     * If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682
     */
    interface SyntheticEvent<T = Element, E = Event> extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}

    interface ClipboardEvent<T = Element> extends SyntheticEvent<T, NativeClipboardEvent> {
        clipboardData: DataTransfer;
    }

    interface CompositionEvent<T = Element> extends SyntheticEvent<T, NativeCompositionEvent> {
        data: string;
    }

    interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {
        dataTransfer: DataTransfer;
    }

    interface PointerEvent<T = Element> extends MouseEvent<T, NativePointerEvent> {
        pointerId: number;
        pressure: number;
        tangentialPressure: number;
        tiltX: number;
        tiltY: number;
        twist: number;
        width: number;
        height: number;
        pointerType: "mouse" | "pen" | "touch";
        isPrimary: boolean;
    }

    interface FocusEvent<Target = Element, RelatedTarget = Element> extends SyntheticEvent<Target, NativeFocusEvent> {
        relatedTarget: (EventTarget & RelatedTarget) | null;
        target: EventTarget & Target;
    }

    interface FormEvent<T = Element> extends SyntheticEvent<T> {
    }

    interface InvalidEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    interface InputEvent<T = Element> extends SyntheticEvent<T, NativeInputEvent> {
        data: string;
    }

    export type ModifierKey =
        | "Alt"
        | "AltGraph"
        | "CapsLock"
        | "Control"
        | "Fn"
        | "FnLock"
        | "Hyper"
        | "Meta"
        | "NumLock"
        | "ScrollLock"
        | "Shift"
        | "Super"
        | "Symbol"
        | "SymbolLock";

    interface KeyboardEvent<T = Element> extends UIEvent<T, NativeKeyboardEvent> {
        altKey: boolean;
        /** @deprecated */
        charCode: number;
        ctrlKey: boolean;
        code: string;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        /**
         * See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values
         */
        key: string;
        /** @deprecated */
        keyCode: number;
        locale: string;
        location: number;
        metaKey: boolean;
        repeat: boolean;
        shiftKey: boolean;
        /** @deprecated */
        which: number;
    }

    interface MouseEvent<T = Element, E = NativeMouseEvent> extends UIEvent<T, E> {
        altKey: boolean;
        button: number;
        buttons: number;
        clientX: number;
        clientY: number;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        metaKey: boolean;
        movementX: number;
        movementY: number;
        pageX: number;
        pageY: number;
        relatedTarget: EventTarget | null;
        screenX: number;
        screenY: number;
        shiftKey: boolean;
    }

    interface TouchEvent<T = Element> extends UIEvent<T, NativeTouchEvent> {
        altKey: boolean;
        changedTouches: TouchList;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        metaKey: boolean;
        shiftKey: boolean;
        targetTouches: TouchList;
        touches: TouchList;
    }

    interface UIEvent<T = Element, E = NativeUIEvent> extends SyntheticEvent<T, E> {
        detail: number;
        view: AbstractView;
    }

    interface WheelEvent<T = Element> extends MouseEvent<T, NativeWheelEvent> {
        deltaMode: number;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
    }

    interface AnimationEvent<T = Element> extends SyntheticEvent<T, NativeAnimationEvent> {
        animationName: string;
        elapsedTime: number;
        pseudoElement: string;
    }

    interface TransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> {
        elapsedTime: number;
        propertyName: string;
        pseudoElement: string;
    }

    //
    // Event Handler Types
    // ----------------------------------------------------------------------

    type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];

    type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;

    type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
    type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
    type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
    type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
    type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
    type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
    type InputEventHandler<T = Element> = EventHandler<InputEvent<T>>;
    type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
    type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
    type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
    type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
    type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
    type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
    type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
    type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;

    //
    // Props / DOM Attributes
    // ----------------------------------------------------------------------

    interface HTMLProps<T> extends AllHTMLAttributes<T>, ClassAttributes<T> {
    }

    type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;

    interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    }

    interface SVGLineElementAttributes<T> extends SVGProps<T> {}
    interface SVGTextElementAttributes<T> extends SVGProps<T> {}

    interface DOMAttributes<T> {
        children?: ReactNode | undefined;
        dangerouslySetInnerHTML?: {
            // Should be InnerHTML['innerHTML'].
            // But unfortunately we're mixing renderer-specific type declarations.
            __html: string | TrustedHTML;
        } | undefined;

        // Clipboard Events
        onCopy?: ClipboardEventHandler<T> | undefined;
        onCopyCapture?: ClipboardEventHandler<T> | undefined;
        onCut?: ClipboardEventHandler<T> | undefined;
        onCutCapture?: ClipboardEventHandler<T> | undefined;
        onPaste?: ClipboardEventHandler<T> | undefined;
        onPasteCapture?: ClipboardEventHandler<T> | undefined;

        // Composition Events
        onCompositionEnd?: CompositionEventHandler<T> | undefined;
        onCompositionEndCapture?: CompositionEventHandler<T> | undefined;
        onCompositionStart?: CompositionEventHandler<T> | undefined;
        onCompositionStartCapture?: CompositionEventHandler<T> | undefined;
        onCompositionUpdate?: CompositionEventHandler<T> | undefined;
        onCompositionUpdateCapture?: CompositionEventHandler<T> | undefined;

        // Focus Events
        onFocus?: FocusEventHandler<T> | undefined;
        onFocusCapture?: FocusEventHandler<T> | undefined;
        onBlur?: FocusEventHandler<T> | undefined;
        onBlurCapture?: FocusEventHandler<T> | undefined;

        // Form Events
        onChange?: FormEventHandler<T> | undefined;
        onChangeCapture?: FormEventHandler<T> | undefined;
        onBeforeInput?: InputEventHandler<T> | undefined;
        onBeforeInputCapture?: FormEventHandler<T> | undefined;
        onInput?: FormEventHandler<T> | undefined;
        onInputCapture?: FormEventHandler<T> | undefined;
        onReset?: FormEventHandler<T> | undefined;
        onResetCapture?: FormEventHandler<T> | undefined;
        onSubmit?: FormEventHandler<T> | undefined;
        onSubmitCapture?: FormEventHandler<T> | undefined;
        onInvalid?: FormEventHandler<T> | undefined;
        onInvalidCapture?: FormEventHandler<T> | undefined;

        // Image Events
        onLoad?: ReactEventHandler<T> | undefined;
        onLoadCapture?: ReactEventHandler<T> | undefined;
        onError?: ReactEventHandler<T> | undefined; // also a Media Event
        onErrorCapture?: ReactEventHandler<T> | undefined; // also a Media Event

        // Keyboard Events
        onKeyDown?: KeyboardEventHandler<T> | undefined;
        onKeyDownCapture?: KeyboardEventHandler<T> | undefined;
        /** @deprecated Use `onKeyUp` or `onKeyDown` instead */
        onKeyPress?: KeyboardEventHandler<T> | undefined;
        /** @deprecated Use `onKeyUpCapture` or `onKeyDownCapture` instead */
        onKeyPressCapture?: KeyboardEventHandler<T> | undefined;
        onKeyUp?: KeyboardEventHandler<T> | undefined;
        onKeyUpCapture?: KeyboardEventHandler<T> | undefined;

        // Media Events
        onAbort?: ReactEventHandler<T> | undefined;
        onAbortCapture?: ReactEventHandler<T> | undefined;
        onCanPlay?: ReactEventHandler<T> | undefined;
        onCanPlayCapture?: ReactEventHandler<T> | undefined;
        onCanPlayThrough?: ReactEventHandler<T> | undefined;
        onCanPlayThroughCapture?: ReactEventHandler<T> | undefined;
        onDurationChange?: ReactEventHandler<T> | undefined;
        onDurationChangeCapture?: ReactEventHandler<T> | undefined;
        onEmptied?: ReactEventHandler<T> | undefined;
        onEmptiedCapture?: ReactEventHandler<T> | undefined;
        onEncrypted?: ReactEventHandler<T> | undefined;
        onEncryptedCapture?: ReactEventHandler<T> | undefined;
        onEnded?: ReactEventHandler<T> | undefined;
        onEndedCapture?: ReactEventHandler<T> | undefined;
        onLoadedData?: ReactEventHandler<T> | undefined;
        onLoadedDataCapture?: ReactEventHandler<T> | undefined;
        onLoadedMetadata?: ReactEventHandler<T> | undefined;
        onLoadedMetadataCapture?: ReactEventHandler<T> | undefined;
        onLoadStart?: ReactEventHandler<T> | undefined;
        onLoadStartCapture?: ReactEventHandler<T> | undefined;
        onPause?: ReactEventHandler<T> | undefined;
        onPauseCapture?: ReactEventHandler<T> | undefined;
        onPlay?: ReactEventHandler<T> | undefined;
        onPlayCapture?: ReactEventHandler<T> | undefined;
        onPlaying?: ReactEventHandler<T> | undefined;
        onPlayingCapture?: ReactEventHandler<T> | undefined;
        onProgress?: ReactEventHandler<T> | undefined;
        onProgressCapture?: ReactEventHandler<T> | undefined;
        onRateChange?: ReactEventHandler<T> | undefined;
        onRateChangeCapture?: ReactEventHandler<T> | undefined;
        onSeeked?: ReactEventHandler<T> | undefined;
        onSeekedCapture?: ReactEventHandler<T> | undefined;
        onSeeking?: ReactEventHandler<T> | undefined;
        onSeekingCapture?: ReactEventHandler<T> | undefined;
        onStalled?: ReactEventHandler<T> | undefined;
        onStalledCapture?: ReactEventHandler<T> | undefined;
        onSuspend?: ReactEventHandler<T> | undefined;
        onSuspendCapture?: ReactEventHandler<T> | undefined;
        onTimeUpdate?: ReactEventHandler<T> | undefined;
        onTimeUpdateCapture?: ReactEventHandler<T> | undefined;
        onVolumeChange?: ReactEventHandler<T> | undefined;
        onVolumeChangeCapture?: ReactEventHandler<T> | undefined;
        onWaiting?: ReactEventHandler<T> | undefined;
        onWaitingCapture?: ReactEventHandler<T> | undefined;

        // MouseEvents
        onAuxClick?: MouseEventHandler<T> | undefined;
        onAuxClickCapture?: MouseEventHandler<T> | undefined;
        onClick?: MouseEventHandler<T> | undefined;
        onClickCapture?: MouseEventHandler<T> | undefined;
        onContextMenu?: MouseEventHandler<T> | undefined;
        onContextMenuCapture?: MouseEventHandler<T> | undefined;
        onDoubleClick?: MouseEventHandler<T> | undefined;
        onDoubleClickCapture?: MouseEventHandler<T> | undefined;
        onDrag?: DragEventHandler<T> | undefined;
        onDragCapture?: DragEventHandler<T> | undefined;
        onDragEnd?: DragEventHandler<T> | undefined;
        onDragEndCapture?: DragEventHandler<T> | undefined;
        onDragEnter?: DragEventHandler<T> | undefined;
        onDragEnterCapture?: DragEventHandler<T> | undefined;
        onDragExit?: DragEventHandler<T> | undefined;
        onDragExitCapture?: DragEventHandler<T> | undefined;
        onDragLeave?: DragEventHandler<T> | undefined;
        onDragLeaveCapture?: DragEventHandler<T> | undefined;
        onDragOver?: DragEventHandler<T> | undefined;
        onDragOverCapture?: DragEventHandler<T> | undefined;
        onDragStart?: DragEventHandler<T> | undefined;
        onDragStartCapture?: DragEventHandler<T> | undefined;
        onDrop?: DragEventHandler<T> | undefined;
        onDropCapture?: DragEventHandler<T> | undefined;
        onMouseDown?: MouseEventHandler<T> | undefined;
        onMouseDownCapture?: MouseEventHandler<T> | undefined;
        onMouseEnter?: MouseEventHandler<T> | undefined;
        onMouseLeave?: MouseEventHandler<T> | undefined;
        onMouseMove?: MouseEventHandler<T> | undefined;
        onMouseMoveCapture?: MouseEventHandler<T> | undefined;
        onMouseOut?: MouseEventHandler<T> | undefined;
        onMouseOutCapture?: MouseEventHandler<T> | undefined;
        onMouseOver?: MouseEventHandler<T> | undefined;
        onMouseOverCapture?: MouseEventHandler<T> | undefined;
        onMouseUp?: MouseEventHandler<T> | undefined;
        onMouseUpCapture?: MouseEventHandler<T> | undefined;

        // Selection Events
        onSelect?: ReactEventHandler<T> | undefined;
        onSelectCapture?: ReactEventHandler<T> | undefined;

        // Touch Events
        onTouchCancel?: TouchEventHandler<T> | undefined;
        onTouchCancelCapture?: TouchEventHandler<T> | undefined;
        onTouchEnd?: TouchEventHandler<T> | undefined;
        onTouchEndCapture?: TouchEventHandler<T> | undefined;
        onTouchMove?: TouchEventHandler<T> | undefined;
        onTouchMoveCapture?: TouchEventHandler<T> | undefined;
        onTouchStart?: TouchEventHandler<T> | undefined;
        onTouchStartCapture?: TouchEventHandler<T> | undefined;

        // Pointer Events
        onPointerDown?: PointerEventHandler<T> | undefined;
        onPointerDownCapture?: PointerEventHandler<T> | undefined;
        onPointerMove?: PointerEventHandler<T> | undefined;
        onPointerMoveCapture?: PointerEventHandler<T> | undefined;
        onPointerUp?: PointerEventHandler<T> | undefined;
        onPointerUpCapture?: PointerEventHandler<T> | undefined;
        onPointerCancel?: PointerEventHandler<T> | undefined;
        onPointerCancelCapture?: PointerEventHandler<T> | undefined;
        onPointerEnter?: PointerEventHandler<T> | undefined;
        onPointerLeave?: PointerEventHandler<T> | undefined;
        onPointerOver?: PointerEventHandler<T> | undefined;
        onPointerOverCapture?: PointerEventHandler<T> | undefined;
        onPointerOut?: PointerEventHandler<T> | undefined;
        onPointerOutCapture?: PointerEventHandler<T> | undefined;
        onGotPointerCapture?: PointerEventHandler<T> | undefined;
        onGotPointerCaptureCapture?: PointerEventHandler<T> | undefined;
        onLostPointerCapture?: PointerEventHandler<T> | undefined;
        onLostPointerCaptureCapture?: PointerEventHandler<T> | undefined;

        // UI Events
        onScroll?: UIEventHandler<T> | undefined;
        onScrollCapture?: UIEventHandler<T> | undefined;

        // Wheel Events
        onWheel?: WheelEventHandler<T> | undefined;
        onWheelCapture?: WheelEventHandler<T> | undefined;

        // Animation Events
        onAnimationStart?: AnimationEventHandler<T> | undefined;
        onAnimationStartCapture?: AnimationEventHandler<T> | undefined;
        onAnimationEnd?: AnimationEventHandler<T> | undefined;
        onAnimationEndCapture?: AnimationEventHandler<T> | undefined;
        onAnimationIteration?: AnimationEventHandler<T> | undefined;
        onAnimationIterationCapture?: AnimationEventHandler<T> | undefined;

        // Transition Events
        onTransitionEnd?: TransitionEventHandler<T> | undefined;
        onTransitionEndCapture?: TransitionEventHandler<T> | undefined;
    }

    export interface CSSProperties extends Properties<string | number> {
        /**
         * The index signature was removed to enable closed typing for style
         * using CSSType. You're able to use type assertion or module augmentation
         * to add properties or an index signature of your own.
         *
         * For examples and more information, visit:
         * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
         */
    }

    // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
    interface AriaAttributes {
        /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
        "aria-activedescendant"?: string | undefined;
        /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
        "aria-atomic"?: Booleanish | undefined;
        /**
         * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
         * presented if they are made.
         */
        "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
        /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
        /**
         * Defines a string value that labels the current element, which is intended to be converted into Braille.
         * @see aria-label.
         */
        "aria-braillelabel"?: string | undefined;
        /**
         * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
         * @see aria-roledescription.
         */
        "aria-brailleroledescription"?: string | undefined;
        "aria-busy"?: Booleanish | undefined;
        /**
         * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
         * @see aria-pressed @see aria-selected.
         */
        "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
        /**
         * Defines the total number of columns in a table, grid, or treegrid.
         * @see aria-colindex.
         */
        "aria-colcount"?: number | undefined;
        /**
         * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
         * @see aria-colcount @see aria-colspan.
         */
        "aria-colindex"?: number | undefined;
        /**
         * Defines a human readable text alternative of aria-colindex.
         * @see aria-rowindextext.
         */
        "aria-colindextext"?: string | undefined;
        /**
         * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-colindex @see aria-rowspan.
         */
        "aria-colspan"?: number | undefined;
        /**
         * Identifies the element (or elements) whose contents or presence are controlled by the current element.
         * @see aria-owns.
         */
        "aria-controls"?: string | undefined;
        /** Indicates the element that represents the current item within a container or set of related elements. */
        "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
        /**
         * Identifies the element (or elements) that describes the object.
         * @see aria-labelledby
         */
        "aria-describedby"?: string | undefined;
        /**
         * Defines a string value that describes or annotates the current element.
         * @see related aria-describedby.
         */
        "aria-description"?: string | undefined;
        /**
         * Identifies the element that provides a detailed, extended description for the object.
         * @see aria-describedby.
         */
        "aria-details"?: string | undefined;
        /**
         * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
         * @see aria-hidden @see aria-readonly.
         */
        "aria-disabled"?: Booleanish | undefined;
        /**
         * Indicates what functions can be performed when a dragged object is released on the drop target.
         * @deprecated in ARIA 1.1
         */
        "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
        /**
         * Identifies the element that provides an error message for the object.
         * @see aria-invalid @see aria-describedby.
         */
        "aria-errormessage"?: string | undefined;
        /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
        "aria-expanded"?: Booleanish | undefined;
        /**
         * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
         * allows assistive technology to override the general default of reading in document source order.
         */
        "aria-flowto"?: string | undefined;
        /**
         * Indicates an element's "grabbed" state in a drag-and-drop operation.
         * @deprecated in ARIA 1.1
         */
        "aria-grabbed"?: Booleanish | undefined;
        /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
        "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
        /**
         * Indicates whether the element is exposed to an accessibility API.
         * @see aria-disabled.
         */
        "aria-hidden"?: Booleanish | undefined;
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @see aria-errormessage.
         */
        "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
        /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
        "aria-keyshortcuts"?: string | undefined;
        /**
         * Defines a string value that labels the current element.
         * @see aria-labelledby.
         */
        "aria-label"?: string | undefined;
        /**
         * Identifies the element (or elements) that labels the current element.
         * @see aria-describedby.
         */
        "aria-labelledby"?: string | undefined;
        /** Defines the hierarchical level of an element within a structure. */
        "aria-level"?: number | undefined;
        /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
        "aria-live"?: "off" | "assertive" | "polite" | undefined;
        /** Indicates whether an element is modal when displayed. */
        "aria-modal"?: Booleanish | undefined;
        /** Indicates whether a text box accepts multiple lines of input or only a single line. */
        "aria-multiline"?: Booleanish | undefined;
        /** Indicates that the user may select more than one item from the current selectable descendants. */
        "aria-multiselectable"?: Booleanish | undefined;
        /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
        "aria-orientation"?: "horizontal" | "vertical" | undefined;
        /**
         * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
         * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
         * @see aria-controls.
         */
        "aria-owns"?: string | undefined;
        /**
         * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
         * A hint could be a sample value or a brief description of the expected format.
         */
        "aria-placeholder"?: string | undefined;
        /**
         * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-setsize.
         */
        "aria-posinset"?: number | undefined;
        /**
         * Indicates the current "pressed" state of toggle buttons.
         * @see aria-checked @see aria-selected.
         */
        "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
        /**
         * Indicates that the element is not editable, but is otherwise operable.
         * @see aria-disabled.
         */
        "aria-readonly"?: Booleanish | undefined;
        /**
         * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
         * @see aria-atomic.
         */
        "aria-relevant"?:
            | "additions"
            | "additions removals"
            | "additions text"
            | "all"
            | "removals"
            | "removals additions"
            | "removals text"
            | "text"
            | "text additions"
            | "text removals"
            | undefined;
        /** Indicates that user input is required on the element before a form may be submitted. */
        "aria-required"?: Booleanish | undefined;
        /** Defines a human-readable, author-localized description for the role of an element. */
        "aria-roledescription"?: string | undefined;
        /**
         * Defines the total number of rows in a table, grid, or treegrid.
         * @see aria-rowindex.
         */
        "aria-rowcount"?: number | undefined;
        /**
         * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
         * @see aria-rowcount @see aria-rowspan.
         */
        "aria-rowindex"?: number | undefined;
        /**
         * Defines a human readable text alternative of aria-rowindex.
         * @see aria-colindextext.
         */
        "aria-rowindextext"?: string | undefined;
        /**
         * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-rowindex @see aria-colspan.
         */
        "aria-rowspan"?: number | undefined;
        /**
         * Indicates the current "selected" state of various widgets.
         * @see aria-checked @see aria-pressed.
         */
        "aria-selected"?: Booleanish | undefined;
        /**
         * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-posinset.
         */
        "aria-setsize"?: number | undefined;
        /** Indicates if items in a table or grid are sorted in ascending or descending order. */
        "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
        /** Defines the maximum allowed value for a range widget. */
        "aria-valuemax"?: number | undefined;
        /** Defines the minimum allowed value for a range widget. */
        "aria-valuemin"?: number | undefined;
        /**
         * Defines the current value for a range widget.
         * @see aria-valuetext.
         */
        "aria-valuenow"?: number | undefined;
        /** Defines the human readable text alternative of aria-valuenow for a range widget. */
        "aria-valuetext"?: string | undefined;
    }

    // All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
    type AriaRole =
        | "alert"
        | "alertdialog"
        | "application"
        | "article"
        | "banner"
        | "button"
        | "cell"
        | "checkbox"
        | "columnheader"
        | "combobox"
        | "complementary"
        | "contentinfo"
        | "definition"
        | "dialog"
        | "directory"
        | "document"
        | "feed"
        | "figure"
        | "form"
        | "grid"
        | "gridcell"
        | "group"
        | "heading"
        | "img"
        | "link"
        | "list"
        | "listbox"
        | "listitem"
        | "log"
        | "main"
        | "marquee"
        | "math"
        | "menu"
        | "menubar"
        | "menuitem"
        | "menuitemcheckbox"
        | "menuitemradio"
        | "navigation"
        | "none"
        | "note"
        | "option"
        | "presentation"
        | "progressbar"
        | "radio"
        | "radiogroup"
        | "region"
        | "row"
        | "rowgroup"
        | "rowheader"
        | "scrollbar"
        | "search"
        | "searchbox"
        | "separator"
        | "slider"
        | "spinbutton"
        | "status"
        | "switch"
        | "tab"
        | "table"
        | "tablist"
        | "tabpanel"
        | "term"
        | "textbox"
        | "timer"
        | "toolbar"
        | "tooltip"
        | "tree"
        | "treegrid"
        | "treeitem"
        | (string & {});

    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | readonly string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;

        // Standard HTML Attributes
        accessKey?: string | undefined;
        autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {});
        autoFocus?: boolean | undefined;
        className?: string | undefined;
        contentEditable?: Booleanish | "inherit" | "plaintext-only" | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: Booleanish | undefined;
        enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        nonce?: string | undefined;
        slot?: string | undefined;
        spellCheck?: Booleanish | undefined;
        style?: CSSProperties | undefined;
        tabIndex?: number | undefined;
        title?: string | undefined;
        translate?: "yes" | "no" | undefined;

        // Unknown
        radioGroup?: string | undefined; // <command>, <menuitem>

        // WAI-ARIA
        role?: AriaRole | undefined;

        // RDFa Attributes
        about?: string | undefined;
        content?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        rel?: string | undefined;
        resource?: string | undefined;
        rev?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;

        // Non-standard Attributes
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        color?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "on" | "off" | undefined;

        // Living Standard
        /**
         * Hints at the type of data that might be entered by the user while editing the element or its contents
         * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}
         */
        inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
        /**
         * Specify that a standard HTML element should behave like a defined custom built-in element
         * @see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}
         */
        is?: string | undefined;
        /**
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts}
         */
        exportparts?: string | undefined;
        /**
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part}
         */
        part?: string | undefined;
    }

    /**
     * For internal usage only.
     * Different release channels declare additional types of ReactNode this particular release channel accepts.
     * App or library types should never augment this interface.
     */
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS {}

    interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
        // Standard HTML Attributes
        accept?: string | undefined;
        acceptCharset?: string | undefined;
        action?:
            | string
            | undefined
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        alt?: string | undefined;
        as?: string | undefined;
        async?: boolean | undefined;
        autoComplete?: string | undefined;
        autoPlay?: boolean | undefined;
        capture?: boolean | "user" | "environment" | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        charSet?: string | undefined;
        challenge?: string | undefined;
        checked?: boolean | undefined;
        cite?: string | undefined;
        classID?: string | undefined;
        cols?: number | undefined;
        colSpan?: number | undefined;
        controls?: boolean | undefined;
        coords?: string | undefined;
        crossOrigin?: CrossOrigin;
        data?: string | undefined;
        dateTime?: string | undefined;
        default?: boolean | undefined;
        defer?: boolean | undefined;
        disabled?: boolean | undefined;
        download?: any;
        encType?: string | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | undefined
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        frameBorder?: number | string | undefined;
        headers?: string | undefined;
        height?: number | string | undefined;
        high?: number | undefined;
        href?: string | undefined;
        hrefLang?: string | undefined;
        htmlFor?: string | undefined;
        httpEquiv?: string | undefined;
        integrity?: string | undefined;
        keyParams?: string | undefined;
        keyType?: string | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        list?: string | undefined;
        loop?: boolean | undefined;
        low?: number | undefined;
        manifest?: string | undefined;
        marginHeight?: number | undefined;
        marginWidth?: number | undefined;
        max?: number | string | undefined;
        maxLength?: number | undefined;
        media?: string | undefined;
        mediaGroup?: string | undefined;
        method?: string | undefined;
        min?: number | string | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        muted?: boolean | undefined;
        name?: string | undefined;
        noValidate?: boolean | undefined;
        open?: boolean | undefined;
        optimum?: number | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        preload?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        reversed?: boolean | undefined;
        rows?: number | undefined;
        rowSpan?: number | undefined;
        sandbox?: string | undefined;
        scope?: string | undefined;
        scoped?: boolean | undefined;
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        selected?: boolean | undefined;
        shape?: string | undefined;
        size?: number | undefined;
        sizes?: string | undefined;
        span?: number | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        srcLang?: string | undefined;
        srcSet?: string | undefined;
        start?: number | undefined;
        step?: number | string | undefined;
        summary?: string | undefined;
        target?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        value?: string | readonly string[] | number | undefined;
        width?: number | string | undefined;
        wmode?: string | undefined;
        wrap?: string | undefined;
    }

    type HTMLAttributeReferrerPolicy =
        | ""
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";

    type HTMLAttributeAnchorTarget =
        | "_self"
        | "_blank"
        | "_parent"
        | "_top"
        | (string & {});

    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
        download?: any;
        href?: string | undefined;
        hrefLang?: string | undefined;
        media?: string | undefined;
        ping?: string | undefined;
        target?: HTMLAttributeAnchorTarget | undefined;
        type?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    }

    interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

    interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string | undefined;
        coords?: string | undefined;
        download?: any;
        href?: string | undefined;
        hrefLang?: string | undefined;
        media?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        shape?: string | undefined;
        target?: string | undefined;
    }

    interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
        href?: string | undefined;
        target?: string | undefined;
    }

    interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
    }

    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ]
            | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        name?: string | undefined;
        type?: "submit" | "reset" | "button" | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        width?: number | string | undefined;
    }

    interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number | undefined;
        width?: number | string | undefined;
    }

    interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number | undefined;
    }

    interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | readonly string[] | number | undefined;
    }

    interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean | undefined;
        onToggle?: ReactEventHandler<T> | undefined;
        name?: string | undefined;
    }

    interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
        dateTime?: string | undefined;
    }

    interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
        closedby?: "any" | "closerequest" | "none" | undefined;
        onCancel?: ReactEventHandler<T> | undefined;
        onClose?: ReactEventHandler<T> | undefined;
        open?: boolean | undefined;
    }

    interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        src?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;
    }

    interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        form?: string | undefined;
        name?: string | undefined;
    }

    interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
        acceptCharset?: string | undefined;
        action?:
            | string
            | undefined
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
        autoComplete?: string | undefined;
        encType?: string | undefined;
        method?: string | undefined;
        name?: string | undefined;
        noValidate?: boolean | undefined;
        target?: string | undefined;
    }

    interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
        manifest?: string | undefined;
    }

    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
        allow?: string | undefined;
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        /** @deprecated */
        frameBorder?: number | string | undefined;
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        /** @deprecated */
        marginHeight?: number | undefined;
        /** @deprecated */
        marginWidth?: number | undefined;
        name?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sandbox?: string | undefined;
        /** @deprecated */
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        width?: number | string | undefined;
    }

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string | undefined;
        crossOrigin?: CrossOrigin;
        decoding?: "async" | "auto" | "sync" | undefined;
        fetchPriority?: "high" | "low" | "auto";
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcSet?: string | undefined;
        useMap?: string | undefined;
        width?: number | string | undefined;
    }

    interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
        dateTime?: string | undefined;
    }

    type HTMLInputTypeAttribute =
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week"
        | (string & {});

    type AutoFillAddressKind = "billing" | "shipping";
    type AutoFillBase = "" | "off" | "on";
    type AutoFillContactField =
        | "email"
        | "tel"
        | "tel-area-code"
        | "tel-country-code"
        | "tel-extension"
        | "tel-local"
        | "tel-local-prefix"
        | "tel-local-suffix"
        | "tel-national";
    type AutoFillContactKind = "home" | "mobile" | "work";
    type AutoFillCredentialField = "webauthn";
    type AutoFillNormalField =
        | "additional-name"
        | "address-level1"
        | "address-level2"
        | "address-level3"
        | "address-level4"
        | "address-line1"
        | "address-line2"
        | "address-line3"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "cc-csc"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-family-name"
        | "cc-given-name"
        | "cc-name"
        | "cc-number"
        | "cc-type"
        | "country"
        | "country-name"
        | "current-password"
        | "family-name"
        | "given-name"
        | "honorific-prefix"
        | "honorific-suffix"
        | "name"
        | "new-password"
        | "one-time-code"
        | "organization"
        | "postal-code"
        | "street-address"
        | "transaction-amount"
        | "transaction-currency"
        | "username";
    type OptionalPrefixToken<T extends string> = `${T} ` | "";
    type OptionalPostfixToken<T extends string> = ` ${T}` | "";
    type AutoFillField = AutoFillNormalField | `${OptionalPrefixToken<AutoFillContactKind>}${AutoFillContactField}`;
    type AutoFillSection = `section-${string}`;
    type AutoFill =
        | AutoFillBase
        | `${OptionalPrefixToken<AutoFillSection>}${OptionalPrefixToken<
            AutoFillAddressKind
        >}${AutoFillField}${OptionalPostfixToken<AutoFillCredentialField>}`;
    type HTMLInputAutoCompleteAttribute = AutoFill | (string & {});

    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        accept?: string | undefined;
        alt?: string | undefined;
        autoComplete?: HTMLInputAutoCompleteAttribute | undefined;
        capture?: boolean | "user" | "environment" | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ]
            | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        height?: number | string | undefined;
        list?: string | undefined;
        max?: number | string | undefined;
        maxLength?: number | undefined;
        min?: number | string | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        size?: number | undefined;
        src?: string | undefined;
        step?: number | string | undefined;
        type?: HTMLInputTypeAttribute | undefined;
        value?: string | readonly string[] | number | undefined;
        width?: number | string | undefined;

        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
        challenge?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        keyType?: string | undefined;
        keyParams?: string | undefined;
        name?: string | undefined;
    }

    interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        htmlFor?: string | undefined;
    }

    interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | readonly string[] | number | undefined;
    }

    interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
        as?: string | undefined;
        blocking?: "render" | (string & {}) | undefined;
        crossOrigin?: CrossOrigin;
        fetchPriority?: "high" | "low" | "auto";
        href?: string | undefined;
        hrefLang?: string | undefined;
        integrity?: string | undefined;
        media?: string | undefined;
        imageSrcSet?: string | undefined;
        imageSizes?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sizes?: string | undefined;
        type?: string | undefined;
        charSet?: string | undefined;
    }

    interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
    }

    interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
        type?: string | undefined;
    }

    interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoPlay?: boolean | undefined;
        controls?: boolean | undefined;
        controlsList?: string | undefined;
        crossOrigin?: CrossOrigin;
        loop?: boolean | undefined;
        mediaGroup?: string | undefined;
        muted?: boolean | undefined;
        playsInline?: boolean | undefined;
        preload?: string | undefined;
        src?: string | undefined;
    }

    interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
        charSet?: string | undefined;
        content?: string | undefined;
        httpEquiv?: string | undefined;
        media?: string | undefined;
        name?: string | undefined;
    }

    interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        high?: number | undefined;
        low?: number | undefined;
        max?: number | string | undefined;
        min?: number | string | undefined;
        optimum?: number | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
    }

    interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
        classID?: string | undefined;
        data?: string | undefined;
        form?: string | undefined;
        height?: number | string | undefined;
        name?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        width?: number | string | undefined;
        wmode?: string | undefined;
    }

    interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
        reversed?: boolean | undefined;
        start?: number | undefined;
        type?: "1" | "a" | "A" | "i" | "I" | undefined;
    }

    interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
    }

    interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
        selected?: boolean | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        htmlFor?: string | undefined;
        name?: string | undefined;
    }

    interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
        max?: number | string | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface SlotHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
    }

    interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
        async?: boolean | undefined;
        blocking?: "render" | (string & {}) | undefined;
        /** @deprecated */
        charSet?: string | undefined;
        crossOrigin?: CrossOrigin;
        defer?: boolean | undefined;
        integrity?: string | undefined;
        noModule?: boolean | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        src?: string | undefined;
        type?: string | undefined;
    }

    interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        required?: boolean | undefined;
        size?: number | undefined;
        value?: string | readonly string[] | number | undefined;
        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        media?: string | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcSet?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;
    }

    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        blocking?: "render" | (string & {}) | undefined;
        media?: string | undefined;
        scoped?: boolean | undefined;
        type?: string | undefined;
    }

    interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | undefined;
        bgcolor?: string | undefined;
        border?: number | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        frame?: boolean | undefined;
        rules?: "none" | "groups" | "rows" | "columns" | "all" | undefined;
        summary?: string | undefined;
        width?: number | string | undefined;
    }

    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string | undefined;
        cols?: number | undefined;
        dirName?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        maxLength?: number | undefined;
        minLength?: number | undefined;
        name?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        rows?: number | undefined;
        value?: string | readonly string[] | number | undefined;
        wrap?: string | undefined;

        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char" | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        abbr?: string | undefined;
        height?: number | string | undefined;
        width?: number | string | undefined;
        valign?: "top" | "middle" | "bottom" | "baseline" | undefined;
    }

    interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char" | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        abbr?: string | undefined;
    }

    interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
        dateTime?: string | undefined;
    }

    interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
        default?: boolean | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        src?: string | undefined;
        srcLang?: string | undefined;
    }

    interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
        height?: number | string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        width?: number | string | undefined;
        disablePictureInPicture?: boolean | undefined;
        disableRemotePlayback?: boolean | undefined;

        onResize?: ReactEventHandler<T> | undefined;
        onResizeCapture?: ReactEventHandler<T> | undefined;
    }

    // this list is "complete" in that it contains every SVG attribute
    // that React supports, but the types can be improved.
    // Full list here: https://facebook.github.io/react/docs/dom-elements.html
    //
    // The three broad type categories are (in order of restrictiveness):
    //   - "number | string"
    //   - "string"
    //   - union of string literals
    interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        suppressHydrationWarning?: boolean | undefined;

        // Attributes which also defined in HTMLAttributes
        // See comment in SVGDOMPropertyConfig.js
        className?: string | undefined;
        color?: string | undefined;
        height?: number | string | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        max?: number | string | undefined;
        media?: string | undefined;
        method?: string | undefined;
        min?: number | string | undefined;
        name?: string | undefined;
        style?: CSSProperties | undefined;
        target?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;

        // Other HTML properties supported by SVG elements in browsers
        role?: AriaRole | undefined;
        tabIndex?: number | undefined;
        crossOrigin?: CrossOrigin;

        // SVG Specific attributes
        accentHeight?: number | string | undefined;
        accumulate?: "none" | "sum" | undefined;
        additive?: "replace" | "sum" | undefined;
        alignmentBaseline?:
            | "auto"
            | "baseline"
            | "before-edge"
            | "text-before-edge"
            | "middle"
            | "central"
            | "after-edge"
            | "text-after-edge"
            | "ideographic"
            | "alphabetic"
            | "hanging"
            | "mathematical"
            | "inherit"
            | undefined;
        allowReorder?: "no" | "yes" | undefined;
        alphabetic?: number | string | undefined;
        amplitude?: number | string | undefined;
        arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
        ascent?: number | string | undefined;
        attributeName?: string | undefined;
        attributeType?: string | undefined;
        autoReverse?: Booleanish | undefined;
        azimuth?: number | string | undefined;
        baseFrequency?: number | string | undefined;
        baselineShift?: number | string | undefined;
        baseProfile?: number | string | undefined;
        bbox?: number | string | undefined;
        begin?: number | string | undefined;
        bias?: number | string | undefined;
        by?: number | string | undefined;
        calcMode?: number | string | undefined;
        capHeight?: number | string | undefined;
        clip?: number | string | undefined;
        clipPath?: string | undefined;
        clipPathUnits?: number | string | undefined;
        clipRule?: number | string | undefined;
        colorInterpolation?: number | string | undefined;
        colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined;
        colorProfile?: number | string | undefined;
        colorRendering?: number | string | undefined;
        contentScriptType?: number | string | undefined;
        contentStyleType?: number | string | undefined;
        cursor?: number | string | undefined;
        cx?: number | string | undefined;
        cy?: number | string | undefined;
        d?: string | undefined;
        decelerate?: number | string | undefined;
        descent?: number | string | undefined;
        diffuseConstant?: number | string | undefined;
        direction?: number | string | undefined;
        display?: number | string | undefined;
        divisor?: number | string | undefined;
        dominantBaseline?:
            | "auto"
            | "use-script"
            | "no-change"
            | "reset-size"
            | "ideographic"
            | "alphabetic"
            | "hanging"
            | "mathematical"
            | "central"
            | "middle"
            | "text-after-edge"
            | "text-before-edge"
            | "inherit"
            | undefined;
        dur?: number | string | undefined;
        dx?: number | string | undefined;
        dy?: number | string | undefined;
        edgeMode?: number | string | undefined;
        elevation?: number | string | undefined;
        enableBackground?: number | string | undefined;
        end?: number | string | undefined;
        exponent?: number | string | undefined;
        externalResourcesRequired?: Booleanish | undefined;
        fill?: string | undefined;
        fillOpacity?: number | string | undefined;
        fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
        filter?: string | undefined;
        filterRes?: number | string | undefined;
        filterUnits?: number | string | undefined;
        floodColor?: number | string | undefined;
        floodOpacity?: number | string | undefined;
        focusable?: Booleanish | "auto" | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | string | undefined;
        fontSizeAdjust?: number | string | undefined;
        fontStretch?: number | string | undefined;
        fontStyle?: number | string | undefined;
        fontVariant?: number | string | undefined;
        fontWeight?: number | string | undefined;
        format?: number | string | undefined;
        fr?: number | string | undefined;
        from?: number | string | undefined;
        fx?: number | string | undefined;
        fy?: number | string | undefined;
        g1?: number | string | undefined;
        g2?: number | string | undefined;
        glyphName?: number | string | undefined;
        glyphOrientationHorizontal?: number | string | undefined;
        glyphOrientationVertical?: number | string | undefined;
        glyphRef?: number | string | undefined;
        gradientTransform?: string | undefined;
        gradientUnits?: string | undefined;
        hanging?: number | string | undefined;
        horizAdvX?: number | string | undefined;
        horizOriginX?: number | string | undefined;
        href?: string | undefined;
        ideographic?: number | string | undefined;
        imageRendering?: number | string | undefined;
        in2?: number | string | undefined;
        in?: string | undefined;
        intercept?: number | string | undefined;
        k1?: number | string | undefined;
        k2?: number | string | undefined;
        k3?: number | string | undefined;
        k4?: number | string | undefined;
        k?: number | string | undefined;
        kernelMatrix?: number | string | undefined;
        kernelUnitLength?: number | string | undefined;
        kerning?: number | string | undefined;
        keyPoints?: number | string | undefined;
        keySplines?: number | string | undefined;
        keyTimes?: number | string | undefined;
        lengthAdjust?: number | string | undefined;
        letterSpacing?: number | string | undefined;
        lightingColor?: number | string | undefined;
        limitingConeAngle?: number | string | undefined;
        local?: number | string | undefined;
        markerEnd?: string | undefined;
        markerHeight?: number | string | undefined;
        markerMid?: string | undefined;
        markerStart?: string | undefined;
        markerUnits?: number | string | undefined;
        markerWidth?: number | string | undefined;
        mask?: string | undefined;
        maskContentUnits?: number | string | undefined;
        maskUnits?: number | string | undefined;
        mathematical?: number | string | undefined;
        mode?: number | string | undefined;
        numOctaves?: number | string | undefined;
        offset?: number | string | undefined;
        opacity?: number | string | undefined;
        operator?: number | string | undefined;
        order?: number | string | undefined;
        orient?: number | string | undefined;
        orientation?: number | string | undefined;
        origin?: number | string | undefined;
        overflow?: number | string | undefined;
        overlinePosition?: number | string | undefined;
        overlineThickness?: number | string | undefined;
        paintOrder?: number | string | undefined;
        panose1?: number | string | undefined;
        path?: string | undefined;
        pathLength?: number | string | undefined;
        patternContentUnits?: string | undefined;
        patternTransform?: number | string | undefined;
        patternUnits?: string | undefined;
        pointerEvents?: number | string | undefined;
        points?: string | undefined;
        pointsAtX?: number | string | undefined;
        pointsAtY?: number | string | undefined;
        pointsAtZ?: number | string | undefined;
        preserveAlpha?: Booleanish | undefined;
        preserveAspectRatio?: string | undefined;
        primitiveUnits?: number | string | undefined;
        r?: number | string | undefined;
        radius?: number | string | undefined;
        refX?: number | string | undefined;
        refY?: number | string | undefined;
        renderingIntent?: number | string | undefined;
        repeatCount?: number | string | undefined;
        repeatDur?: number | string | undefined;
        requiredExtensions?: number | string | undefined;
        requiredFeatures?: number | string | undefined;
        restart?: number | string | undefined;
        result?: string | undefined;
        rotate?: number | string | undefined;
        rx?: number | string | undefined;
        ry?: number | string | undefined;
        scale?: number | string | undefined;
        seed?: number | string | undefined;
        shapeRendering?: number | string | undefined;
        slope?: number | string | undefined;
        spacing?: number | string | undefined;
        specularConstant?: number | string | undefined;
        specularExponent?: number | string | undefined;
        speed?: number | string | undefined;
        spreadMethod?: string | undefined;
        startOffset?: number | string | undefined;
        stdDeviation?: number | string | undefined;
        stemh?: number | string | undefined;
        stemv?: number | string | undefined;
        stitchTiles?: number | string | undefined;
        stopColor?: string | undefined;
        stopOpacity?: number | string | undefined;
        strikethroughPosition?: number | string | undefined;
        strikethroughThickness?: number | string | undefined;
        string?: number | string | undefined;
        stroke?: string | undefined;
        strokeDasharray?: string | number | undefined;
        strokeDashoffset?: string | number | undefined;
        strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
        strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
        strokeMiterlimit?: number | string | undefined;
        strokeOpacity?: number | string | undefined;
        strokeWidth?: number | string | undefined;
        surfaceScale?: number | string | undefined;
        systemLanguage?: number | string | undefined;
        tableValues?: number | string | undefined;
        targetX?: number | string | undefined;
        targetY?: number | string | undefined;
        textAnchor?: "start" | "middle" | "end" | "inherit" | undefined;
        textDecoration?: number | string | undefined;
        textLength?: number | string | undefined;
        textRendering?: number | string | undefined;
        to?: number | string | undefined;
        transform?: string | undefined;
        transformOrigin?: string | undefined;
        u1?: number | string | undefined;
        u2?: number | string | undefined;
        underlinePosition?: number | string | undefined;
        underlineThickness?: number | string | undefined;
        unicode?: number | string | undefined;
        unicodeBidi?: number | string | undefined;
        unicodeRange?: number | string | undefined;
        unitsPerEm?: number | string | undefined;
        vAlphabetic?: number | string | undefined;
        values?: string | undefined;
        vectorEffect?: number | string | undefined;
        version?: string | undefined;
        vertAdvY?: number | string | undefined;
        vertOriginX?: number | string | undefined;
        vertOriginY?: number | string | undefined;
        vHanging?: number | string | undefined;
        vIdeographic?: number | string | undefined;
        viewBox?: string | undefined;
        viewTarget?: number | string | undefined;
        visibility?: number | string | undefined;
        vMathematical?: number | string | undefined;
        widths?: number | string | undefined;
        wordSpacing?: number | string | undefined;
        writingMode?: number | string | undefined;
        x1?: number | string | undefined;
        x2?: number | string | undefined;
        x?: number | string | undefined;
        xChannelSelector?: string | undefined;
        xHeight?: number | string | undefined;
        xlinkActuate?: string | undefined;
        xlinkArcrole?: string | undefined;
        xlinkHref?: string | undefined;
        xlinkRole?: string | undefined;
        xlinkShow?: string | undefined;
        xlinkTitle?: string | undefined;
        xlinkType?: string | undefined;
        xmlBase?: string | undefined;
        xmlLang?: string | undefined;
        xmlns?: string | undefined;
        xmlnsXlink?: string | undefined;
        xmlSpace?: string | undefined;
        y1?: number | string | undefined;
        y2?: number | string | undefined;
        y?: number | string | undefined;
        yChannelSelector?: string | undefined;
        z?: number | string | undefined;
        zoomAndPan?: string | undefined;
    }

    interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
        allowFullScreen?: boolean | undefined;
        allowpopups?: boolean | undefined;
        autosize?: boolean | undefined;
        blinkfeatures?: string | undefined;
        disableblinkfeatures?: string | undefined;
        disableguestresize?: boolean | undefined;
        disablewebsecurity?: boolean | undefined;
        guestinstance?: string | undefined;
        httpreferrer?: string | undefined;
        nodeintegration?: boolean | undefined;
        partition?: string | undefined;
        plugins?: boolean | undefined;
        preload?: string | undefined;
        src?: string | undefined;
        useragent?: string | undefined;
        webpreferences?: string | undefined;
    }

    //
    // React.DOM
    // ----------------------------------------------------------------------

    /* deprecated */
    interface ReactHTML {
        a: DetailedHTMLFactory<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
        abbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        address: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        area: DetailedHTMLFactory<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
        article: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        aside: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        audio: DetailedHTMLFactory<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
        b: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        base: DetailedHTMLFactory<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
        bdi: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        bdo: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        big: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        blockquote: DetailedHTMLFactory<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        body: DetailedHTMLFactory<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
        br: DetailedHTMLFactory<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
        button: DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
        canvas: DetailedHTMLFactory<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
        caption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        center: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        cite: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        code: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        col: DetailedHTMLFactory<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        colgroup: DetailedHTMLFactory<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        data: DetailedHTMLFactory<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
        datalist: DetailedHTMLFactory<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
        dd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        del: DetailedHTMLFactory<DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
        details: DetailedHTMLFactory<DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
        dfn: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        dialog: DetailedHTMLFactory<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
        div: DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        dl: DetailedHTMLFactory<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
        dt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        em: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        embed: DetailedHTMLFactory<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
        fieldset: DetailedHTMLFactory<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
        figcaption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        figure: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        footer: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        form: DetailedHTMLFactory<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
        h1: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h2: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h3: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h4: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h5: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h6: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        head: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLHeadElement>;
        header: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        hgroup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        hr: DetailedHTMLFactory<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
        html: DetailedHTMLFactory<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
        i: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        iframe: DetailedHTMLFactory<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
        img: DetailedHTMLFactory<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
        input: DetailedHTMLFactory<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
        ins: DetailedHTMLFactory<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
        kbd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        keygen: DetailedHTMLFactory<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
        label: DetailedHTMLFactory<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        legend: DetailedHTMLFactory<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
        li: DetailedHTMLFactory<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
        link: DetailedHTMLFactory<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
        main: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        map: DetailedHTMLFactory<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
        mark: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        menu: DetailedHTMLFactory<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
        menuitem: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        meta: DetailedHTMLFactory<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
        meter: DetailedHTMLFactory<MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
        nav: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        noscript: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        object: DetailedHTMLFactory<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
        ol: DetailedHTMLFactory<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
        optgroup: DetailedHTMLFactory<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
        option: DetailedHTMLFactory<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
        output: DetailedHTMLFactory<OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
        p: DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
        param: DetailedHTMLFactory<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
        picture: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        pre: DetailedHTMLFactory<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
        progress: DetailedHTMLFactory<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
        q: DetailedHTMLFactory<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        rp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        rt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        ruby: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        s: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        samp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        search: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        slot: DetailedHTMLFactory<SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
        script: DetailedHTMLFactory<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
        section: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        select: DetailedHTMLFactory<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
        small: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        source: DetailedHTMLFactory<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
        span: DetailedHTMLFactory<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
        strong: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        style: DetailedHTMLFactory<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
        sub: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        summary: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        sup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        table: DetailedHTMLFactory<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
        template: DetailedHTMLFactory<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
        tbody: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        td: DetailedHTMLFactory<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
        textarea: DetailedHTMLFactory<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
        tfoot: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        th: DetailedHTMLFactory<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
        thead: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        time: DetailedHTMLFactory<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
        title: DetailedHTMLFactory<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
        tr: DetailedHTMLFactory<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
        track: DetailedHTMLFactory<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
        u: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        ul: DetailedHTMLFactory<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
        "var": DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        video: DetailedHTMLFactory<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
        wbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        webview: DetailedHTMLFactory<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
    }

    /* deprecated */
    interface ReactSVG {
        animate: SVGFactory;
        circle: SVGFactory;
        clipPath: SVGFactory;
        defs: SVGFactory;
        desc: SVGFactory;
        ellipse: SVGFactory;
        feBlend: SVGFactory;
        feColorMatrix: SVGFactory;
        feComponentTransfer: SVGFactory;
        feComposite: SVGFactory;
        feConvolveMatrix: SVGFactory;
        feDiffuseLighting: SVGFactory;
        feDisplacementMap: SVGFactory;
        feDistantLight: SVGFactory;
        feDropShadow: SVGFactory;
        feFlood: SVGFactory;
        feFuncA: SVGFactory;
        feFuncB: SVGFactory;
        feFuncG: SVGFactory;
        feFuncR: SVGFactory;
        feGaussianBlur: SVGFactory;
        feImage: SVGFactory;
        feMerge: SVGFactory;
        feMergeNode: SVGFactory;
        feMorphology: SVGFactory;
        feOffset: SVGFactory;
        fePointLight: SVGFactory;
        feSpecularLighting: SVGFactory;
        feSpotLight: SVGFactory;
        feTile: SVGFactory;
        feTurbulence: SVGFactory;
        filter: SVGFactory;
        foreignObject: SVGFactory;
        g: SVGFactory;
        image: SVGFactory;
        line: SVGFactory;
        linearGradient: SVGFactory;
        marker: SVGFactory;
        mask: SVGFactory;
        metadata: SVGFactory;
        path: SVGFactory;
        pattern: SVGFactory;
        polygon: SVGFactory;
        polyline: SVGFactory;
        radialGradient: SVGFactory;
        rect: SVGFactory;
        stop: SVGFactory;
        svg: SVGFactory;
        switch: SVGFactory;
        symbol: SVGFactory;
        text: SVGFactory;
        textPath: SVGFactory;
        tspan: SVGFactory;
        use: SVGFactory;
        view: SVGFactory;
    }

    /* deprecated */
    interface ReactDOM extends ReactHTML, ReactSVG {}

    //
    // React.PropTypes
    // ----------------------------------------------------------------------

    /**
     * @deprecated Use `Validator` from the ´prop-types` instead.
     */
    type Validator<T> = undefined<T>;

    /**
     * @deprecated Use `Requireable` from the ´prop-types` instead.
     */
    type Requireable<T> = undefined<T>;

    /**
     * @deprecated Use `ValidationMap` from the ´prop-types` instead.
     */
    type ValidationMap<T> = undefined<T>;

    /**
     * @deprecated Use `WeakValidationMap` from the ´prop-types` instead.
     */
    type WeakValidationMap<T> = {
        [K in keyof T]?: null extends T[K] ? Validator<T[K] | null | undefined>
            : undefined extends T[K] ? Validator<T[K] | null | undefined>
            : Validator<T[K]>;
    };

    /**
     * @deprecated Use `PropTypes.*` where `PropTypes` comes from `import * as PropTypes from 'prop-types'` instead.
     */
    interface ReactPropTypes {
        any: typeof undefined;
        array: typeof undefined;
        bool: typeof undefined;
        func: typeof undefined;
        number: typeof undefined;
        object: typeof undefined;
        string: typeof undefined;
        node: typeof undefined;
        element: typeof undefined;
        instanceOf: typeof undefined;
        oneOf: typeof undefined;
        oneOfType: typeof undefined;
        arrayOf: typeof undefined;
        objectOf: typeof undefined;
        shape: typeof undefined;
        exact: typeof undefined;
    }

    //
    // React.Children
    // ----------------------------------------------------------------------

    /**
     * @deprecated - Use `typeof React.Children` instead.
     */
    // Sync with type of `const Children`.
    interface ReactChildren {
        map<T, C>(
            children: C | readonly C[],
            fn: (child: C, index: number) => T,
        ): C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
        forEach<C>(children: C | readonly C[], fn: (child: C, index: number) => void): void;
        count(children: any): number;
        only<C>(children: C): C extends any[] ? never : C;
        toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
    }

    //
    // Browser Interfaces
    // https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts
    // ----------------------------------------------------------------------

    interface AbstractView {
        styleMedia: StyleMedia;
        document: Document;
    }

    interface Touch {
        identifier: number;
        target: EventTarget;
        screenX: number;
        screenY: number;
        clientX: number;
        clientY: number;
        pageX: number;
        pageY: number;
    }

    interface TouchList {
        [index: number]: Touch;
        length: number;
        item(index: number): Touch;
        identifiedTouch(identifier: number): Touch;
    }

    //
    // Error Interfaces
    // ----------------------------------------------------------------------
    interface ErrorInfo {
        /**
         * Captures which component contained the exception, and its ancestors.
         */
        componentStack?: string | null;
        digest?: string | null;
    }

    // Keep in sync with JSX namespace in ./jsx-runtime.d.ts and ./jsx-dev-runtime.d.ts
    namespace JSX {
        type ElementType = GlobalJSXElementType;
        interface Element extends GlobalJSXElement {}
        interface ElementClass extends GlobalJSXElementClass {}
        interface ElementAttributesProperty extends GlobalJSXElementAttributesProperty {}
        interface ElementChildrenAttribute extends GlobalJSXElementChildrenAttribute {}

        type LibraryManagedAttributes<C, P> = GlobalJSXLibraryManagedAttributes<C, P>;

        interface IntrinsicAttributes extends GlobalJSXIntrinsicAttributes {}
        interface IntrinsicClassAttributes<T> extends GlobalJSXIntrinsicClassAttributes<T> {}
        interface IntrinsicElements extends GlobalJSXIntrinsicElements {}
    }
}

// naked 'any' type in a conditional type will short circuit and union both the then/else branches
// so boolean is only resolved for T = any
type IsExactlyAny<T> = boolean extends (T extends never ? true : false) ? true : false;

type ExactlyAnyPropertyKeys<T> = { [K in keyof T]: IsExactlyAny<T[K]> extends true ? K : never }[keyof T];
type NotExactlyAnyPropertyKeys<T> = Exclude<keyof T, ExactlyAnyPropertyKeys<T>>;

// Try to resolve ill-defined props like for JS users: props can be any, or sometimes objects with properties of type any
type MergePropTypes<P, T> =
    // Distribute over P in case it is a union type
    P extends any
        // If props is type any, use propTypes definitions
        ? IsExactlyAny<P> extends true ? T
            // If declared props have indexed properties, ignore inferred props entirely as keyof gets widened
        : string extends keyof P ? P
            // Prefer declared types which are not exactly any
        :
            & Pick<P, NotExactlyAnyPropertyKeys<P>>
            // For props which are exactly any, use the type inferred from propTypes if present
            & Pick<T, Exclude<keyof T, NotExactlyAnyPropertyKeys<P>>>
            // Keep leftover props not specified in propTypes
            & Pick<P, Exclude<keyof P, keyof T>>
        : never;

type InexactPartial<T> = { [K in keyof T]?: T[K] | undefined };

// Any prop that has a default prop becomes optional, but its type is unchanged
// Undeclared default props are augmented into the resulting allowable attributes
// If declared props have indexed properties, ignore default props entirely as keyof gets widened
// Wrap in an outer-level conditional type to allow distribution over props that are unions
type Defaultize<P, D> = P extends any ? string extends keyof P ? P
    :
        & Pick<P, Exclude<keyof P, keyof D>>
        & InexactPartial<Pick<P, Extract<keyof P, keyof D>>>
        & InexactPartial<Pick<D, Exclude<keyof D, keyof P>>>
    : never;

type ReactManagedAttributes<C, P> = C extends { propTypes: infer T; defaultProps: infer D }
    ? Defaultize<MergePropTypes<P, undefined<T>>, D>
    : C extends { propTypes: infer T } ? MergePropTypes<P, undefined<T>>
    : C extends { defaultProps: infer D } ? Defaultize<P, D>
    : P;

declare global {
    /**
     * @deprecated Use `React.JSX` instead of the global `JSX` namespace.
     */
    namespace JSX {
        // We don't just alias React.ElementType because React.ElementType
        // historically does more than we need it to.
        // E.g. it also contains .propTypes and so TS also verifies the declared
        // props type does match the declared .propTypes.
        // But if libraries declared their .propTypes but not props type,
        // or they mismatch, you won't be able to use the class component
        // as a JSX.ElementType.
        // We could fix this everywhere but we're ultimately not interested in
        // .propTypes assignability so we might as well drop it entirely here to
        //  reduce the work of the type-checker.
        // TODO: Check impact of making React.ElementType<P = any> = React.JSXElementConstructor<P>
        type ElementType = string | React.JSXElementConstructor<any>;
        interface Element extends React.ReactElement<any, any> {}
        interface ElementClass extends React.Component<any> {
            render(): React.ReactNode;
        }
        interface ElementAttributesProperty {
            props: {};
        }
        interface ElementChildrenAttribute {
            children: {};
        }

        // We can't recurse forever because `type` can't be self-referential;
        // let's assume it's reasonable to do a single React.lazy() around a single React.memo() / vice-versa
        type LibraryManagedAttributes<C, P> = C extends
            React.MemoExoticComponent<infer T> | React.LazyExoticComponent<infer T>
            ? T extends React.MemoExoticComponent<infer U> | React.LazyExoticComponent<infer U>
                ? ReactManagedAttributes<U, P>
            : ReactManagedAttributes<T, P>
            : ReactManagedAttributes<C, P>;

        interface IntrinsicAttributes extends React.Attributes {}
        interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}

        interface IntrinsicElements {
            // HTML
            a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            area: React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            base: React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            big: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            body: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            caption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            col: React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            colgroup: React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            data: React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
            datalist: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            del: React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
            details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
            dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            dialog: React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
            div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            dl: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            embed: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            fieldset: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            head: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            hgroup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            ins: React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            keygen: React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
            label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            legend: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            map: React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            menu: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
            menuitem: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            meter: React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
            nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            noindex: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            noscript: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            object: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            ol: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            optgroup: React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            output: React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
            p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            param: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            picture: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            progress: React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            q: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            search: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            slot: React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
            script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            small: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            summary: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            template: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
            tbody: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            tfoot: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            thead: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            time: React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
            title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            tr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            track: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            "var": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            webview: React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;

            // SVG
            svg: React.SVGProps<SVGSVGElement>;

            animate: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
            animateMotion: React.SVGProps<SVGElement>;
            animateTransform: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
            circle: React.SVGProps<SVGCircleElement>;
            clipPath: React.SVGProps<SVGClipPathElement>;
            defs: React.SVGProps<SVGDefsElement>;
            desc: React.SVGProps<SVGDescElement>;
            ellipse: React.SVGProps<SVGEllipseElement>;
            feBlend: React.SVGProps<SVGFEBlendElement>;
            feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
            feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
            feComposite: React.SVGProps<SVGFECompositeElement>;
            feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
            feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
            feDistantLight: React.SVGProps<SVGFEDistantLightElement>;
            feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
            feFlood: React.SVGProps<SVGFEFloodElement>;
            feFuncA: React.SVGProps<SVGFEFuncAElement>;
            feFuncB: React.SVGProps<SVGFEFuncBElement>;
            feFuncG: React.SVGProps<SVGFEFuncGElement>;
            feFuncR: React.SVGProps<SVGFEFuncRElement>;
            feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
            feImage: React.SVGProps<SVGFEImageElement>;
            feMerge: React.SVGProps<SVGFEMergeElement>;
            feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
            feMorphology: React.SVGProps<SVGFEMorphologyElement>;
            feOffset: React.SVGProps<SVGFEOffsetElement>;
            fePointLight: React.SVGProps<SVGFEPointLightElement>;
            feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
            feSpotLight: React.SVGProps<SVGFESpotLightElement>;
            feTile: React.SVGProps<SVGFETileElement>;
            feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
            filter: React.SVGProps<SVGFilterElement>;
            foreignObject: React.SVGProps<SVGForeignObjectElement>;
            g: React.SVGProps<SVGGElement>;
            image: React.SVGProps<SVGImageElement>;
            line: React.SVGLineElementAttributes<SVGLineElement>;
            linearGradient: React.SVGProps<SVGLinearGradientElement>;
            marker: React.SVGProps<SVGMarkerElement>;
            mask: React.SVGProps<SVGMaskElement>;
            metadata: React.SVGProps<SVGMetadataElement>;
            mpath: React.SVGProps<SVGElement>;
            path: React.SVGProps<SVGPathElement>;
            pattern: React.SVGProps<SVGPatternElement>;
            polygon: React.SVGProps<SVGPolygonElement>;
            polyline: React.SVGProps<SVGPolylineElement>;
            radialGradient: React.SVGProps<SVGRadialGradientElement>;
            rect: React.SVGProps<SVGRectElement>;
            set: React.SVGProps<SVGSetElement>;
            stop: React.SVGProps<SVGStopElement>;
            switch: React.SVGProps<SVGSwitchElement>;
            symbol: React.SVGProps<SVGSymbolElement>;
            text: React.SVGTextElementAttributes<SVGTextElement>;
            textPath: React.SVGProps<SVGTextPathElement>;
            tspan: React.SVGProps<SVGTSpanElement>;
            use: React.SVGProps<SVGUseElement>;
            view: React.SVGProps<SVGViewElement>;
        }
    }
}

// React.JSX needs to point to global.JSX to keep global module augmentations intact.
// But we can't access global.JSX so we need to create these aliases instead.
// Once the global JSX namespace will be removed we replace React.JSX with the contents of global.JSX
type GlobalJSXElementType = JSX.ElementType;
interface GlobalJSXElement extends JSX.Element {}
interface GlobalJSXElementClass extends JSX.ElementClass {}
interface GlobalJSXElementAttributesProperty extends JSX.ElementAttributesProperty {}
interface GlobalJSXElementChildrenAttribute extends JSX.ElementChildrenAttribute {}

type GlobalJSXLibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<C, P>;

interface GlobalJSXIntrinsicAttributes extends JSX.IntrinsicAttributes {}
interface GlobalJSXIntrinsicClassAttributes<T> extends JSX.IntrinsicClassAttributes<T> {}

interface GlobalJSXIntrinsicElements extends JSX.IntrinsicElements {}

type ZestVariant = "standard" | "success" | "danger";
type ZestSize = "sm" | "md" | "lg";
/**
 * Visual appearance of the button
 */
interface VisualOptions {
    variant?: ZestVariant;
    size?: ZestSize;
    fullWidth?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
}
/**
 * Behavior during async operations
 */
interface BusyOptions {
    handleInternally?: boolean;
    preventRageClick?: boolean;
    minBusyDurationMs?: number;
}
/**
 * Behavior after a successful or failed click
 */
interface SuccessOptions {
    showCheckmark?: boolean;
    showFailIcon?: boolean;
    autoResetAfterMs?: number;
}
interface ConfirmOptions {
    displayLabel: string;
    timeoutSecs: number;
}
/**
 * All supported props
 */
interface ZestButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    visualOptions?: VisualOptions;
    busyOptions?: BusyOptions;
    successOptions?: SuccessOptions;
    confirmOptions?: ConfirmOptions;
    isDefault?: boolean;
}
declare const ZestButton: React.FC<ZestButtonProps>;

export { ZestButton as default };
export type { ZestButtonProps, ZestSize, ZestVariant };
