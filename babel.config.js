module.exports = function (api) {
  api.cache(true);
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          utils: './src/utils/',
          appRedux: './src/appRedux/',
          helpers: './src/helpers/',
          hooks: './src/hooks/',
          assets: './src/assets/',
          screens: './src/screens/',
        },
      },
    ],
  ];
  return {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      production: {
        plugins: plugins.concat('transform-remove-console'),
      },
      development: {
        plugins: plugins,
      },
    },
  };
};
