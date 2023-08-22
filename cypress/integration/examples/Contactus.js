/// <reference types="Cypress" />
import Contactpage from "../PageObjects/ContactUs"
const contactpage=new Contactpage()

describe('Contactus page-test suite',function()
{
//part of before hook
before(function(){

    //access fixture data
    cy.fixture('example').then(function(data)
    {
     this.fetchData=data
    })
})

//Test case
it('Contactus page test cases',function()
{

cy.visit('https://www.founderandlightning.com/contact')// navigating to the ContactUs page
cy.get('#hs-eu-confirmation-button').click()//Website using cookies, accepting the button for cookies


//Verify the error messgae is shown after clicking submit button without filling any field
cy.get('.actions > .btn').click({force:true})
cy.get('.hs-main-font-element').should('have.text','Please complete this required field.Please complete this required field.Please complete this required field.Please complete this required field.Please complete this required field.Please complete all required fields.')


//Verify current url and text on the page(getting the current url and verify the url and verify the Heading of the page )
cy.url().should('include','contact')
cy.get('.col-md-6').should("have.text","\n        Exciting\n        Idea\n        you'd like to\n        Share?\n      ")


//filling the information & clicking on submit using Page object design pattern & Data Driven concept
contactpage.getFirstnameEditbox().type(this.fetchData.fname,{force:true}).scrollIntoView()
contactpage.getlastnameEditbox().type(this.fetchData.lname,{force:true})
contactpage.getEmail().type(this.fetchData.email,{force:true})
contactpage.getMobile().type(this.fetchData.mobile,{force:true})

cy.get(("[name='how_did_you_hear_about_us_']")).select('Instagram',{force:true})
cy.get("[name='message']").type('Filling the important information',{force:true})


cy.get('.actions > .btn').click({force:true})
cy.scrollTo('top')

})


})