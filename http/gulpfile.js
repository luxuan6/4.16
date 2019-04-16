const gulp = require('gulp');
const css = require('gulp-clean-css');
const sass = require('gulp-sass');

gulp.task('css', function() {
    return gulp.src('./src/css/sass/*.scss')
        .pipe(sass())
        .pipe(css())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('watch', function() {
    return gulp.watch('./src/css/sass/*.scss', gulp.series('css'))
})