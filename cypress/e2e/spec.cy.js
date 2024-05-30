import loginpageobject from "../PageObjects/loginPage"
import datauploadpageobjects from "../PageObjects/dataupload"
describe('Task',()=>{
  Cypress.on('uncaught:exception', (err, runnable) => {
      return false
      })

      
      Cypress._.times(1, () => {

          it('Task Action', () => {
              cy.visit('https://staging-scweb.arcapps.org/')
  
              cy.fixture('data').then((data)=> {

                  const lb = new loginpageobject
                  const lc =new datauploadpageobjects
                  lb.signinusername(data.username)
                  lb.signinpassword(data.password)
                  lb.submitlogin()
                  cy.wait(2000)

                  lc.EnterProvince();
                  lc.EnterDistrict();
                  lc.Searchfacility();
                  lc.Enter();
                  lc.Nrc();
                  lc.SearchNRC(data.searchtext)
                  lc.searchbutton();
                  lc.AttendtoPatient();
                  lc.Vital();
                  lc.AddVital();




                  
                  
                 
              
                  
              })
          })
  
      })

})