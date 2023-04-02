module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'react-app',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
    '.imports.eslintrc.js',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'eslint-plugin-import', 'eslint-plugin-import-helpers'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
