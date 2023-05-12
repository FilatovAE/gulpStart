export const server = () => {
  $.plugins.browserSync.init({
    server: {
      baseDir: $.path.root
    },
    notify: false
  })
}
