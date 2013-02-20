# H1 Backplate
===========

# H2 Overview:

A boilerplate for managing the development source tree and production build of a RequireJS driven Backbone application.
RequireJS configuration is mostly shared between both development and production. 

For convenience Backplate ships with Backbone, underscore, jQuery, RequireJS, r.js (RequireJS optimizer), almond, text.js (RequireJS text plugin) 
and pre-configured RequireJS shims for non-AMD compliant packages.

# H2 Development:

```sh
[docyes@len backplate]$ firefox src/debug.html
```

# H2 Production:
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

# H2 File System Reference:

```sh
./
build.sh -> Load configuration and run the optimizer and output contents to ./build
build.js -> RequireJS build profile and overlay of shared configuration

./lib: -> Shared libraries 
r.js -> RequireJS optimizer

./src: -> Project source tree
debug.html -> Browser development runtime full RequireJS
index.html -> Browser production runtime minimal almond

./js -> JavaScript source
main.js -> Program main
require.config.js -> Shared RequireJS configuration

./js/contrib -> Third-party packages
```



