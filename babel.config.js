module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Outros plugins que você já está usando
      // ...

      // Adicione o plugin react-native-reanimated/plugin
      'react-native-reanimated/plugin',
    ],
  };
};
