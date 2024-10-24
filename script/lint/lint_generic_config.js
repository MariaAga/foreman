const createVendorModulesAliases = require('./createVendorModulesAliases');

const foremanVendorRelative = './node_modules/@theforeman/vendor-core/';

const packageJsonDirectories = ['./', foremanVendorRelative];

module.exports = {
  plugins: [
    'patternfly-react',
    'promise',
    'jquery',
    'react-hooks',
    // '@foreman/custom',
  ],
  extends: ['plugin:patternfly-react/recommended', 'plugin:jquery/deprecated'],
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-alias')]: {
        map: createVendorModulesAliases().map(({ original, replacement }) => [
          original,
          replacement,
        ]),
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'promise/prefer-await-to-then': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['foremanReact/.*'],
      },
    ],
    'import/extensions': [
      'error',
      {
        ignore: ['foremanReact/.*'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: packageJsonDirectories,
      },
    ],
    // '@foreman/custom/require-ouiaid': 'error', TODO: uncomment when the plugins are ready
  },
};
