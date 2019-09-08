const Papa = require('papaparse');

module.exports = file => {
  let x = 0;
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: function(results) {
        const targets = [
          ['rs12127425', 'GG'],
          ['rs28444699', 'AA'],
          ['rs548049170', 'TT'],
          ['i701671', 'G']
        ];
        targets.forEach(target => {
          results.data.forEach(rsID => {
            if (target[0] === rsID[0] && target[1] === rsID[3]) {
              x++;
            }
          });
        });

        resolve(x);
      },
      comments: true,
      fastMode: true
    });
  });
};

/*
EXAMPLE FILE:

const fs = require('fs');
const genomeParser = require('./genomeParser');
const file = fs.createReadStream(
  'genome_Dina_Deljanin_v5_Full_20190303124251.txt'
);

(async () => console.log(await genomeParser(file)))();

*/
