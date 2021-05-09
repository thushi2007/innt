import 'zone.js/dist/zone-node';

import {ngExpressEngine} from '@nguniversal/express-engine';
import * as express from 'express';
import {join} from 'path';

import {AppServerModule} from './src/main.server';
import {APP_BASE_HREF} from '@angular/common';
import {existsSync} from 'fs';

import 'localstorage-polyfill';

const expressStaticGzip = require('express-static-gzip');
const sourceDist = 'browser';
//const sourceDist = 'dist/InnT/browser';

const domino = require('domino');
const fs = require('fs');
const path = require('path');
const templateA = fs.readFileSync(path.join(sourceDist, 'index.html')).toString();
const win = domino.createWindow(templateA);
win.Object = Object;
win.Math = Math;

global['window'] = win;
global['File'] = win.File;
global['Node'] = win.Node;
global['navigator'] = win.navigator;
global['Event'] = win.Event;
global['Event']['prototype'] = win.Event.prototype;
global['document'] = win.document;
global['localStorage'] = localStorage;

export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), sourceDist);
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get('*', (req, res) => {
    res.render(indexHtml, {req, providers: [{provide: APP_BASE_HREF, useValue: req.baseUrl}]});
  });

  server.use('/', expressStaticGzip(path.join(__dirname + '/dist'), {
    enableBrotli: true,
    index: 'main.js'
  }));

  return server;
}

function run(): void {
  const port = process.env.PORT || 4200;

  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
