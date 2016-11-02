# myRetail

###Installation
*  $ git clone https://github.com/srikanthkaruparthy/myRetail.git [my-app-name]
*  $ cd [my-app-name]
*  $ npm install

###Run
*  $ gulp default

###Gulp tasks
*  **default** runs tests and builds to dist folder
*  **sass** compiles bootstrap-based styles into same folder* 
*  **build** builds production dist to dist folder
*  **images** optimize images
*  **useref** optimize CSS and HTML files
*  **browserSync** Start BrowserSync Server
*  **watch** Watchers
*  **useref** optimize CSS and HTML files


###Notes
*  The angular app.module.js file loads up $httpBackend to mock a rest server for development.
*  I just used Arial as the default font in the application.
*  For responsive site I have used bootstrap classes which stacks up to the required specification when browsed in phone mode. 
*  This was tested and developed on Chrome, Firefox and an iPhone 6 Simulator (iOS 8.3).  IE <9 was largely ignored.
*  I followed John Papa's Angular Style guide throughout the project to make life easier for Angular 2 upgrade as a future enhancement.

