var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

var paths = {
	'scripts' : ['./src/js/lib/testing.js']
}

gulp.task('browserify',function(){
	return gulp.src(paths.scripts)
							.pipe(browserify({
								insertGlobals:true
							}))
							.pipe(uglify())
							.pipe(gulp.dest('./build/js'));
});


gulp.task('watch',function(){
	gulp.watch(paths.scripts,['browserify']);
});

gulp.task('default',['browserify']);