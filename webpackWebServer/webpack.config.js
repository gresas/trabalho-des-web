const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './assets/js/index.js',
    devServer: {
        port: 9000,
        devMiddleware: {
            writeToDisk: true
        },
        static: {
            directory: path.resolve(__dirname)
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                "index.html",
                "carrinho.html",
                "loja.html",
                "produto.html"
            ],
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Popper: ['popper.js', 'default']
        })
    ],
    output: {
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        path: path.resolve(__dirname, 'dist')
    }
}