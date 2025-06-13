const eslintPlugin = require("eslint-webpack-plugin");
module.exports = {
    mode: "production", // production | development | none
    // 单入口
    entry: './main.js',
    // 多入口
    // entry: ['./index.js', 'index2.js'],
    output: {
        filename: '[name].[hash:4].bundle.js',
        path: __dirname + '/dist',
    },
    // loader
    module: {
        rules: [
            {
                test: /\.js$/,
                // loader: 'babel-loader',
                use: {
                    loader: 'babel-loader',
                }
            },
        ]
    },
    devServer: {},
    resolve: {},
    plugins: [new eslintPlugin()],
    optimization: {}
}