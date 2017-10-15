const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		path.resolve(__dirname, 'src/index.jsx')
	],

	output:{
        path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/'
	},

    resolve:{
		extensions:['.js','.jsx']
    },

	module:{
		rules:[
			{
				test: /\.js|jsx$/, 
				loaders: 'babel-loader',
				exclude: /node_modules/,
				query: {
          			presets: ['es2015', 'react']
        		}
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.scss$/,
				use: [{loader: 'style-loader'},
					{loader:'css-loader'},
					{loader:'sass-loader'}
				]
			},
			{
				test: /\.(png|jpg)$/,
				use:[
						{loader: 'url-loader',
						options:{
							limit: 8192
						}
					}
				]
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			{
				test: /\.(woff|woff2|svg|ttf|eot)$/,
				use:[
						{loader: 'file-loader',
						options:{
						}
					}
				]
			}
		]
	},

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './index.tmpl.html'),
			showErrors: true
        })
        //new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],

    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
		inline: true,
		hot: true,
		port: 3030,
        proxy: {
			'/api':{
				target: 'http://localhost:3000',
				secure: false
			}
		}
    }
}