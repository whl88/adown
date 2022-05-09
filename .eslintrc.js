module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    __static: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': ['error', 2],
    'prefer-const': 2,
    'array-bracket-spacing': 2,
    'brace-style': 2,
    'comma-spacing': 2,
    'computed-property-spacing': 2,
    'keyword-spacing': 2,
    'space-in-parens': 2,
    'spaced-comment': 2,
    'eqeqeq': 1,
    'quotes': [2, 'single'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 3,
      },
      'multiline': {
        'max': 3,
      },
    }],
  },
}