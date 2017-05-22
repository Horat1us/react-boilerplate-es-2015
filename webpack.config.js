webpack = require('webpack');
path = require('path');
fs = require('fs');

var debug = process.env.NODE_ENV !== "production";
var ExtractTextPlugin = require('extract-text-webpack-plugin');


webpackConfig = {
    context: __dirname,
    devServer: {
        publicPath: "/",
        contentBase: './web',
        noInfo: false,
        hot: true,
        inline: true,
        open: true,
    },
    entry: {
        bundle: path.resolve('./react/index.js'),
        styles: path.resolve(__dirname + '/styles/main.scss'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./web'),
        library: '[name]'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            config: path.resolve('./config/config.' + (debug ? 'local' : 'prod') + '.js'),
            envConfig: fs.existsSync('./env.js') ? path.resolve('./env.js') : path.resolve('./env.example.js'),
            images: path.resolve('./images'),
        },
        modules: [path.resolve('./react'), path.resolve('./styles'), 'node_modules'],
    },
    devtool: debug ? '#cheap-module-source-map' : false,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                },
            },
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?'
                    + 'includePaths[]=' + path.resolve(__dirname + './styles')
                    + '&includePaths[] = ' + path.resolve(__dirname, "./node_modules/compass-mixins/lib"),
                ],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true,
        }),
    ]
};

if(!debug){
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            minimize: true,
            comments: false,
        })
    );
}

module.exports = webpackConfig;