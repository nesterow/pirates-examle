const {addHook} = require('pirates')
const {transform} = require('@babel/core')

module.exports = (options) => addHook(
  function(source, filename) {
    return transform(source, {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'cjs',
            targets: {
              node: process.versions.node
            }
          }
        ]
      ]
    }).code
  },
  {
    exts: ['.js'],
    ignoreNodeModules: true,
    ...options
  }
)