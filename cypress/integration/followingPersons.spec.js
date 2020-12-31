let persons; 


const filterByTitle = (personList, string) =>
    personList.filter((m) => m.name.toLowerCase().search(string) !== -1);

/* eslint-disable */
describe("Trending Actors Page", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/trending/person/day?api_key=${Cypress.env(
                "TMDB_KEY"
            )}`
        )
            .its("body")
            .then((response) => {
                persons = response.results
            })
        cy.visit("/");
        cy.login()
        cy.wait(500)
    })

    describe("Navigate to Trending Actors", () => {
        it("Should Show TV Shows", () => {
            cy.get("nav").find(".trending_dropdown").click();
            cy.get("nav").find("#trending_actors").click();
            cy.wait(1000)
            cy.get("h1").contains("Trending Actors");
            cy.get(".badge").contains(20);
        });
    })

    describe("Filtering", () => {
        describe("By Title", () => {
            it("Should Display Trending Actors With L", () => {
                const searchString = 'l'
                const matchingPersons = filterByTitle(persons, searchString);
                cy.get("input").clear().type(searchString);
                cy.get(".card").should("have.length", matchingPersons.length);
                cy.get(".card").each(($card, index) => {
                    cy.wrap($card)
                        .find(".card-title")
                        .should("have.text", matchingPersons[index].name);
                });
            })

            it("should display no Trending Actors Card (xyz) in the title, Badge = 0", () => {
                const searchString = 'xyz'
                const matchingPersons = filterByTitle(persons, searchString);
                cy.get("input").clear().type(searchString);
                cy.get(".card").should("have.length", matchingPersons.length);
                cy.get(".badge").contains(0);
            })
        })
    });

    describe("Add Trending Actors To Following", () => {
        it("Should add Trending Actors to following", () => {
            const searchString = 'u'
            const matchingPersons = filterByTitle(persons, searchString);
            cy.get("input").clear().type(searchString);

            cy.get(".card").should("have.length", matchingPersons.length);
            cy.get(".card").each(($card, index) => {
                cy.wrap($card)
                    .find(".card-title")
                    .should("have.text", matchingPersons[index].name);
                cy.wrap($card)
                    .find("#btn-follow")
                    .click();
            });
        });
    });

    describe("Trending Actors In Following", () => {
        it("Should Show Trending Actors In Following", () => {
            cy.get("nav").find(".following_dropdown").click();
            cy.get("nav").find("#following-actors").click();
            cy.get("h1").contains("Followed Actors");
            const searchString = 'u'
            const matchingPersons = filterByTitle(persons, searchString);
            cy.get(".card").should("have.length", matchingPersons.length);
            cy.get(".card").each(($card, index) => {
                cy.wrap($card)
                    .find(".card-title")
                    .should("have.text", matchingPersons[index].name);
            });
        });

    });
})