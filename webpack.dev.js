const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common(), {
    mode: 'development',
    devtool: "cheap-module-source-map",
    entry: [
        "regenerator-runtime/runtime.js",
        "react-hot-loader/patch", // activate HMR for React
        // "webpack-dev-server/client?http://localhost:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
        path.resolve(__dirname, 'src/index.tsx'),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: 'only',
    },

});