const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function build() {
  return src('scss/seaglass.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
}

function watchTask() {
  watch(['scss/seaglass.scss'], build)
}

exports.default = series(build, watchTask)