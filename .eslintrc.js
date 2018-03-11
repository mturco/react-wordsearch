module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // enforce .js extension
  },
};
