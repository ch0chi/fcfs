'use strict';

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sassGlob = require('gulp-sass-glob'),
    sassLint = require('gulp-sass-lint'),
    livereload = require('gulp-livereload'),
    del = require('del');
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');
const print = require('gulp-print').default;

gulp.task('clean-css', function() {
    return del([
        '../css'
    ], {
        force: true
    });
});

gulp.task('clean-js', function() {
    return del([
        '../js'
    ], {
        force: true
    });
});


gulp.task('sass', function() {
    gulp.src('../assets/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass().on('error', notify.onError('<%= error.message %>')))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../css'))
        .pipe(livereload());
});
gulp.task('js',function(){

    return gulp.src('../assets/js/*.js')
        .pipe(print())
        .pipe(babel())
        .pipe(sourcemaps.init())
        .pipe(concat("app.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('../js'));
});

gulp.task('watch', function() {

    gulp.watch('../assets/sass/**/*.scss', ['sass']);

});

gulp.task('watch',function(){

    gulp.watch('../assets/js/*.js', ['js']);

});

gulp.task('watch-css', ['clean-css','sass', 'watch']);

gulp.task('watch-js',['clean-js','js','watch']);
