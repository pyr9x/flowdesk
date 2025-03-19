import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config} */
export default {
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      languageOptions: {
        globals: globals.browser,
      },
      rules: {
        // Disable base "no-unused-vars" rule as it conflicts with TypeScript's version
        "no-unused-vars": "off",
        // Enable TypeScript's "no-unused-vars" rule
        "@typescript-eslint/no-unused-vars": "error",
      },
    },
  ],
  extends: [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
  ],
};
