const path = require('path');

module.exports = {
    // entry: './src/playground/destructuring.js',
    // entry: './src/playground/redux-101.js',
    // entry: './src/playground/redux-expensify.js',
    // entry: './src/playground/hoc.js',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    },
};