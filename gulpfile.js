var gulp = require('gulp');
// SASS Tasks
var sass = require('gulp-sass');
// CSS Tasks
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
// JS Tasks
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

// Build SASS
gulp.task('build-sass', function(){
  return gulp.src('app/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('dist/css'))
});

// Build JS
gulp.task('build-js', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
}); 

//Build CSS
// gulp.task('build-css', function(){
//   return gulp.src('app/*.html')
//     .pipe(useref())
//     .pipe(gulpIf('*.css', cssnano()))
//     .pipe(gulp.dest('dist'))
// }); 

gulp.task('build', ['build-sass', 'build-js'])