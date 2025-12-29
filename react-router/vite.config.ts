import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import babel from "vite-plugin-babel";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        /* Without sourceMaps: true, the memoization will show up in the sourcemaps as well. */
        // sourceMaps: true,
        presets: ["@babel/preset-typescript"],
        plugins: [["babel-plugin-react-compiler", {}]],
      },
    }),
  ],
});
