module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': [
      ('off'),
      { target: 'single' },
    ],

  },
};
