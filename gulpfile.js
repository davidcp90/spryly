var gulp = require('gulp'),
    compressor = require('gulp-compressor'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    sass = require('gulp-sass'),
    merge = require('merge-stream'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    del = require('del');

gulp.task('styles', function() {
    var bootstrap = gulp.src('node_modules/bootstrap/dist/css/bootstrap.css');
    var spryly = gulp.src('sass/app.sass')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError));
    console.log(spryly);
    var buildCss = merge(bootstrap, spryly)
        .pipe(concat('spryly.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('css'));
    return buildCss;
});
gulp.task('dev', function() {
    gulp.watch('sass/**/*.sass', ['styles']);
});
