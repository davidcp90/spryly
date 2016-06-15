//Import plugins
const gulp = require('gulp'),
    compressor = require('gulp-compressor'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    sass = require('gulp-sass'),
    merge = require('merge-stream'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    del = require('del'),
    typescript = require('gulp-typescript'),
    tscConfig = require('./tsconfig.json'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('styles',['clean'], function() {
    var bootstrap = gulp.src('node_modules/bootstrap/dist/css/bootstrap.css');
    var spryly = gulp.src('sass/app.sass')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError));
    var buildCss = merge(bootstrap, spryly)
        .pipe(concat('spryly.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css'));
    return buildCss;
});

gulp.task('clean', function() {
    return del('dist/**/*');
});

gulp.task('compile:ts', ['clean'], function() {
    return gulp
        .src('app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/app'))
});
gulp.task('copy:libs', ['clean'], function() {
    return gulp.src([
            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/angular2/bundles/angular2.dev.js',
            'node_modules/angular2/bundles/router.dev.js',
            'node_modules/core-js/client/shim.min.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/systemjs/dist/system.src.js',
        ])
        .pipe(gulp.dest('dist/lib'))
});
gulp.task('copy:assets', ['clean'], function() {
    return gulp.src(['app/**/*', 'index.html', 'systemjs.config.js', '!app/**/*.ts'], { base: './' })
        .pipe(gulp.dest('dist'))
});
gulp.task('build', ['styles', 'compile:ts', 'copy:libs', 'copy:assets']);
gulp.task('build:dev', ['build'], reload);
gulp.task('dev', ['build'] ,function() {
    browserSync({
    server: {
      baseDir: 'dist'
    }
  });
    gulp.watch(['app/**/*', 'index.html', 'sass/**/*.sass'], ['build:dev']);
});
gulp.task('default', ['build']);
