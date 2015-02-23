var manifest= require('./package.json')


var gulp= require('gulp')

var gulpNgmin= require('gulp-ngmin')
var gulpNgAnnotate= require('gulp-ng-annotate')
var gulpUglify= require('gulp-uglify')
var gulpConcat= require('gulp-concat')
var gulpRename= require('gulp-rename')
var gulpSass= require('gulp-sass')
var gulpAutoprefixer= require('gulp-autoprefixer')

gulp.task('scripts', function () {
    return gulp.src(['angularTask/src/app/config.js', 'angularTask/src/app/collection/**/*.js','angularTask/src/app/hello/**/*.js','angularTask/src/app/directives/**/*.js'])
        .pipe(gulpConcat('app.js'))
        .pipe(gulp.dest('angularTask/src/app'))
        .pipe(gulpNgmin())
        .pipe(gulpUglify())
        .pipe(gulpRename({suffix: '.min'}))
        .pipe(gulp.dest('angularTask/src/app'))
    ;
})

gulp.task('styles', function () {
    return gulp.src(['angularTask/src/app/assets/styles/main.scss'])
        .pipe(gulpSass())
        .pipe(gulpAutoprefixer())
        .pipe(gulp.dest('angularTask/src/app/assets/styles'))
    ;
})

gulp.task('default', ['scripts', 'styles'])


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

