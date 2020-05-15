module.exports = {
  module: {
    rules: [
      {
        // Use babel-loader complie js and jsx
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
