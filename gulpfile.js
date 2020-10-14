'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
sass.compiler = require('node-sass');

//COMPILING SASS TO CSS
gulp.task('sass', function () {
	return gulp.src('./src/sass/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./dist/css'));
});
//WARCHING ALL OF THE .SCSS FILES
gulp.task('watch', function () {
	gulp.watch('./src/sass/*.scss', gulp.series('sass', 'minify-css'));
});

//MINIFING THE CSS
gulp.task('minify-css', () => {
	return gulp
		.src('dist/css/*.css')
		.pipe(
			cleanCSS({ debug: true }, (details) => {
				console.log(`${details.name}: ${details.stats.originalSize}`);
			})
		)
		.pipe(gulp.dest('dist/css/min'));
});
