const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
        mode: "production",
        entry: {
            app: path.resolve(__dirname, '../src/index.js'),
        },
        output: {
            filename: "js/bundle.js",
            path: path.resolve(__dirname, '../dist')
        },
        optimization: {
            minimize: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                          presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                inject: 'body',
                dllName: ['static/vendor.dll.js'],
            }),
            new CopyWebpackPlugin({
                patterns: [
                  { from: path.join(__dirname, '../static'), to: path.join(__dirname, '../dist/static')},
                ],
              }),
            new webpack.DllReferencePlugin({
              manifest: require(path.join(__dirname, '../static/vendor-manifest.json'))
            }),
        ],
};
