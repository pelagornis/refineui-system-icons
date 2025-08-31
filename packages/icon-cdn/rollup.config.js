import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "IconCDN",
      sourcemap: true,
    },
  ],
  plugins: [
    json(),
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.rollup.json",
      useTsconfigDeclarationDir: true,
    }),
  ],
};
