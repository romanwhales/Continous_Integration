var gulp = require('gulp');
var minify = require('gulp-minify');
var size = require('gulp-size');
var jshint = require('gulp-jshint');
var karma = require('karma').Server;
var gutil = require('gulp-util');
var htmlmin = require('gulp-htmlmin');
var cleancss = require('gulp-clean-css');
var glob = require('glob');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var es = require('event-stream');
var buffer = require('vinyl-buffer');
var del = require('del');
var concat = require('gulp-concat');
var replace = require('gulp-replace');

gulp.task('clean',function(){
    del(['prod/*','scripts/bundles/*']);
});

gulp.task('html',['clean'],function(){
    return gulp.src(['index.html','views/*.html'])
        .pipe(replace('href="views\\','href="'))
        .pipe(replcae('href="..\\"','href="'))
        .pipe(htmlreplace({
            css:[
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'css/all.css'
            ],
            node_modules:[
                'node_modules/angular/angular.min.js',
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/bootstrap/dist/js/bootstrap.min.js'
            ],
            js:{
                src: 'scripts',
                tpl: '<script src="%s/%f.bundle.js"></script>'
            }
        }))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('prod/views'));
})

gulp.task('js',function(done){
    var minifyOpts = require('./minify.conf.js');
    glob('./scripts/*',function(err,files){
        if(err){
            done(err);
        }
        var tasks = files.map(function(file){
            return browserify({
                entries:[file],
                debug:true
            })
            .bundle()
            .pipe(source(file))
            .pipe(buffer())
            .pipe(rename({
                extname:'.bundle.js',
                dirname:''
            }))
            .pipe(gulp.dest('script/bundles'))
            .pipe(size({
                title:'Before minification',
                showFiles:true
            }))
            .pipe(size({
                title:'Before Minification',
                showFiles:true
            }))
            .pipe(minify(minifyOpts))
            .pipe(size({
                title:'After minification',
                showFiles:true
            }))
            .pipe(gulp.dest('prod/scripts'));
        });
        es.merge(tasks).on('end',done);
    })
})

gulp.task('default',function(){
    console.log('We are running tasks ...');
})

gulp.task('copycss',function(){
    gulp.src('css/*.css').pipe(gulp.dest('css_copy'));
});

gulp.task('lint',function(done){
    return gulp.src('scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
})

gulp.task('css',['clean'],function(){
    return gulp.src('css/*.css')
        .pipe(concat('all.css'))
        .pipe(cleancss({
            compatibility:'ie9'
        }))
        .pipe(gulp.dest('prod/css'));
})

/**
 * Karma Test Run
 */
gulp.task('test',function(){
    new karma({
        configFile:__dirname + '/karma.conf.js'
    },function(err){
        if(err > 0){
            return done(new gutil.PluginError('karma','Karma tests failed'))
        }
        return done();
    }).start();
});

/**
 * Minify html task
 */
gulp.task('minify-html',function(){
    return gulp.src(['index.html','views/*.html'])
        .pipe(htmlmin({
            collapseWhitespace:true
        }))
        .pipe(gulp.dest('prod/views'))
})

/**
 * minify css
 */
gulp.task('minify-css',function(){
    return gulp.src('css/*')
        .pipe(cleancss({
            compatibility:'ie9'
        }))
        .pipe(gulp.dest('prod/css'));
})

gulp.task('minify',['lint'],function(){
    gulp.src('scripts/*.js')
        .pipe(size({
            title:'Before Minification',
            showFiles:true,
            showTotal:true,
            // pretty:false
        }))
        .pipe(minify({
            ext:{
                // src:'.debug.js',
                min:'.min.js'
            },
            noSource:true
        }))
        .pipe(size({
            title:'After Minification',
            showFiles:true,
            showTotal:true,
        }))
        .pipe(gulp.dest('prod'));
})

// gulp.watch('css/*.css',['copycss']);
// gulp.watch('scripts/*.js',['minify']);
gulp.watch(['css/*.css', 'views/*.html', 'index.html'], ['build']);
gulp.watch('scripts/*.js', ['default']);
gulp.task('default',['copycss','minify']);