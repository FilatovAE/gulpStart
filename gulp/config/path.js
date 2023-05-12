const pathSrc = './src'
const pathDest = './public'

export const path = {
  root: pathDest,

  html: {
    src: pathSrc + '/html/*.html',
    watch: pathSrc + '/html/**/*.html',
    dest: pathDest
  },

  scss: {
    src: pathSrc + '/scss/*.scss',
    vendor: pathSrc + '/scss/vendor/*.scss',
    watch: pathSrc + '/scss/**/*.scss',
    dest: pathDest + '/css'
  },

  js: {
    src: pathSrc + '/js/*.js',
    watch: pathSrc + '/js/**/*.js',
    dest: pathDest + '/js'
  },

  img: {
    src: pathSrc + '/img/*.{png,jpg,jpeg}',
    svg: pathSrc + '/img/svg/*.svg',
    watch: pathSrc + '/img/**/*.{png,jpg,jpeg}',
    dest: pathDest + '/img'
  },

  font: {
    src: pathSrc + '/fonts/*.{ttf,woff2}',
    watch: pathSrc + '/fonts/**/*.{ttf,woff2}',
    dest: pathDest + '/fonts'
  },

  resources: {
    src: pathSrc + '/resources/*.*',
    watch: pathSrc + '/resources/**/*.*',
    dest: pathDest + '/resources'
  }
}
