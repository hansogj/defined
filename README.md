# defined
Cheks if properties or variables are defined


```bash
$>  npm i array.defined
```

## Usage

```javscript

// into typings.d.ts
    "typeRoots": [
     // ...
      "node_modules/array.defined"
    ]


// import defined or polyfill into your src


import {defined} from 'array.defined';
import  'array.defined/lib/polyfill';


[1,2, null, undefined].defined() // [1,2]

defined(null) // false

defined(undefined) // false

definedList([1,2]) // [1,2]
definedList([undefined, null]) // []



// filter first

[1,2,3].first()  //  [1]
```


Does allso support ESM import

## Publish

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease]
git push --follow-tags
npm publish
```
