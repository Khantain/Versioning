module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@angular-eslint/recommended",
    // AirBnB Styleguide rules
    "airbnb-typescript/base",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    files: ['*.ts', '*.tsx'],
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './front/tsconfig.app.json'
  },
  ignorePatterns: ["*.spec.ts"],
  plugins: [
    "import",
    '@typescript-eslint'
  ],
  rules: {
    'import/prefer-default-export': 'off',
    "@typescript-eslint/unbound-method": 'off',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'linebreak-style': ['error', 'windows'],
    semi: ['error', 'always'],
  },
};
