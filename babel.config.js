module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@survivor': './src/survivor',
          '@store': './src/store',
          '@mocks': './__mocks__',
          '@test': './test',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
