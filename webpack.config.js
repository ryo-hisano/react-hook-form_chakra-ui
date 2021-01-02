const path = require("path");

// 出力先ディレクトリ
const output = path.resolve(__dirname, "dist");

module.exports = {
  // モードを開発モードにする
  mode: "development",

  // 入力ファイル設定
  entry: "./src/index.tsx",

  // 出力ファイル設定
  output: {
    filename: "bundle.js",
    path: output,
  },

  // モジュール設定
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  // 開発モード設定
  devServer: {
    contentBase: output,
  },
};
