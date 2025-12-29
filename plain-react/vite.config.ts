import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactSwc from "@vitejs/plugin-react-swc";
import babel from "vite-plugin-babel";

/* Default setup (React Plugin with embedded React Compiler plugin passed in). 
 * This preserves original source code maps.
 */
const defaultConfig = defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
});

/* React SWC plugin + React Compiler. This DOES NOT preserve original source code maps.
 * Note the addition of the filter for js/ts/jsx/tsx files -- without it, the compiler doesn't run.
 * Additionally, results in processing the whole React Client package within React Compiler,
 * possibly impacting performance at dev/build time.
 */
const swcWithVitePluginCompiler = defineConfig({
  plugins: [
    reactSwc(),
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"],
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
})

/* Default React plugin + React Compiler. This DOES preserve original source code maps.
 * Note the addition of the filter for js/ts/jsx/tsx files -- without it, the compiler doesn't run.
 * Additionally, results in processing the whole React Client package within React Compiler,
 * possibly impacting performance at dev/build time.
 */
const defaultWithVitePluginCompiler = defineConfig({
  plugins: [
    react(),
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"],
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
})

export default defaultWithVitePluginCompiler;