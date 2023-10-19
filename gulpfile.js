const { watch } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');

let srcPath = 'scss/seaglass.scss';
let destPath = 'dist/css';

gulp.task('default', function (done) {
  gulp.src(srcPath)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorToConsole: true,
      outputStyle: 'expanded'
    })
    .on('error', sass.logError))
    // .pipe(autoprefixer({
    //   overrideBrowserslist: ['last 2 versions'],
    //   cascade: false
    // }))
    .pipe(postcss())
    .pipe(gulp.dest(destPath))
    .pipe(sass({
      outputStyle: 'compressed'
    })) 
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(destPath))
    .on('end', done);
});

gulp.task('watch', function () {
  watch(srcPath, gulp.series('default'));
});