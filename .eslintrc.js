module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 'off',
    'linebreak-style': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': [0],
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 0,
  },
};
