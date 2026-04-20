const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const fs = require('fs');

module.exports = (env, argv) => {
   const isProduction = argv.mode === 'production';

   return {
      mode: isProduction ? 'production' : 'development',
      devtool: isProduction ? false : 'source-map',

      entry: {
         'js/app': './assets/js/app.js',
         'css/styles': './assets/sass/styles.scss',
         'css/mobile': './assets/sass/mobile.scss',
      },

      output: {
         path: path.resolve(__dirname, 'build'),
         filename: '[name].js',
         clean: false, // Don't clean between builds to preserve copied assets
      },

      resolve: {
         symlinks: false,
         extensions: ['.js', '.json'],
      },

      module: {
         rules: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                  loader: 'babel-loader',
                  options: {
                     presets: ['@babel/preset-env'],
                  },
               },
            },
            {
               test: /\.scss$/,
               use: [
                  MiniCssExtractPlugin.loader,
                  {
                     loader: 'css-loader',
                     options: {
                        url: false, // Don't process URLs in CSS (same as processCssUrls: false)
                        sourceMap: !isProduction,
                     },
                  },
                  {
                     loader: 'postcss-loader',
                     options: {
                        sourceMap: !isProduction,
                        postcssOptions: {
                           plugins: [
                              require('autoprefixer'),
                           ],
                        },
                     },
                  },
                  {
                     loader: 'sass-loader',
                     options: {
                        sourceMap: !isProduction,
                        sassOptions: {
                           includePaths: ['assets/sass', 'node_modules'],
                        },
                     },
                  },
               ],
            },
         ],
      },

      plugins: [
         new MiniCssExtractPlugin({
            filename: '[name].css',
         }),

         new CopyWebpackPlugin({
            patterns: [
               { from: 'assets/img', to: 'img' },
               { from: 'assets/favicons', to: 'favicons' },
            ],
         }),

         new WebpackManifestPlugin({
            fileName: 'mix-manifest.json',
            publicPath: process.env.ELEVENTY_ENV === 'production' ? '/docs/build/' : '/build/',
         }),

         // Custom plugin to copy manifest to _data folder
         {
            apply: (compiler) => {
               compiler.hooks.afterEmit.tap('CopyManifestPlugin', () => {
                  const manifestPath = path.resolve(__dirname, 'build/mix-manifest.json');
                  const targetPath = path.resolve(__dirname, '_data/mixManifest.json');

                  if (fs.existsSync(manifestPath)) {
                     fs.copyFileSync(manifestPath, targetPath);
                     console.log('Copied manifest to _data/mixManifest.json');
                  }
               });
            },
         },
      ],

      stats: {
         children: false,
         entrypoints: false,
         modules: false,
      },

      // Watch options for development
      watchOptions: {
         ignored: /node_modules/,
         aggregateTimeout: 300,
      },
   };
};
