var gulp = require('gulp');
var bower = require('gulp-bower');
var bowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var less = require('gulp-less');

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
gulp.task('default', ['build'], function() {
  browserSync({
    server: {
      baseDir: paths.debug.html
    }
  });

  gulp.watch(paths.source.html, ['build.html', reload]);
  gulp.watch(paths.source.js, ['build.js', reload]);
  gulp.watch(paths.source.less, ['build.less'], function() {
    reload({stream: true});
  });
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
    .pipe(gulp.dest(paths.debug.css));
});
