import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/types'

export const buildRules = (isDev: BuildOptions['isDev']): webpack.RuleSetRule[] => {
  const typeScriptRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const CSSRule = {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              namedExport: false,
              exportLocalsConvention: 'as-is',
              auto: (resPath: string) => resPath.includes('module.scss'),
              localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
          }
        },
        "sass-loader",
      ]
    }

    const svgRule = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    }

    const imageRule = {
        test: /\.(jpe?g|png|gif)$/i,
      type: 'asset/resource'
    }

  return [
    typeScriptRule,
    CSSRule,
    svgRule,
    imageRule
  ]
}