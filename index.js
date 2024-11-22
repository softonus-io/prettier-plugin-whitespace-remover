const { parsers: typescriptParsers } = require('prettier/parser-typescript');
const { parsers: javascriptParsers } = require('prettier/parser-babel');
const { parsers: htmlParsers } = require('prettier/parser-html');

function preprocessClassName(text) {
  const classNamePattern = /className\s*=\s*["']([^"']+)["']/g;
  return text.replace(classNamePattern, (match, classNames) => {
    const cleanClassNames = classNames.trim().replace(/\s+/g, ' ');
    return `className="${cleanClassNames}"`;
  });
}

function preprocessClass(text) {
  const classPattern = /class\s*=\s*["']([^"']+)["']/g;
  return text.replace(classPattern, (match, classNames) => {
    const cleanClassNames = classNames.trim().replace(/\s+/g, ' ');
    return `class="${cleanClassNames}"`;
  });
}

module.exports = {
  parsers: {
    typescript: {
      ...typescriptParsers.typescript,
      preprocess: preprocessClassName 
    },
    babel: {
      ...javascriptParsers.babel,
      preprocess: preprocessClassName 
    },
    vue: {
      ...htmlParsers.html,
      preprocess: preprocessClass
    },
    angular: {
      ...htmlParsers.html,
      preprocess: preprocessClass 
    },
    html: {
      ...htmlParsers.html,
      preprocess: preprocessClass 
    }
  }
};