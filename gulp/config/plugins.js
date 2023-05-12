import { deleteAsync } from 'del'
import browserSync from 'browser-sync'
import gulp from 'gulp'
import newer from 'gulp-newer'
import gulpIf from 'gulp-if'
import rename from 'gulp-rename'
import fileInclude from 'gulp-file-include'
import typograf from 'gulp-typograf'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoPrefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import webpack from 'webpack-stream'
import babel from 'gulp-babel'
import imageMin from 'gulp-imagemin'
import sharpResponsive from 'gulp-sharp-responsive'
import cheerio from 'gulp-cheerio'
import svgSprite from 'gulp-svg-sprite'
import ttf2woff2 from 'gulp-ttf2woff2'

const sass = gulpSass(dartSass)

export const plugins = {
  del: deleteAsync,
  browserSync: browserSync,
  gulp: gulp,
  newer: newer,
  gulpIf: gulpIf,
  rename: rename,
  fileInclude: fileInclude,
  typograf: typograf,
  sass: sass,
  autoPrefixer: autoPrefixer,
  groupCssMediaQueries: groupCssMediaQueries,
  webpack: webpack,
  babel: babel,
  imageMin: imageMin,
  sharpResponsive: sharpResponsive,
  cheerio: cheerio,
  svgSprite: svgSprite,
  ttf2woff2: ttf2woff2
}
