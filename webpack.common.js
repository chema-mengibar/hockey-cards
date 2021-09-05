const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')
const webpack = require('webpack');
require('dotenv').config();

module.exports = function(env, argv) {

    const nodeEnv = process.env.NODE_ENV
    const domain = process.env.DOMAIN
    const subDirName = process.env.SUB_DIR

    const isDevelopment = nodeEnv === 'development';
    const localHost = 'http://localhost:8080'

    const render = {
        domain: isDevelopment ? localHost : `${domain}/${subDirName}`,
        subDir: isDevelopment ? '' : `/${subDirName}`,
        appName: process.env.APP_NAME
    }

    return {

        mode: 'development',
        devtool: false, // source-map
        optimization: {
            usedExports: true
        },
        output: {
            filename: 'app.[contenthash].js',
            path: path.resolve(__dirname, 'public'),
            publicPath: "/",
        },
        module: {
            rules: [{
                    test: [/\.jsx?$/, /\.tsx?$/],
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheCompression: false,
                            cacheDirectory: true,
                        },
                    },

                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(scss|sass)$/,
                    use: ["style-loader", "css-loader", "sass-loader"],
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: [
                        "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
                        "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
                    ],
                },
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"],
            alias: {
                '~': path.resolve(__dirname, './src'),
            }
        },
        plugins: [
            new webpack.DefinePlugin({
                ___SUBDIR___: JSON.stringify(render.subDir),
                'process.env.NODE_ENV': JSON.stringify(nodeEnv)
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new HtmlReplaceWebpackPlugin([{
                pattern: '___DOMAIN___',
                replacement: render.domain
            }, {
                pattern: '___APPNAME___',
                replacement: render.appName
            }]),

        ]
    };

}