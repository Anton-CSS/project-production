import { BuildOptions } from './types/types'
import webpack from 'webpack'
import { buildResolve } from './buildResolve'
import { buildPlugin } from './buildPlugin'
import { buildRules } from './buildLoaders'
import { buildDevServer } from './buildDevServer'

export const buildWebpackConfig = ( options: BuildOptions ):webpack.Configuration => {
  const { mode, paths, port, isDev } = options

  return {
    mode: mode,
    entry: paths.entryPath,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.outputPath,
      assetModuleFilename: 'images/[hash][ext][query]',
      clean: true
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev && buildDevServer(port),
    resolve: buildResolve(paths.srcPath),
    plugins: buildPlugin(paths.htmlPath, isDev),
    module: {
      rules: buildRules(isDev),
    },
  }
}