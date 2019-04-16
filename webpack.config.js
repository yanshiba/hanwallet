const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: { 
		hanwallet : "./src/hanwallet.js"
	},

	output: {
	path: __dirname,
	filename: "./dist/[name].js",
	libraryTarget: 'umd'
	}
};