import webpack from 'webpack'
import { BuildPaths } from './types/types'


export const buildResolve = (path: BuildPaths['srcPath']): webpack.ResolveOptions => ({
   preferAbsolute: true,
   extensions: ['.tsx', '.ts', '.js'],
   modules:[path, 'node_modules'],
   mainFiles: ['index'],
  alias: {}
 })