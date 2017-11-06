const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.js'
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			title: 'for-examples',
			template: path.resolve(__dirname, 'tmp.html')
		})
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		clientLogLevel: "warning",
		open: true,
		port: 9000
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader'
			},
			{
				test: /.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			}
		]
	},

}
