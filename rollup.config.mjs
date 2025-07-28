import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import terser from '@rollup/plugin-terser';
import { readFileSync } from "fs";

const packageJson = JSON.parse(readFileSync("./package.json", "utf-8"));

export default [
  // Main build configuration
  {
    input: "src/index.ts", 
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        skip: ["react", "react-dom"], // skip these dependencies to avoid bundling them
      }), // allow importing from node_modules
      commonjs(), // convert CommonJS to ES6
      terser({
        format: {
          comments: false, // remove comments
        },
        compress: {
          drop_console: true,  // remove console logs
        },
      }), // minify the output
      typescript({
        tsconfig: "./tsconfig.json", 
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"], // exclude test files
        declaration: false, // disable declaration files generation in this step
      }),// convert TypeScript to JavaScript
      postcss({ extensions: [".css"], inject: true, extract: false }), // handle CSS imports
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],  // ignore these dependencies in the bundle (reduce bundle size)
  },
  // build file index.d.ts
  // autocomplete for TypeScript users
  // cue this library
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()], // remove .d.ts files from the bundle and remove imports not essential for the library 
    external: [/\.css$/], // ignore CSS files in the type definitions
  },
];