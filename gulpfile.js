//include gulp
var gulp = require('gulp');

//include plugins
var jshint = require('gulp-jshint')

var lintDir = ['app/*.js'],
    watchJSFiles = ['*.js', 'app/**', 'config/**', 'test/**', 'util/**']

//Lint Task
gulp.task('lint', function () {
    return gulp.src(lintDir)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
});

gulp.task('build', ['lint'])
gulp.task('watch', function () {
    gulp.watch(watchJSFiles, ['lint']);
});
