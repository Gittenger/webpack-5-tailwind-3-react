const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const CSSModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: {
			localIdentName: '[name]__[local]___[hash:base64:5]',
			exportLocalsConvention: 'camelCase',
		},
		importLoaders: 2,
		sourceMap: false, // turned off as causes delay
	},
}

const CSSLoader = {
	loader: 'css-loader',
	options: {
		modules: 'global',
		importLoaders: 2,
		sourceMap: false, // turned off as causes delay
	},
}

// Our PostCSSLoader
const PostCSSLoader = {
	loader: 'postcss-loader',
	options: {
		sourceMap: false, // turned off as causes delay
	},
}

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	devServer: {
		port: 3030,
	},
	resolve: {
		modules: [path.join(__dirname, 'src'), 'node_modules'],
		alias: {
			react: path.join(__dirname, 'node_modules', 'react'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				include: path.resolve(__dirname, 'src/index.css'),
				use: [MiniCssExtractPlugin.loader, CSSLoader, PostCSSLoader],
			},
			{
				test: /\.module\.css$/,
				use: ['style-loader', CSSModuleLoader, PostCSSLoader],
			},
			{
				test: /\.svg$/i,
				oneOf: [
					{
						issuer: /\.[jt]sx?$/,
						resourceQuery: /react/,
						use: ['@svgr/webpack'],
					},
					{
						type: 'asset/resource',
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|ico)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'index.css',
			chunkFilename: 'index.css',
		}),
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
	],
}
