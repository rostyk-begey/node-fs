const fs = require('fs/promises');
const path = require('path');

const scriptName = path.basename(__filename).split('.').shift();

(async () => {
  try {
    const data = await fs.readFile('text.txt', { encoding: 'utf-8' });
    const words = data.split(/[,. ]/).filter(Boolean);
    for (let word of words) {
      const outFileName = `${scriptName}-${word.length % 2 === 0 ? 'even' : 'odd'}.txt`;
      await fs.appendFile(outFileName, `${word}\n`);
    }
    console.log('success');
  } catch (e) {
    console.error(e);
  }
})();
