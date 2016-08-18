var gulp  = require('gulp'),
    gutil = require('gulp-util'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	sonar = require('gulp-sonar'),
	Server = require('karma').Server;

gulp.task('package', ['test'], function() {
	gulp.src(['./src/**/*.js'])
      .pipe(concat('app.js'))
	  .pipe(gulp.dest('./build/js'));
});

gulp.task('clean', function() {
	gulp.src('./build', {read: false}).pipe(clean());
	gulp.src('./.sonar', {read: false}).pipe(clean());
	gulp.src('./reports', {read: false}).pipe(clean());
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
	junitReporter: {
		outputFile: __dirname + '/reports/junit/TESTS-xunit.xml'
	},
		
	coverageReporter: {
		type:   'lcov',
		dir:    'reports',
		subdir: 'coverage'
	}
  }, done).start();
});

gulp.task('sonar', function () {
    var options = {
        sonar: {
            projectKey: 'sonar:js-calculator:1.0.0',
            projectName: 'js-calculator',
            projectVersion: '1.0.0',
            // comma-delimited string of source directories 
            sources: 'src',
            language: 'js',
            sourceEncoding: 'UTF-8',
            javascript: {
                lcov: {
                    reportPath: 'reports/coverage/lcov.info'
                }
            },
            exec: {
                // All these properties will be send to the child_process.exec method (see: https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback ) 
                // Increase the amount of data allowed on stdout or stderr (if this value is exceeded then the child process is killed, and the gulp-sonar will fail). 
                maxBuffer : 1024*1024
            }
        }
    };
 
    // gulp source doesn't matter, all files are referenced in options object above 
    return gulp.src('thisFileDoesNotExist.js', { read: false })
        .pipe(sonar(options))
        .on('error', gutil.log);
});

gulp.task('default', ['clean', 'package'], function() {});