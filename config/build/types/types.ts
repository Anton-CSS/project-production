export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entryPath: string
  outputPath: string
  htmlPath: string
  srcPath: string
}


export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
}

export type TypeENV = {
  mode: BuildMode;
  port: BuildOptions['port'];
}