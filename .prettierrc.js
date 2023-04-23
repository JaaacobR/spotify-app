module.exports = {
  bracketSameLine: true,
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  importOrder: [
    '^(react|react-native)$',
    '<THIRD_PARTY_MODULES>',
    '^@core/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
};
