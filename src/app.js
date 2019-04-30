goog.provide('app');

goog.require('goog.math');
goog.require('app.lib');
goog.require('other');
goog.require('math');
goog.require('react_version');
goog.require('Foo.tsx');

goog.scope(() => {
  const math = goog.module.get('math');
  const react = goog.module.get('react_version');
  const Foo = goog.module.get('Foo.tsx').default;

  document.getElementById('app-root').innerHTML = `
  <p>goog.math.average(10, 20) => ${goog.math.average(10, 20)}</p>
  <p>app.lib.sum(10, 20) => ${app.lib.sum(10, 20)}</p>
  <p>other.getMd5Hash('text') => ${other.getMd5Hash('text')}</p>
  <p>math.sum(10, 20) => ${math.sum(10, 20)}</p>
  <p>math.max(10, 20, 30) => ${math.max(10, 20, 30)}</p>
  <p>React version => ${react.reactVersion()}</p>
  `;

  ReactDOM.render(React.createElement(Foo), document.getElementById('react-root'));
});
