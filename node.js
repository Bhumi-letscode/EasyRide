const CleanCSS = require('clean-css');
const fs = require('fs');

fs.readFile('file.css', 'utf8', (err, data) => {
  if (err) throw err;

  const output = new CleanCSS({}).minify(data);
  fs.writeFile('file.min.css', output.styles, (err) => {
    if (err) throw err;
    console.log('CSS minification complete.');
  });
});