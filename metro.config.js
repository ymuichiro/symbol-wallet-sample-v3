// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
config.resolver.extraNodeModules = {
  crypto: require.resolve("react-native-expo-crypto"),
  stream: require.resolve("readable-stream"),
  buffer: require.resolve("buffer"),
  events: require.resolve("events"),
  path: require.resolve("path-browserify"),
  fs: require.resolve("react-native-level-fs"),
  "symbol-crypto-wasm-node": require.resolve(
    "symbol-crypto-wasm-web/symbol_crypto_wasm.js"
  ),
};

module.exports = config;
