# How this library differs from the house standard

These are notes, not tasks. DevTeam never changes your project because of this list, and none of it blocks a run. Fix what you want, when you want; then run `devteam adopt refresh`.

## 1. package.json does not say whether importing the library has side effects

Bundlers keep the whole library in an app unless it is marked free of side effects, so applications get bigger than they need to be.

To fix: Add "sideEffects": false (or a list of the files that do have side effects, such as CSS).

## 2. Nothing checks the package before it is published (attw and publint)

A library can build and pass its tests and still be broken for the people who install it (wrong types, missing files, a bad exports map).

To fix: Install @arethetypeswrong/cli and publint as dev dependencies and add a script: "validate-package": "attw --pack . && publint"

## 3. Nothing builds the library automatically before it is published

Publishing with an old or missing dist/ ships the wrong code.

To fix: Add a script: "prepublishOnly": "npm run build" (and, if you want, the tests and package checks too).

## 4. The build does not add "use client" to the bundle

Next.js apps using the App Router fail to import components that use state or effects unless the bundle starts with "use client".

To fix: Add banner: '"use client";' to the rollup output options.

