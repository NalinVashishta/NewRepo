class Contactpage{


    getFirstnameEditbox()
    {
        return cy.get("[name='firstname']")    
    }

    getlastnameEditbox()
    {
        return cy.get("[name='lastname']")
    }
    getEmail()
    {
        return cy.get("[name='email']")
    }
    getMobile()
    {
        return cy.get("[name='mobilephone']")
    }
  
}
export default Contactpage;