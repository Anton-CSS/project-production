import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildOptions, BuildPaths } from './types/types'
import  ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugin = (path: BuildPaths['htmlPath'], isDev: BuildOptions['isDev']): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: path,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
       __IS_DEV__: JSON.stringify(isDev)
    })
  ]
  if (isDev) {
    plugins.push( new ReactRefreshWebpackPlugin())
  }
  return plugins
}