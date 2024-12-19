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
      clean: true
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev && buildDevServer(port),
    resolve: buildResolve(),
    plugins: buildPlugin(paths.htmlPath),
    module: {
      rules: buildRules(isDev),
    },
  }
}