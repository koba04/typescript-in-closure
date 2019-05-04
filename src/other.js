goog.provide('other');

goog.require('goog.Uri');

/**
 * @param {string} uri string
 * @return {string} current URI path
 */
other.getUriPath = (uri) => {
  return goog.Uri.parse(uri).getPath();
}

