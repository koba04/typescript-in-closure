//!! Processing provides [] from input {SyntheticVarsDeclar}
//!! Processing provides [app] from input src/app.js
//!! Processing provides [app.lib] from input src/lib.js
//!! Processing provides [other] from input src/other.js
declare namespace ಠ_ಠ.clutz.app {
}
declare module 'goog:app' {
  import app = ಠ_ಠ.clutz.app;
  export = app;
}
declare namespace ಠ_ಠ.clutz.app.lib {
  function sum (a : number , b : number ) : number ;
}
declare module 'goog:app.lib' {
  import lib = ಠ_ಠ.clutz.app.lib;
  export = lib;
}
declare namespace ಠ_ಠ.clutz.other {
  function getUriPath (uri : string ) : string ;
}
declare module 'goog:other' {
  import other = ಠ_ಠ.clutz.other;
  export = other;
}

