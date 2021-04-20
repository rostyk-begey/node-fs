const fs = require('fs');
const path = require('path');

const scriptName = path.basename(__filename).split('.').shift();

fs.readFile('text.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const words = data.split(/[,. ]/).filter(Boolean);
  for (let word of words) {
    const outFileName = `${scriptName}-${word.length % 2 === 0 ? 'even' : 'odd'}.txt`;
    fs.appendFile(outFileName, `${word}\n`, (err) => {
      if (err) console.error(err);
    });
  }
  console.log('success');
});
