# defined
Cheks if properties or variables are defined


```bash
npm i array.defined
```

## Usage

```javscript

// into typings.d.ts
/// <reference path="../node_modules/array.defined/dist/types/polyfill.d.ts" />
/// <reference path="../node_modules/array.defined/dist/types/defined.d.ts" />

// include polyfill to you project or expose it to global

[1,2, null, undefined].defined() // [1,2]

defined(null) // false

defined(undefined) // false

definedList([1,2]) // [1,2]
definedList([undefined, null]) // []
```

## Publish

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease]
git push --follow-tags
npm publish
```
