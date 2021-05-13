const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const devMode = env.mode === 'development';
  const plugins = [];

  if (!devMode) {
    plugins.push(
      new MiniCssExtractPlugin({
        linkType: 'text/css',
        filename: './css/style.css',
      })
    );
  }

  plugins.push(
    new HtmlWebpackPlugin({
      title: 'Swingvy',
      template: './public/index.html',
    })
  );
  return {
    entry: ['./src/js/index.js', './src/css/style.scss'],
    output: {
      filename: 'js/main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js', '.scss'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        css: path.resolve(__dirname, 'src/css/'),
        html: path.resolve(__dirname, 'public/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode
              ? 'style-loader'
              : {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    esModule: true,
                    publicPath: './',
                  },
                },
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins,
  };
};
