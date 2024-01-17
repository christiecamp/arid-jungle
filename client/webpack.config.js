const HtmlWebpackPlugin = require('html-webpack-plugin');
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
            swSrc: './src-sw.js',
            swDest: 'src-sw.js',
        }),
        //manifest file
        new WebpackPwaManifest({
          fingerprints: false,
          inject: true,
          name: 'ARID JUNGLE',
          short_name: 'ARID',
          //update later
          description: 'traverse the arid jungle!',
          background_color: '#225ca3',
          theme_color:'#225ca3',
          start_url: '/',
          publicPath: '/',
          icons: [
            {
              src: path.resolve('./src/images/logo.png'),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join('assets', 'icons'),
            },
          ],
        }),
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
