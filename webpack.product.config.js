const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		bundle: path.resolve(__dirname, 'src/index.jsx'),
		lib: [
	      'react', 
	      'react-dom', 
	      'react-redux', 
	      'react-router', 
	      'react-router-dom',
	      'redux', 
	      'es6-promise', 
	      'whatwg-fetch', 
		]
	},

	output:{
        path: __dirname + '/dist',
		filename: '[name].[chunkhash:8].js',
		publicPath: ''
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
				use: ExtractTextPlugin.extract({
              			fallback: 'style-loader',
              			use: [ 'css-loader' ]
          		})
			},
			{
				test: /\.scss/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: "css-loader"
					}, {
						loader: "sass-loader"
					}],
					
					fallback: "style-loader"
				})
			},
			{
				test: /\.(png|jpg)$/,
				use:[
						{loader: 'url-loader',
						options:{
							limit: 8192,
							outputPath: 'images/'
						}
					}
				]
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(woff|woff2|svg|ttf|eot)$/,
				use:[
						{loader: 'file-loader',
						options:{
							outputPath: 'fonts/'
						}
					}
				]
			}
		]
	},

    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './index.tmpl.html')
        }),

        new webpack.optimize.UglifyJsPlugin({minimize: true}),

        new webpack.DefinePlugin({
		      'process.env':{
		        'NODE_ENV': JSON.stringify('production')
		      }
        }), // 定义为生产环境
            
		new ExtractTextPlugin('styles.[chunkhash:8].css'), // 分离CSS和JS文件

		// 提供公共代码
		new webpack.optimize.CommonsChunkPlugin({
		name: 'lib',
		filename: '[name].[chunkhash:8].js'
		})
    ]
}