import loginpageobject from "../PageObjects/loginPage"
import datauploadpageobjects from "../PageObjects/dataupload"
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
              
                      cy.get("input[placeholder='Enter Weight (kg)']").clear();
                      cy.get("input[placeholder='Enter Weight (kg)']").type(row.Weight);
                      cy.get("input[placeholder='Enter Height (cm)']").clear()
                      cy.get("input[placeholder='Enter Height (cm)']").type(row.Height);
                      cy.get("input[placeholder='Enter Temperature (c)']").type(row.Temperature);
                      cy.get("input[placeholder='Enter Systolic (mmHg)']").type(row.Systolic);

                      cy.get("input[placeholder='Enter Diastolic (mmHg)']").type(row.Diastolic);
                      cy.get("input[placeholder='Enter Pulse Rate (bpm)']").type(row.PulseRate);
                      cy.get("input[placeholder='Enter Respiratory Rate (bpm)']").type(row.RespiratoryRate);

                      cy.get("input[placeholder='Enter Oxygen Saturation (%)']").type(row.OxygenSaturation);
                      cy.get("button[type='submit']").click({force:true})
                    
                      cy.wait(2000);  // Wait for 1 second (1000 ms)
                      lc.AddVital();
                    });
                  });

                  




                  
                  
                 
              
                  
              })
          })
  
      })
