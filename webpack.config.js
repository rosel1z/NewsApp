// webpack.config.js
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // чтобы ассеты искались по /NewsApp/
  config.output.publicPath = '/NewsApp/';
  return config;
};