# Backplate
===========

## Overview

A boilerplate for the development source tree and production build process of a RequireJS driven Backbone application.

For convenience Backplate ships with Backbone, underscore, jQuery, RequireJS, r.js, almond, text.js 
and pre-configured RequireJS shims for non-AMD compliant packages.

## Development

```sh
[docyes@len backplate]$ firefox src/index.html?debug=1
```

## Production
```sh
[docyes@len backplate]$ ./build.sh 

Tracing dependencies for: main

Tracing dependencies for: common
Uglifying file: /Users/docyes/Code/backplate/build/js/common.js
Uglifying file: /Users/docyes/Code/backplate/build/js/contrib/require.js
Uglifying file: /Users/docyes/Code/backplate/build/js/main.js
Uglifying file: /Users/docyes/Code/backplate/build/js/require.config.js

js/main.js
----------------
js/main.js

js/common.js
----------------
js/contrib/almond.js
js/contrib/text.js
js/contrib/underscore.js
js/contrib/jquery.js
js/contrib/backbone.js
js/views/Base.js
js/models/Base.js
js/collections/Base.js
js/routers/Base.js

[docyes@len backplate]$ firefox build/index.html
```

## File System Reference

### build.sh
Executes the r.js optimizer using Node with build.js as the master build profile. See lib/r.js

### build.js
The master production build profile; see build.sh and src/js/require.config.js.

### lib/ 
Shared libraries.

### lib/r.js
An adapter to run AMD based projects in Node or Rhino. Includes the RequireJS Optimizer that combines scripts for optimal 
browser delivery. See https://github.com/jrburke/r.js/

### src/
Project source tree.

### src/index.html
Browser production and development runtime; production only runs in the build/ directory and development in the src/ directory. See build.sh

### src/js/
JavaScript source tree.

### src/js/main.js
Program main initializer.

### src/js/require.config.js
Shared RequireJS configuration used by both development and production variants. See src/debug.html and build.js

### src/js/contrib/
Third-party packages.

