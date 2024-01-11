const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
//require generatesw class of workbox plugin
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index',
      install: './src/js/install',
      database: './src/js/database',
      editor: './src/js/editor',
      header: './src/js/heador',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        //webpack plugin - generates html file & injects bundles
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'ARID JUNGLE'
        }),
        //custom service worker
        new InjectManifest({
            swSrc: './src/sw.js',
            swDest: 'service-worker.js',
        }),
        //manifest file
        new WebpackPwaManifest({})
    ],

//babel & css loaders
    module: {
        //css
      rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            //babel
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
                },
            },
        },
      ],
    },
  };
};
