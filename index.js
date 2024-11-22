const { parsers: typescriptParsers } = require('prettier/parser-typescript')
const { parsers: javascriptParsers } = require('prettier/parser-babel')
const { parsers: htmlParsers } = require('prettier/parser-html')

function preprocess(text, opts) {
  const classNamePattern = /className\s*=\s*["']([^"']+)["']/g
  return text.replace(classNamePattern, (match, classNames) => {
    const cleanClassNames = classNames.trim().replace(/\s+/g, ' ')
    return `className="${cleanClassNames}"`
  })
}

function preprocessVue(text, opts) {
  const classNamePatternVue = /class\s*=\s*["']([^"']+)["']/g
  return text.replace(classNamePatternVue, (match, classNames) => {
    const cleanClassNames = classNames.trim().replace(/\s+/g, ' ')
    return `class="${cleanClassNames}"`
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
    },
    vue: {
      ...htmlParsers.html,
      preprocess: preprocessVue
    }
  }
}
