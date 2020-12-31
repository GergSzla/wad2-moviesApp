import '@percy/cypress';

 /* eslint-disable */

 const regEmail = "test1@gmail.com"
 const regPW = "test123"

Cypress.Commands.add('register', () => {
    cy.visit("/")
    cy.get("nav").find("div").eq(7).find("a").click();        
    cy.get('#reg_email').type(regEmail)
    cy.get('#reg-password').type(regPW)
    cy.get('#password-confirm').type(regPW)
    cy.get('.btnReg').click()
})

Cypress.Commands.add('incorrect_pass_register', () => {
    cy.visit("/")
    cy.get("nav").find("div").eq(7).find("a").click();        
    cy.get('#reg_email').type(regEmail)
    cy.get('#reg-password').type(regPW)
    cy.get('#password-confirm').type(regPW+"4")
    cy.get('.btnReg').click()
})

Cypress.Commands.add('logout', () => {
    cy.get("nav").find("#acc_nav").click();        
    cy.get('.btn-logout').click()
})

Cypress.Commands.add('incorrect_login', () => {
    cy.visit("/")
    cy.get('#email').type(regEmail)
    cy.get('#password').type("fsafafsa")
    cy.get('.btnLogin').click()
})

Cypress.Commands.add('login', () => {
    cy.visit("/")
    cy.get('#email').type(regEmail)
    cy.get('#password').type(regPW)
    cy.get('.btnLogin').click()
})