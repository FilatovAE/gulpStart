export const html = () => {
  return $.plugins.gulp
    .src($.path.html.src)
    .pipe($.plugins.fileInclude())
    .pipe($.plugins.typograf($.app.typograf))
    .pipe($.plugins.gulp.dest($.path.html.dest))
    .pipe($.plugins.browserSync.stream())
}
