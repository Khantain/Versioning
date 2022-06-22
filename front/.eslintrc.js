module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-typescript-base',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    files: ['*.ts', '*.tsx'],
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './front/tsconfig.app.json'
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'arrow-parens': { 'requireForBlockBody': true },
    indent: [
      'error',
      2,
    ],
    quotes: [
      'error',
      'single',
    ],
    'linebreak-style': [
      'error',
      'windows',
    ],
    semi: [
      'error',
      'always',
    ],
  },
};
