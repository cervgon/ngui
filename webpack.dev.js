const path = require('path');
const webpack = require('webpack');

console.log('DEVELOPMENT SERVER');

module.exports = {
    entry: './src/devServer.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'ngui.min.js',
        // libraryTarget: 'umd',
        // library: 'ngui',
        // umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
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
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'inline-source-map'
    devServer: {
        // inline: true,
        host: "0.0.0.0"
    }
};
