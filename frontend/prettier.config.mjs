// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  semi: false,
  trailingComma: "none",
  vueIndentScriptAndStyle: true,
  singleAttributePerLine: true,
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./assets/css/main.css"
}

export default config
