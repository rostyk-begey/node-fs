const fs = require('fs');
const path = require('path');

const scriptName = path.basename(__filename).split('.').shift();



(() => {
  try {
    const data = fs.readFileSync('text.txt', { encoding: 'utf-8' });

    const words = data.split(/[,. ]/).filter(Boolean);
    for (let word of words) {
      const outFileName = `${scriptName}-${word.length % 2 === 0 ? 'even' : 'odd'}.txt`;
      fs.appendFileSync(outFileName, `${word}\n`);
    }
    console.log('success');
  } catch (e) {
    console.log(e);
  }
})()
