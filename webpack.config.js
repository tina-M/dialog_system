var path = require('path');
var webpack = require('webpack');
var ExtractText = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		index: './src/main.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: 'public/dist'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-2']
				}
			},
			{
				test: /\.(scss|sass)$/,
				loader: ExtractText.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
			}
		]
	},
	plugins: [
		new ExtractText({
			filename: '[name].min.css',
			// allChunks: true
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			sourceMap: true,
		})
	],
}
