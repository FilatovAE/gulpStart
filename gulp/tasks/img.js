export const img = () => {
  return $.plugins.gulp
    .src($.path.img.src)
    .pipe($.plugins.newer($.path.img.dest))
    .pipe($.plugins.gulpIf($.app.isProd, $.plugins.imageMin()))
    .pipe(
      $.plugins.gulpIf(
        $.app.isProd,
        $.plugins.sharpResponsive($.app.sharpResponsive)
      )
    )
    .pipe($.plugins.gulp.dest($.path.img.dest))
    .pipe($.plugins.browserSync.stream())
}
