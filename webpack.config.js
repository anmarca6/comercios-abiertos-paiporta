const path = require('path');

module.exports = {
  entry: './src/analytics.js',
  output: {
    filename: 'analytics.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module'
    }
  },
  mode: 'production',
  experiments: {
    outputModule: true,
  },
}; 