var gulp = require('gulp');
var webserver = require('gulp-webserver');
var mainBowerFiles = require('main-bower-files');


gulp.task('bower', function() {
    return gulp.src(mainBowerFiles())
               .pipe(gulp.dest('./dist'))
});

gulp.task('vendorJs', ['bower'], function(){
  return gulp.src(['./bower_components/jquery/dist/jquery.js'])
			.pipe(gulp.dest('./dist/js'))
})

gulp.task('webserver', function() {
  gulp.src('./dist/')
    .pipe(webserver({
      port:8888,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('default',['bower', 'vendorJs', 'webserver']);