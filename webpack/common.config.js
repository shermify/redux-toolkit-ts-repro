import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  target: ['web', 'es2022'],
  entry: {
    main: { import: './packages/app1/index.tsx' },
  },
  output: {
    filename: '[name].[chunkhash].js',
    clean: true,
  },
  experiments: {
    topLevelAwait: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      publicPath: '/',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
