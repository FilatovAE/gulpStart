export const js = () => {
  return $.plugins.gulp
    .src($.path.js.src, { sourcemaps: $.app.isDev })
    .pipe($.plugins.babel())
    .pipe($.plugins.webpack($.app.webpack))
    .pipe($.plugins.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
    .pipe($.plugins.browserSync.stream())
}
