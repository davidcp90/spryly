import 'es6-shim';
import 'reflect-metadata';
require('zone.js/dist/zone');
import 'bower_components/better-dom/dist/better-dom.js';
import 'bower_components/better-i18n-plugin/dist/better-i18n-plugin.js';
import 'bower_components/better-time-element/dist/better-time-element.js';
import 'bower_components/better-emmet-plugin/dist/better-emmet-plugin.js';
import 'bower_components/better-dateinput-polyfill/dist/better-dateinput-polyfill.js';
import 'ts-helpers';

if (process.env.ENV === 'build') {
  // Production

} else {
  // Development

  Error['stackTraceLimit'] = Infinity;

  require('zone.js/dist/long-stack-trace-zone');
}
