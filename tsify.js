var browserify = require("browserify");
var tsify = require("tsify");

browserify()
  .add("./src/polyfill.ts")
  .plugin("tsify", {project:"tsconfig.json"})
  .bundle()
  .pipe(process.stdout);
