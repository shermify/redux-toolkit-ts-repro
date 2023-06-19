import commonDev from './common.config.js';
import { merge } from 'webpack-merge';
import Refresh from '@pmmmwh/react-refresh-webpack-plugin';

export default merge(commonDev, {
  cache: {
    type: 'memory',
  },
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    hot: true,
    liveReload: false,
    historyApiFallback: true,
    port: 8080,
    host: 'localhost',
  },
  plugins: [new Refresh()],
  watchOptions: {
    ignored: /.yarn|dist|build|node_modules|public|webpack/,
  },
});
