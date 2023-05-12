export const svg = () => {
  return $.plugins.gulp
    .src($.path.img.svg)
    .pipe($.plugins.cheerio($.app.cheerio))
    .pipe($.plugins.svgSprite($.app.svgSprite))
    .pipe($.plugins.gulp.dest($.path.img.dest))
    .pipe($.plugins.browserSync.stream())
}
