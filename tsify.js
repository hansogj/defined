var browserify = require("browserify");
var tsify = require("tsify");


browserify()
  .add("./src/polyfill.ts")
  .plugin("tsify", {project:"tsconfig.bundle.json"})
//  .plugin("tsify", config)
  .bundle()
  .pipe(process.stdout);
