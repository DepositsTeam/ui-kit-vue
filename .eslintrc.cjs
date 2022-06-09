/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-prettier", "plugin:storybook/recommended"],
  env: {
    "vue/setup-compiler-macros": true
  },
  overrides: [{
    files: ["**/__tests__/*.spec.{js,ts,jsx,tsx}", "cypress/integration/**.spec.{js,ts,jsx,tsx}"],
    extends: ["plugin:cypress/recommended"]
  }]
};