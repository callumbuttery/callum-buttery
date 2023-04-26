// webpack.config.js

const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        // exclude node_modules
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(sass|less|css)$/,
                use: ["style-loader", "css-loader", 'sass-loader'],
            },
            {
                test: /\.(png|jpg|webp|gif|svg|mp4|pdf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]?[hash]',
                        context: 'App',
                        publicPath: '/App',
                        useRelativePath: true,
                        emitFile: false
                    }
                },
                {
                    loader: 'webp-loader'
                }
                ]
            }

        ],
    },
    plugins: [
        // New plugin
        new HtmlWebpackPlugin(),
        new webpack.ProvidePlugin({
            "React": "react",
         }),
    ],
    // pass all js files through Babel
    resolve: {
        extensions: [".*",".js",".jsx",".webp",".ts",".json",".html"],    // <-- added `.jsx` here
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },

};