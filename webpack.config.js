const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = env === 'production';
    const CSSExtract = new MiniCssExtractPlugin({
        filename: 'styles.css'
    });

    return {
        // entry: './src/playground/destructuring.js',
        // entry: './src/playground/redux-101.js',
        // entry: './src/playground/redux-expensify.js',
        // entry: './src/playground/hoc.js',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        mode: 'development',
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            }, {
                test: /\.s?css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {}
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
                ]
            }
            ]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            publicPath: '/dist/',
            historyApiFallback: true,
        },
    }
};
