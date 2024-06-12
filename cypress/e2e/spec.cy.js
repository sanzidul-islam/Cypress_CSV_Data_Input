import loginpageobject from "../PageObjects/loginPage"
import datauploadpageobjects from "../PageObjects/dataupload"
import formpageobject from "../PageObjects/form";
const { readCsv } = require('../support/readCsv');
describe('Task',()=>{
  Cypress.on('uncaught:exception', (err, runnable) => {
      return false
      })

      const csvFilePath = 'cypress/fixtures/Dataset.csv'; // Path to your CSV file in the fixtures folder

    let csvData;

    before(() => {
    cy.log('Reading CSV file...');
    cy.task('readCsv', { filePath: csvFilePath }).then((data) => {
      csvData = data;
      cy.log('CSV data loaded successfully.');
    });
    });
   
      Cypress._.times(1, () => {

          it('Task Action', () => {

              cy.visit('https://staging-scweb.arcapps.org/')
  
              cy.fixture('data').then((data)=> {

                  const lb = new loginpageobject
                  const lc =new datauploadpageobjects
                  const lf = new formpageobject
                  lb.signinusername(data.username)
                  lb.signinpassword(data.password)
                  lb.submitlogin()
                  cy.wait(3000)

                  lc.EnterProvince();
                  lc.EnterDistrict();
                  lc.Searchfacility();
                  lc.Enter();
                  cy.wait(2000)
                  lc.Nrc();
                  lc.SearchNRC(data.searchtext)
                  lc.searchbutton();
                  cy.wait(2000)
                  lc.AttendtoPatient();
                  lc.Vital();
                  lc.AddVital();
                  cy.wait(2000)

                  cy.wrap(csvData).each((row, index) => {
                  cy.log(`Submitting row ${index + 1}`);

                  lf.enterWeight(row.Weight);
                  lf.enterHeight(row.Height);
                  lf.enterTemperature(row.Temperature);
                  lf.enterSystolic(row.Systolic);
                  lf.enterDiastolic(row.Diastolic);
                  lf.enterPulseRate(row.PulseRate);
                  lf.enterRespiratoryRate(row.RespiratoryRate);
                  lf.enterOxygenSaturation(row.OxygenSaturation);
                  lf.submitForm();
                  cy.wait(2000); 
                  lc.AddVital();

                });
              });
          })
      })
})
