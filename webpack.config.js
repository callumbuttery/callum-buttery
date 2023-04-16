// webpack.config.js

const path = require("path");

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
                            context: 'myApp',
                            publicPath: '/myApp',
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
    // pass all js files through Babel
    resolve: {
        extensions: ["*", ".js", ".jsx", ".webp"],    // <-- added `.jsx` here
    },

};