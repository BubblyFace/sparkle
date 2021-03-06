const path = require('path');
const buble = require('rollup-plugin-buble'); 
const typescript = require('rollup-plugin-typescript');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

module.exports = [
  {
    input: resolveFile('src/index.ts'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'iife',
      name: 'sparkle',
    }, 
    plugins: [
      typescript(),
      buble(),
    ],
  },
]
