const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
    netry: './src/app.js',
    output: {
        filename: 'bundle.js'
    },
    devtools: 'source-maps',
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader',exclude: /node_modules/},
            {test: /\.png$/, use: [
                {
                    loader: 'url-loader',
                    option: {
                        MimeType: 'image/png',
                    }
                }    
            ]},
            { test: /\.css$/, loader: ['style-loader', 'css-loader']},
            { test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader']},
        ]
    },
    devServer: {

        contenBas: 'src',
        hot: true,
        open: true,
        port: 8000,
        watchContentBase: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body'
        }),
        new Dotenv()
    ]
}
