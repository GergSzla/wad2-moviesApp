


/* eslint-disable */
describe("Register", () => {

    before(() => {
        cy.visit("/")
    });

    describe("Layout Test", () => {
        it("Should Display Both Headers", () => {
            cy.get('.login_header').contains("Login");
            cy.get('.reg_header').contains("Register");
        });
    })

    describe("Register Error Test", () => {
        it("Should Return Error For Incorrect Passwords", () => {
            cy.incorrect_pass_register()
            cy.get('.err_reg').contains("Passwords do not match");
        });
    })

    describe("Register", () => {
        it("Should Register With No Errors", () => {
            cy.register()
            cy.get('.err_reg').should('not.be.visible')
        });
    })

    describe("Logout", () => {
        it("Should Logout", () => {
            cy.logout()
        });
    })

    describe("Login", () => {
        it("Should Return Error", () => {
            cy.incorrect_login()
            cy.get('.err_login').contains("Sign In Failed, Please Try Again!");
        });

        it("Should Login", () => {
            cy.login()
        });

        it("Should Redirect To Discover Movies (Home)", () => {
            cy.get(".pageTitle").contains("Discover Movies");
        });
    })
})