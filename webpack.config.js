const path = require('path')
const dotenv = require('dotenv')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

const config = dotenv.config({ path: path.resolve(__dirname, `env/${process.env.APP_ENV}.env`) })

const isLocal = process.env.APP_ENV === 'local'

module.exports = {
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  mode: isLocal ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              'relay',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
              'babel-plugin-styled-components'
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: false,
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.svg$/,
        use: [{
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false
              }
            },
            template: (
              { template },
              opts,
              { imports, componentName, props, jsx }
            ) => template.ast`
              ${imports}
              import useWithViewBox from '../hooks/useWithViewBox';
  
              const ${componentName} = (${props}) => {
                const ref = React.useRef();
                useWithViewBox({ ref, ...props });
  
                props = { ...props, ref };
  
                return ${jsx};
              };
  
              export default ${componentName};
            `,
          },
        }],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      inject: true
    }),
    new DefinePlugin({ 'process.env': JSON.stringify(config.parsed) })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      utils: path.resolve(__dirname, 'src/utils'),
      store: path.resolve(__dirname, 'src/store'),
      RelayEnvironment: path.resolve(__dirname, 'src/RelayEnvironment'),
      atoms: path.resolve(__dirname, 'src/atoms'),
      molecules: path.resolve(__dirname, 'src/molecules'),
      services: path.resolve(__dirname, 'src/services'),
      logic: path.resolve(__dirname, 'src/redux'),
      socket: path.resolve(__dirname, 'src/socket'),
      contexts: path.resolve(__dirname, 'src/contexts'),
      hocs: path.resolve(__dirname, 'src/hocs'),
      modals: path.resolve(__dirname, 'src/modals'),
      shared: path.resolve(__dirname, 'src/shared'),
      loadings: path.resolve(__dirname, 'src/loadings'),
      constants: path.resolve(__dirname, 'src/constants.js'),
    }
  },
  ...(isLocal
    ? { devServer: { historyApiFallback: true } }
    : {}),
}
