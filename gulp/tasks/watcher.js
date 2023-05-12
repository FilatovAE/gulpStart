import { html } from './html.js'
import { scss } from './scss.js'
import { js } from './js.js'
import { img } from './img.js'
import { font } from './font.js'
import { resources } from './resources.js'

export const watcher = () => {
  $.plugins.gulp.watch($.path.html.watch, html)
  $.plugins.gulp.watch($.path.scss.watch, scss)
  $.plugins.gulp.watch($.path.js.watch, js)
  $.plugins.gulp.watch($.path.img.watch, img)
  $.plugins.gulp.watch($.path.font.watch, font)
  $.plugins.gulp.watch($.path.resources.watch, resources)
}
