/**
 * @author Frank David Corona Prendes <frankdavid.corona@gmail.com>
 * @copyright MIT 2016 Frank David Corona Prendes
 * @description Tarea Gulp para la compresion de ficheros JS
 * @version 1.0.1
 */
(function () {
    'use strict';

    var gulp = require('gulp');
    var uglify = require('gulp-uglify');
    var pump = require('pump');
    var argv = require('yargs').argv;
    var recursive = require('recursive-readdir');
    var logger = require('gulp-logger');

    gulp.task('default', function () {
        recursive('"' + [argv.source + '"' + '/**/*.js'], function (err, file) {
            var options = {
                mangle: false
            };
            pump([
                gulp.src([argv.source + '/**/*.js'])
                    .pipe(logger({
                        before: 'Starting compression...',
                        after: 'Compression complete!',
                        showChange: true
                    }))
                    .pipe(uglify(options, uglify)),
                gulp.dest(argv.destino + '/dist/')
            ]);
        });
    });
})();

