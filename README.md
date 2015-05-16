# BrowserifyGulp
Browserify with sourcemaps

1.  Install Browserify 
    $ npm install -g browserify

2.  Create your package.json file
    $ npm init

3.  Install both jQuery and Lo-Dash from npm
    $ npm install jquery lodash --save

4.  js/modules/app.js

5.  no minification
    $ browserify src/njs/main.js -o src/js/main.js

6.  minification and source maps

    A.  $ npm install uglifyify

        w/o source maps
        $ browserify -g uglifyify src/js/index.js > js/app.js

        --debug flag generates inline source maps
        $ browserify -g uglifyify --debug src/js/index.js > js/app-debug.js

    B.  Browserify + Uglify2 with sourcemaps (Gulp Recipe)

        $ npm install gulp --save
        $ npm install browserify --save
        $ npm install vinyl-source-stream --save
        $ npm install vinyl-buffer --save
        $ npm install gulp-uglify --save
        $ npm install gulp-sourcemaps --save
        $ npm install gulp-util --save

        $ gulp javascript