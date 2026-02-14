'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .map((item) => item.split(':').map((part) => part.trim()))
    .forEach(([key, value]) => {
      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
