const isProd = process.argv.includes('--prod')
const isDev = !isProd

export const app = {
  isProd: isProd,
  isDev: isDev,

  typograf: {
    locale: ['ru', 'en-US']
  },

  autoPrefixer: {
    cascade: false,
    grid: true
  },

  outputStyle: {
    outputStyle: 'compressed'
  },

  webpack: {
    mode: isProd ? 'production' : 'development'
  },

  sharpResponsive: {
    formats: [{ format: 'webp' }, { format: 'avif' }],
    includeOriginalFile: false
  },

  svgMin: {
    js2svg: {
      pretty: true
    }
  },

  cheerio: {
    run: function ($) {
      $('[fill]').removeAttr('fill')
      $('[stroke]').removeAttr('stroke')
      $('[style]').removeAttr('style')
    },
    parserOptions: {
      xmlMode: true
    }
  },

  svgSprite: {
    mode: {
      stack: {
        sprite: '../sprite.svg'
      }
    }
  }
}
