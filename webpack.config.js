const webpack = require('webpack');

module.exports = {
    entry: {
        js: './src/main.js',
        html: './index.html'
    },

    output: {
        path: __dirname + "/dest",
        filename: 'build.js'
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
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            }
        ]
    }
}
