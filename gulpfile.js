import { plugins } from './gulp/config/plugins.js'
import { path } from './gulp/config/path.js'
import { app } from './gulp/config/app.js'

import { clear } from './gulp/tasks/clear.js'
import { server } from './gulp/tasks/server.js'
import { watcher } from './gulp/tasks/watcher.js'
import { html } from './gulp/tasks/html.js'
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { img } from './gulp/tasks/img.js'
import { svg } from './gulp/tasks/svg.js'
import { font } from './gulp/tasks/font.js'
import { resources } from './gulp/tasks/resources.js'

global.$ = {
  plugins: plugins,
  path: path,
  app: app
}

const build = plugins.gulp.series(
  clear,
  plugins.gulp.parallel(html, scss, js, img, svg, font, resources)
)

const dev = plugins.gulp.series(build, plugins.gulp.parallel(watcher, server))

export default app.isProd ? build : dev
