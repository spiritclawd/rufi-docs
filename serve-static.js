const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8094;
const BUILD_DIR = path.join(__dirname, 'build');

const MIME = {
  '.html': 'text/html', '.js': 'application/javascript',
  '.css': 'text/css', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff',
  '.ttf': 'font/ttf', '.txt': 'text/plain',
};

http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  let filePath = path.join(BUILD_DIR, urlPath);

  // Try exact path, then .html, then 404.html
  const tryPaths = [filePath, filePath + '.html', filePath + '/index.html'];
  let found = null;
  for (const p of tryPaths) {
    if (fs.existsSync(p) && fs.statSync(p).isFile()) { found = p; break; }
  }

  if (!found) {
    // SPA fallback
    const notFound = path.join(BUILD_DIR, '404.html');
    if (fs.existsSync(notFound)) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      fs.createReadStream(notFound).pipe(res);
    } else {
      res.writeHead(404); res.end('Not found');
    }
    return;
  }

  const ext = path.extname(found);
  res.writeHead(200, {
    'Content-Type': MIME[ext] || 'application/octet-stream',
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000',
  });
  fs.createReadStream(found).pipe(res);
}).listen(PORT, () => console.log(`RUFi Docs serving on port ${PORT}`));
