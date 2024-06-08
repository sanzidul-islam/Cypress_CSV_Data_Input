import Papa from 'papaparse';

function readCsv(filePath) {
  return new Cypress.Promise((resolve, reject) => {
    cy.readFile(filePath).then((csvString) => {
      Papa.parse(csvString, {
        header: true,
        complete: (results) => resolve(results.data),
        error: (error) => reject(error),
      });
    }).catch((error) => {
      reject(error);
    });
  });
}

module.exports = { readCsv };
