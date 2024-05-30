class loginpageobject{

    txtusername = "input[placeholder='Enter Your Username']"
    txtuserpass= "input[placeholder='Enter Your Password']"
    btnlogin = "button[type='submit']"

    signinusername(username){
        cy.get(this.txtusername).type(username)
    }
    // Type password
    signinpassword(password){
        cy.get(this.txtuserpass).type(password)
    }
    // Submit sign in button
    submitlogin(){
        cy.get(this.btnlogin).click({force:true})
    }

}
export default loginpageobject