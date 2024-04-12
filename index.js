const { parsers: typescriptParsers } = require('prettier/parser-typescript')
const { parsers: javascriptParsers } = require('prettier/parser-babel')

function preprocess(text, opts) {
  const classNamePattern = /className\s*=\s*["']([^"']+)["']/g
  return text.replace(classNamePattern, (match, classNames) => {
    const cleanClassNames = classNames.trim().replace(/\s+/g, ' ')
    return `className="${cleanClassNames}"`
  })
}

module.exports = {
  parsers: {
    typescript: {
      ...typescriptParsers.typescript,
      preprocess
    },
    babel: {
      ...javascriptParsers.babel,
      preprocess
    }
  }
}
