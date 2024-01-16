const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

function sassCompilador(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

exports.sass = sassCompilador