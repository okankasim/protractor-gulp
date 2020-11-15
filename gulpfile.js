var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;
var notify = require('gulp-notify');
var webdriver_update = require('gulp-protractor').webdriver_update;
var webdriver_start = require('gulp-protractor').webdriver_standalone;
var args = require('yargs').argv;

gulp.task('webdriver_update', webdriver_update);
gulp.task('webdriver_start', webdriver_start);


gulp.task('holland', function() {
    gulp.src(["./tests/holland-america-tests.js"])
    .pipe(notify('Change Found', 'Executing Scripts'))
        .pipe(protractor({
            configFile:  "config.js",
            args: [
                '--params.url', 'https://www.hollandamerica.com',
                '--suite', 'holland'
            ]
        }))
        .on('error', function(e) { throw e })
})


gulp.task('seabourn', function() {
    gulp.src(["./tests/seabourn.js"])
    .pipe(notify('Change Found', 'Executing Scripts'))
        .pipe(protractor({
            configFile:  "config.js",
            args: [
                '--params.url', 'https://www.seabourn.com',
                '--suite', 'seabourn'
            ]
        }))
        .on('error', function(e) { throw e })
})

gulp.task('instagram', function() {
    gulp.src(["./tests/instagram.js"])
    .pipe(notify('Change Found', 'Executing Scripts'))
        .pipe(protractor({
            configFile:  "config.js",
            args: [
                '--params.url', 'https://www.instagram.com/',
                '--suite', 'instagram'
            ]
        }))
        .on('error', function(e) { throw e })
})


