const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "daily-color.js",
    library: "getDailyColor",
    libraryTarget: "umd",
  },
  mode: "production",
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
    },
  },
};
