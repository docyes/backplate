Backplate
===========

A boilerplate for organizing (contrib packages, requirejs shim configuration)  and building (requirejs optimizer) a Backbone application.

Basic Usage:
```sh
[docyes@len backplate]$ ./build.sh 

Tracing dependencies for: main
Uglifying file: /home/docyes/code/backplate/build/js/require.config.js
Uglifying file: /home/docyes/code/backplate/build/js/contrib/require.js
Uglifying file: /home/docyes/code/backplate/build/js/contrib/text.js
Uglifying file: /home/docyes/code/backplate/build/js/main.js

js/main.js
----------------
js/contrib/almond.js
js/contrib/underscore.js
js/contrib/jquery.js
js/contrib/backbone.js
js/main.js

[docyes@len backplate]$ firefox build/index.html
```

Development:
```sh
[docyes@len backplate]$ firefox src/debug.html
```

