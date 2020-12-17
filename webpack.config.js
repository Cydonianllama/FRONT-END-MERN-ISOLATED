const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const pluginhtml = new htmlPlugin();

module.exports = {
    entry  : './client/index.jsx',
    output :{
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js'
    },
    resolve: {
        extensions: ['.jsx','.js'],
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                use  : ['babel-loader']
            },
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            }
        ]
    },
    devServer : {
        contentBase : path.resolve(__dirname,'dist'),
        historyApiFallback : true,
        port : 5000
    } 
}