import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default function renderHtml(data, body) {
  return `
    <!DOCTYPE html>
    ${ReactDOMServer.renderToStaticMarkup(
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Patrick Hooper</title>
          <meta name="description" content="Web (app) developer, life enthusiast, University of Michigan alumnus, and all-around neat guy living in Ann Arbor, MI. Also, Marie Hooper's biggest fan." />
          <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,700|Titillium+Web:400" rel="stylesheet" />
          {Object.keys(data.compilation.assets)
            .filter(asset => asset.match(/\.css(\.map)?$/))
            .map(stylesheet => <link href={`/${stylesheet}`} rel="stylesheet" />)
          }
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="16x16 32x32 48x48" href="/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fa755a" />
          <meta name="theme-color" content="#ffffff" />
        </head>
        {body || <body><div id="app" /></body>}
      </html>,
    )}
  `;
}
