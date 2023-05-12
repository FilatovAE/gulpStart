export const scss = () => {
  return $.plugins.gulp
    .src($.path.scss.src, { sourcemaps: $.app.isDev })
    .pipe($.plugins.sass())
    .pipe($.plugins.autoPrefixer($.app.autoPrefixer))
    .pipe($.plugins.groupCssMediaQueries())
    .pipe($.plugins.gulp.dest($.path.scss.dest))
    .pipe($.plugins.sass($.app.outputStyle))
    .pipe($.plugins.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    .pipe($.plugins.gulp.src($.path.scss.vendor, { sourcemaps: $.app.isDev }))
    .pipe($.plugins.sass())
    .pipe($.plugins.gulp.dest($.path.scss.dest))
    .pipe($.plugins.sass($.app.outputStyle))
    .pipe($.plugins.rename({ suffix: '.min' }))
    .pipe($.plugins.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    .pipe($.plugins.browserSync.stream())
}
