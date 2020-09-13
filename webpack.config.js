// const path = require("path");
// const miniCss = require("mini-css-extract-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const context = __dirname + '/src';

// module.exports = {
// 	mode: "development",
// 	entry: "./src/js/index.js",
// 	output: {
// 		filename: "bundle.js",
// 		path: path.resolve(__dirname, "src"),
// 		publicPath: 'src/js'
// 	},
// 	module: {
		
// 	}
	// devServer: { 
	// 	contentBase: path.join(__dirname, 'dist'),
	// 	port: 3000,
	// },
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.(scss|sass)$/,
	// 			use: [
	// 				'style-loader',
	// 				{
	// 					loader: MiniCssExtractPlugin.loader,
	// 					options: {
	// 						reloadAll: true
	// 					},
	// 				},
	// 				'css-loader',
	// 				'sass-loader'
	// 			]
	// 		},	
	// 		{
	// 			test: /\.css$/,
	// 			use: [
	// 				'style-loader',
	// 				MiniCssExtractPlugin.loader,
	// 				'css-loader',
	// 				'sass-loader'
	// 			] 
	// 		},
	// 		{
	// 			test: /\.(png|jpg|svg)$/, 
	// 			use: ['file-loader']
	// 		},
	// 		{
	// 		 	test: /\.(ttf|woff|woff2|eot)$/, 
	// 		  	use: ['file-loader']
	// 		},
	// 	],
	// },
	// plugins: [
	// 	new HtmlWebpackPlugin({
	// 		template: 'index.html'
	// 	}),
	// 	new CopyWebpackPlugin({
	// 		patterns: [
	// 			{ context: context, from: 'img/**/**', to: '' },
	// 			{ context: context, from: 'fonts/**', to: '' },
	// 		],
	// 	}),
	// 	new MiniCssExtractPlugin({
	// 		filename: "style.css"
	// 	})
	// ],
// };


// {
// 	loader: 'postcss-loader',
// 	options: {sourceMap: true, config: {path: 'src/js/postcss'}}
// }

const path = require('path');

module.exports = {
  entry: '.src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'js/bundle.js'
  }
};