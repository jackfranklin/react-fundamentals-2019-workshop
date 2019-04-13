module.exports = {
  env: {
    browser: true,
  },
  plugins: ['react-hooks', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },

  extends: ['unobtrusive', 'unobtrusive/react', 'prettier'],

  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
