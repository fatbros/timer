const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: {
        js: './src/main.js'
    },

    output: {
        path: __dirname + '/dest',
        filename: 'build.js',
        publicPath: '/dest/'
    },

    // Configuration for dev server
    devServer: {
        port: 3000
    },

    devtool: 'source-map',

    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
