goog.provide('other');

goog.require('goog.crypt.Md5');

other.getMd5Hash = (text) => {
  const md5 = new goog.crypt.Md5();
  md5.update(text);
  return md5.digest().join('');
}

