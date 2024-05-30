class datauploadpageobjects{

    Province ="select[placeholder='Enter Province']"
    District ="select[placeholder='Enter District']"
    facility ="input[placeholder='Search facility']"
    facilityvalue="body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3)"
    btnEnter= "button[type='submit']"
    btnnrc="body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > button:nth-child(2)"
    search= "input[placeholder='Search by NRC']"
    btnsearch="button[type='submit']"
    btnAttendtoPatient= "button[class='text-[11px] xl:px-[12px] py-0.5 md:py-1 2xl:px-[15px] hover:text-white text-whiteColor border rounded-full px-2 bg-greenColor hover:bg-greenHover !border-greenColor']"
    btnVital="body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)"
    btnAddVital="button[type='button']"
    EnterProvince(){
        cy.get(this.Province).select('Lusaka').should('have.value','1')
    }
    EnterDistrict(){
        cy.get(this.District).select('Lusaka').should('have.value','5')

    }
    Searchfacility(){
        cy.get(this.facility).click({force:true})
        cy.get(this.facilityvalue).click({force:true})

    }
    Enter(){
        cy.get(this.btnEnter).click({force:true})
    }
    Nrc(){
        cy.get(this.btnnrc).click({force:true})

    }
    SearchNRC(searchtext){
        cy.get(this.search).type(searchtext)
    }
    searchbutton(){
        cy.get(this.btnsearch).click({force:true})
    }
    AttendtoPatient(){
        cy.get(this.btnAttendtoPatient).click({force:true})
    }
    Vital(){
        cy.get(this.btnVital).click({force:true})
    }
    AddVital(){
        cy.get(this.btnAddVital).click({force:true})
    }





}
export default datauploadpageobjects