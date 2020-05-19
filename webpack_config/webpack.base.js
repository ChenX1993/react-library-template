module.exports = {
  module: {
    rules: [
      {
        // Use babel-loader complie js and jsx
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", "jsx", ".ts", ".tsx"],
        },
      },
    ],
  },
};
