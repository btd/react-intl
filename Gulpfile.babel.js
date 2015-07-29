import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import header from 'gulp-header';
import footer from 'gulp-footer';

import through from 'through2';
import gutil from 'gulp-util';
const PluginError = gutil.PluginError;

import extractData from 'formatjs-extract-cldr-data';
import path        from 'path';
import serialize   from 'serialize-javascript';
import objectAssign from 'object-assign';

const defaultOptions = {
  locales       : undefined,
  pluralRules   : false,
  relativeFields: false,
};

const Readable = require('stream').Readable;

function gulpExtractCLDR(opts) {
  if(Array.isArray(opts)) opts = { locales: opts };
  opts = objectAssign({}, defaultOptions, opts);

  let data = extractData(opts);

  let files = Object.keys(data).reduce(function (_files, locale) {
    _files[locale] = serialize(data[locale]);
    return _files;
  }, {});

  let rs = Readable({ objectMode: true });
  rs._read = function() {
    let that = this;
    Object.keys(files).forEach((lang) => {
      let entry = lang + '.js';
      let file  = files[lang];

      that.push(new gutil.File({
        path: entry,
        cwd: './',
        contents: new Buffer(file)
      }));
    });
    that.push(null)
  };

  return rs;
}

gulp.task('en', () =>
  gulpExtractCLDR({
    locales: ['en'],
    pluralRules: true,
    relativeFields: true
  })
    .pipe(header('// GENERATED FILE\nexport default '))
    .pipe(footer(';'))
    .pipe(gulp.dest('./src'))
);

gulp.task('locales', () =>
  gulpExtractCLDR({
    pluralRules: true,
    relativeFields: true
  })
    .pipe(header('ReactIntl.__addLocaleData('))
    .pipe(footer(');'))
    .pipe(concat('locales.js'))
    .pipe(header('// GENERATED FILE\nvar ReactIntl = require("./react-intl");\n\n'))
    .pipe(gulp.dest('./lib'))
);

gulp.task('lib', ['en', 'locales'], () =>
  gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./lib'))
);
