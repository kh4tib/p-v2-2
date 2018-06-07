var gulp = require('gulp');

var sass = require('gulp-sass');

var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function(){
    return gulp.src('app/scss/style.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(postcss([ autoprefixer() ]))
      .pipe(gulp.dest('app/css'))
  });
