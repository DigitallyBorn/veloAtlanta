var gulp = require('gulp');
var bower = require('gulp-bower');
var bowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var less = require('gulp-less');
var minifyHTML = require('gulp-minify-html');

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

process.env.NODE_ENV = 'development';

// Default task: debug mode
gulp.task('default', ['browser-sync', 'build'], function() {
  gulp.watch(paths.source.html, ['build.html', browserSync.reload]);
  gulp.watch(paths.source.js, ['build.js', browserSync.reload]);
  gulp.watch(paths.source.less, ['build.less']);
});

// Entry task for deployment to production
gulp.task('deploy', ['build'], function() {
  process.env.NODE_ENV = 'production';
  return gulp
    .task('deploy.bower');
});


gulp.task('build', ['build.html', 'build.js', 'build.bower', 'build.less']);

gulp.task('build.bower', function() {
  bower();

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
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest(paths.dist.css));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: paths.debug.html
    }
  });
});
