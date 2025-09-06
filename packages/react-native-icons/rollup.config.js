import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.tsx",
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
      name: "RefineUIIcons",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "react-native": "ReactNative",
      },
      sourcemap: true,
    },
  ],
  external: ["react", "react-native"],
  plugins: [
    json(),
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true,
    }),
  ],
};
