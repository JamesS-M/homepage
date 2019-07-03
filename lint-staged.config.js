/* eslint-env node */

module.exports = {
  "jsconfig.json": [
    "git reset HEAD",
    "git checkout --"
  ],
  "**/*.js": ["eslint --fix", "git add"],

  "app/styles/**/*.{scss,css}": ["stylelint --fix", "git add"],

  "app/templates/**/*.hbs": "ember-template-lint"
};