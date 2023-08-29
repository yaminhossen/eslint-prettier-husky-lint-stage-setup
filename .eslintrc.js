module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs,jsx,}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // suppress errors for missing 'import React' in files
   "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "quotes": [2, "double", { "avoidEscape": true }],
   "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx",".css"] }], //should add ".ts" if typescript project
  },
  plugins: ["react"],
};
