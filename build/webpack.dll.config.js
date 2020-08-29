const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        //把第三方库集中打包
        vendor: ['react', 'react-dom', 'moment', 'echarts']
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, '../static'),
        library: '[name]_lib', 
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '../static/[name]-manifest.json'),
            name: '[name]_lib', //这个name 和 library 对应
        })
    ]
};