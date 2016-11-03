# myRetail

###Installation
*  $ git clone https://github.com/srikanthkaruparthy/myRetail.git [my-app-name]
*  $ cd [my-app-name]
*  $ npm install

###Run
*  $ gulp default

###Gulp tasks

*  **browserSync** start BrowserSync Server
*  **sass** to compille scss files and save them as CSS files
*  **watch** watchers for HTML, JS and CSS files
*  **useref** optimize CSS and HTML files
*  **images** optimize images and saves it in dist folder
*  **clean:dist** cleans the dist folder
*  **default** runs sass, browsersync and watch in a sequence
*  **build** runs clean:dist, sass, useref and images in a sequence.

###Notes
*  The angular app.module.js file loads up $httpBackend to mock a rest server and make uses of the JSON file.
*  I just used Arial as the default font in the application.
*  For responsive site I have used bootstrap classes which stacks up to the required specification when browsed in phone mode. 
*  This was tested and developed on Chrome, Firefox.
*  I followed John Papa's Angular Style guide throughout the project to make life easier for Angular 2 upgrade as a future enhancement.
*  Accessibility has been tested using firefox axe tools.
*  Unit tests for the modules has been written using karma & jasmine.

