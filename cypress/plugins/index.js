const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

module.exports = (on, config) => {
  on('task', {
    readCsv({ filePath }) {
      const csvPath = path.resolve(__dirname, '..', filePath);
      return new Promise((resolve, reject) => {
        fs.readFile(csvPath, 'utf8', (err, data) => {
          if (err) {
            return reject(err);
          }
          Papa.parse(data, {
            header: true,
            complete: (results) => resolve(results.data),
            error: (error) => reject(error),
          });
        });
      });
    }
  });
};
