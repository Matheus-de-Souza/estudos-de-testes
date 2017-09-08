const gulp        = require('gulp'),
			jasmine     = require('gulp-jasmine'),
			prettyError = require('gulp-prettyerror');

gulp.task('default', () =>
	gulp.src('*.spec.js')
		.pipe(prettyError())
		.pipe(jasmine())
);

gulp.task('watch', ['default'], function () {
	gulp.watch(['*.js'], ['default']);
});