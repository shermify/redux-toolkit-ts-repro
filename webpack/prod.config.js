import path from 'path';
import common from './common.config.js';
import { merge } from 'webpack-merge';

export default merge(common, {
  mode: 'production',
  output: {
    path: path.resolve('./build'),
  },
});
