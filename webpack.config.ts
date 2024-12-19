import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import path from 'path'
import { TypeENV } from './config/build/types/types'



export default (env: TypeENV) => {
  const paths = {
    entryPath: path.resolve(__dirname, 'src', 'index.tsx'),
    outputPath: path.resolve(__dirname, 'dist'),
    htmlPath:  path.resolve(__dirname, 'src', 'public', 'index.html')
  }
  const mode = env.mode ?? 'development'
  const isDev = mode === 'development'
  const port = env.port ?? 3000

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port
  })
}