var gulp = require('gulp');
// SASS Tasks
var sass = require('gulp-sass');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var rename = require("gulp-rename");
// JS Tasks
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pump = require('pump');

// Build SASS
gulp.task('build-sass', function(){
  return gulp.src('app/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(rename({
      basename: "style",
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(gulp.dest('dist/css'))
});

// Build JS
gulp.task('build-js', function (cb) {
  pump([
        gulp.src('app/js/**/*.js'),
        concat('all.js'),
        uglify(),
        rename({
          basename: "main",
          suffix: ".min",
          extname: ".js"
        }),
        gulp.dest('dist/js')
    ],
    cb
  );
});

// Build All
gulp.task('build', ['build-sass', 'build-js'])

// Watchers
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['build-sass']);
  gulp.watch('app/js/**/*.js', ['build-js']);
});