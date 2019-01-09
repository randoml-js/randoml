module.exports = {
  parser: 'typescript-eslint-parser',
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  env: {
    browser: true
  },
  settings: {
    react: {
      version: require('./package.json').devDependencies.react
    }
  }
};
