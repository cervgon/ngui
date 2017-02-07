const path = require('path');
const webpack = require('webpack');

console.log("PRODUCTION BUILD");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'ngui.min.js',
        // libraryTarget: "umd",
        // library: "ngui",
        // umdNamedDefine: true
    },
    externals: {
        "angular": "angular"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/]
            }, {
                test: /\.html$/,
                use: 'raw-loader'
            }, {
                test: /\.css$/,
                use: [
                    'style-loader', {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: false
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',
};
