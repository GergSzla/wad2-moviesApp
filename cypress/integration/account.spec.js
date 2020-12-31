
/* eslint-disable */
describe("Account Page", () => {
    before(() => {
        cy.login()
        cy.wait(500)
    });


    it("Should Navigate To Account Page", () => {
        cy.get("nav").find("#acc_nav").click();
        cy.get("h1").contains("Account")
        cy.get("h4").contains("Email")
        cy.get("h2").contains("test1@gmail.com")
    });

    it("Should Logout", () => {
        cy.logout()
    });


})