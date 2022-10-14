const { dirname } = require('path')
const path = require('path')
const WebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE.ENV !== 'production';
module.exports = {
   mode: isDevelopment ? 'development' : 'production',
   devtool: isDevelopment ? 'eval-source-map' : 'source-map',  //retorna o erro 
   entry: path.resolve(__dirname, 'src', 'index.jsx'),
   output: {
    path: path.resolve(__dirname, 'dist'),
     filename: 'bundle.js'
   },
   resolve: {
    extensions: ['.js','.jsx'],
   },
   devServer: {
    static: path.resolve(__dirname, 'public'),
   },
   plugins: [
    new WebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
    })
   ],
   module: {
    rules: [
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        }
    ],
   }
};