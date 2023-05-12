export const resources = () => {
  return $.plugins.gulp
    .src($.path.resources.src)
    .pipe($.plugins.gulp.dest($.path.resources.dest))
    .pipe($.plugins.browserSync.stream())
}
