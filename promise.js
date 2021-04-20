const fs = require('fs/promises');
const path = require('path');

const scriptName = path.basename(__filename).split('.').shift();

fs
  .readFile('text.txt', { encoding: 'utf-8' })
  .then((data) => {
    const promises = data
      .split(/[,. ]/)
      .filter(Boolean)
      .map((word) => {
        const outFileName = `${scriptName}-${word.length % 2 === 0 ? 'even' : 'odd'}.txt`;
        return fs.appendFile(outFileName, `${word}\n`);
      });
    return Promise.all(promises);
  })
  .then(() => console.log('success'))
  .catch(console.error);
