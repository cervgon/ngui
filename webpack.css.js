const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log("CSS ONLY BUILD");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'deleteme.js',
        // libraryTarget: "umd",
        // library: "ngui",
        // umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
            },
            {
                test: /\.html$/,
                use: 'ignore-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            }
        ]
    },
    // devtool: 'source-map',
    plugins: [new ExtractTextPlugin("ngui.css")]
};
