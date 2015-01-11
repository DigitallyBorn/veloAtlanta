var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyHTML = require('gulp-minify-html');
var server = require('gulp-express');

var paths = {
  source: {
    html: 'src/html/**/*.html',
    js: 'src/html/**/*.js',
    less: 'src/less/**/*.less'
  },
  debug: {
    html: 'debug/',
    js: 'debug/',
    css: 'debug/css/',
    bower: 'debug/lib/'
  },
  dist: {
    html: 'dist/',
    js: 'dist/',
    css: 'dist/css/',
    bower: 'dist/lib/'
  }
};

gulp.task('heroku:production', function() {
  console.log('Welcome to heroku in production!');
  process.env.NODE_ENV = 'production';
});

// Default task: debug mode
gulp.task('default', ['build'], function() {
  server.run({
    file: 'app.js'
  });
  gulp.watch(paths.source.html, ['build.html'], server.notify);
  gulp.watch(paths.source.js, ['build.js'], server.notify);
  gulp.watch(paths.source.less, ['build.less'], server.notify);
});

// Entry task for deployment to production
gulp.task('deploy', ['build', 'deploy.bower']);

gulp.task('build', ['build.html', 'build.js', 'build.bower', 'build.less']);

gulp.task('build.bower', function() {
  return gulp.src(bowerFiles())
    .pipe(gulp.dest(paths.debug.bower));
});

gulp.task('deploy.bower', function() {
  return gulp.src(bowerFiles())
    .pipe(gulp.dest(paths.dist.bower));
});

gulp.task('build.html', function() {
  return gulp.src(paths.source.html)
    .pipe(gulp.dest(paths.debug.html))
    .pipe(minifyHTML({ empty: true, conditionals: true}))
    .pipe(gulp.dest(paths.dist.html));
});

gulp.task('build.js', function() {
  return gulp.src(paths.source.js)
    .pipe(gulp.dest(paths.debug.js))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.js));
});

gulp.task('build.less', function() {
  return gulp.src(paths.source.less)
    .pipe(less())
    .pipe(gulp.dest(paths.debug.css))
    .pipe(gulp.dest(paths.dist.css));
});
