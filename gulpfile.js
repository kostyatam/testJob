var manifest= require('./package.json')


var gulp= require('gulp')

var gulpNgmin= require('gulp-ngmin')
var gulpNgAnnotate= require('gulp-ng-annotate')
var gulpUglify= require('gulp-uglify')
var gulpConcat= require('gulp-concat')
var gulpRename= require('gulp-rename')
var gulpSass= require('gulp-sass')
var gulpAutoprefixer= require('gulp-autoprefixer')
var gulpJade= require('gulp-jade')



gulp.task('scripts', function () {
    return gulp.src(['src/scripts/*.js'])
        .pipe(gulp.dest('release/scripts'))
        .pipe(gulpNgmin())
        .pipe(gulpUglify())
        .pipe(gulpRename({suffix: '.min'}))
        .pipe(gulp.dest('release/scripts'))
    ;
})

gulp.task('styles', function () {
    return gulp.src(['src/styles/dodo.scss'])
        .pipe(gulpSass())
        .pipe(gulp.dest('release/styles'))
    ;
})

gulp.task('images', function () {
    return gulp.src(['src/images/*.*'])
        .pipe(gulp.dest('release/images'))
    ;
})


gulp.task('watch', function () {
    gulp.watch(['src/scripts/**/*.js'], ['scripts'])
    gulp.watch(['src/styles/**/*.scss'], ['styles'])
    gulp.watch(['src/**/*.jade'], ['templates'])
})
gulp.task('default', ['scripts', 'styles', 'images', 'watch'])


gulp.task('cssTask@scripts', function () {
    return gulp.src([
            ['cssTask/js/*.js'].join('')
        ])
        .pipe(gulp.dest('cssTask/release/js'))
    ;
})

gulp.task('cssTask@styles', function () {
    return gulp.src([
            ['cssTask/styles/*.scss'].join('')
        ])
        .pipe(gulpSass())
        .pipe(gulpAutoprefixer())
        .pipe(gulp.dest('cssTask/release/styles'))
    ;
})

gulp.task('cssTask@template', function () {
    return gulp.src([
            ['cssTask/*.html'].join('')
        ])
        .pipe(gulp.dest('cssTask/release'))
    ;
})

gulp.task('cssTask@watch', function () {
    gulp.watch([
        ['cssTask/js/*.js'].join('')
    ], ['cssTask@scripts'])
    gulp.watch([
        ['cssTask/styles/*.scss'].join('')
    ], ['cssTask@styles'])
    gulp.watch([
        ['cssTask/*.html'].join('')
    ], ['cssTask@template'])
})

gulp.task('cssTask', ['cssTask@scripts', 'cssTask@styles', 'cssTask@watch', 'cssTask@template'])

