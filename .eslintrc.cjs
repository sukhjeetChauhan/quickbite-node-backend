// .eslintrc.cjs
module.exports = {
  root: true, // Make sure ESLint doesn't look for configs outside this project
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json', // Required for rules that need type information
  },
  env: {
    node: true, // Enables Node.js global variables and Node.js scoping.
    es2022: true, // Adds all ECMAScript 2022 globals and automatically sets the ecmaVersion parser option to 13.
  },
  plugins: [
    '@typescript-eslint', // Enables ESLint to use TypeScript-specific rules
    'prettier', // Enables eslint-plugin-prettier
  ],
  extends: [
    'eslint:recommended', // ESLint's recommended rules
    'plugin:@typescript-eslint/recommended', // TypeScript ESLint recommended rules
    'plugin:prettier/recommended', // Disables conflicting ESLint rules and enables eslint-plugin-prettier
  ],
  rules: {
    // You can add or override specific rules here.
    // Example: enforce single quotes for string literals (Prettier usually handles this)
    // 'prettier/prettier': ['error', { singleQuote: true, semi: true }],
    'no-unused-vars': 'off', // Turn off base ESLint rule
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Use TS rule, warn for unused vars but allow prefixed with _
    '@typescript-eslint/no-explicit-any': 'warn', // Warn about usage of 'any'
  },
  ignorePatterns: [
    'node_modules/',
    'dist/', // Ignore compiled output
    'build/', // If you have another build directory
  ],
}
