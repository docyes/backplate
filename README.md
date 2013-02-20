# Backplate
===========

## Overview

A boilerplate for the development source tree and production build process of a RequireJS driven Backbone application.

For convenience Backplate ships with Backbone, underscore, jQuery, RequireJS, r.js, almond, text.js 
and pre-configured RequireJS shims for non-AMD compliant packages.

## Development

```sh
[docyes@len backplate]$ firefox src/debug.html
```

## Production
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

### src/debug.html
Browser development runtime full RequireJS; only runs in the src/ directory.

### src/index.html
Browser production runtime; only runs in the build/ directory. See build.sh

### src/js/
JavaScript source tree.

### src/js/main.js
Program main initializer.

### src/js/require.config.js
Shared RequireJS configuration used by both development and production variants. See src/debug.html and build.js

### src/js/contrib/
Third-party packages.

