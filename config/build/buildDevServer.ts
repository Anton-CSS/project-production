import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/types'

export const buildDevServer = (port: BuildOptions['port']): DevServerConfiguration => {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}