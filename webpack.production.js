const path = require('path');
const webpack = require('webpack');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

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
                loader: "babel-loader"
                // exclude: [/node_modules/] // If node_modules is excluded, postinstall script don't work
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
            } , {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [new ngAnnotatePlugin({add: true})]
};
