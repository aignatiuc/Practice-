module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always",
      },
    ],
  },

  plugins: ["vue"],

  rules: {
    "vue/multiline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
    "space-before-function-paren": 1,
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],

  extends: ["eslint:recommended", "plugin:vue/recommended"],
};
