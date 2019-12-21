const OFF = 0, WARN = 1, ERROR = 2

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  parser: "babel-eslint",
  rules: {
    "react/jsx-props-no-spreading": OFF,
    "react/require-default-props": OFF,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
}
