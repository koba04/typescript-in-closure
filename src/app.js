goog.provide('app');

goog.require('goog.math');
goog.require('app.lib');
goog.require('other');

document.getElementById('app-root').innerHTML = `
<p>goog.math.average(10, 20) => ${goog.math.average(10, 20)}</p>
<p>app.lib.sum(10, 20) => ${app.lib.sum(10, 20)}</p>
<p>other.getMd5Hash('text') => ${other.getMd5Hash('text')}</p>
`;
