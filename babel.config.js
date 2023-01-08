//react-native-dotenv -> bunlding the env, so this can be used when app is built

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
      [
        "module:react-native-dotenv",
        {
          moduleName:"@env",
          path:".env"
        }
      ]
    ]
  };
};
