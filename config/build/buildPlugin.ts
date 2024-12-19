import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildPaths } from './types/types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugin = (path: BuildPaths['htmlPath']): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: path,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
    new webpack.ProgressPlugin()
  ]
}