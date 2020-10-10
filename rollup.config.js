import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

const isProduction = process.env.APP_ENV === "production";

const rollupConfig = {
  input: "./src/index.js",
  output: {
    file: "dist/wkValidator.js",
    format: "umd",
    name: "WkValidator",
  },
  plugins: [
    nodeResolve(),
    babel({
      exclude: "**/node_modules/**",
    }),
    commonjs(),
  ],
};

if (isProduction) {
  rollupConfig.output.file = "lib/wk_validator.min.js";
  rollupConfig.plugins.push(uglify());
} else {
  rollupConfig.plugins.push(livereload());
  rollupConfig.plugins.push(
    serve({
      open: true,
      port: 3333,
      openPage: "/public/index.html",
      contentBase: "./",
    })
  );
}

export default rollupConfig;
