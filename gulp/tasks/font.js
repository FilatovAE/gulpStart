export const font = () => {
  return $.plugins.gulp
    .src($.path.font.src)
    .pipe($.plugins.newer($.path.font.dest))
    .pipe($.plugins.ttf2woff2())
    .pipe($.plugins.gulp.dest($.path.font.dest))
    .pipe($.plugins.browserSync.stream())
}
