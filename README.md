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


import {defined, DefinedList} from 'array.defined';
import  'array.defined/lib/polyfill';


[1,2, null, undefined].defined() // => [1,2]

defined(null) // => false

defined(undefined) // => false

definedList([1,2]) // => [1,2]
definedList([undefined, null]) // => []



// filter first

[1,2,3].first()  // => [1]

// filter last

[1,2,3].last()  // => [3]


// support for immutable lists

const list: DefinedList<any>  = List([1, 2, 3, 0, 5, undefined, 6, false, true])  as DefinedList<any>

const definedOnly = list.defined().toList(); // => List [1,2,3,0,5,6,true]
 
```


Does allso support ESM import

## Publish

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease]
git push --follow-tags
npm publish
```
