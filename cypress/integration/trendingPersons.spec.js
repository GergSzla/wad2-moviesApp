
let persons;    // List of persons from TMDB

const filterByTitle = (personList, string) =>
personList.filter((m) => m.name.toLowerCase().search(string) !== -1);

/* eslint-disable */
describe("Trending Actors", () => {
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
    it("Should Show Trending Actors Page", () => {
      cy.get("nav").find(".trending_dropdown").click();
      cy.get("nav").find("#trending_actors").click();
      cy.get("h1").contains("Trending Actors");
      cy.get(".badge").contains(20);
    });
  })

  describe("Base test", () => {
    it("displays page header", () => {
      cy.get("h1").contains("Trending Actors");
      cy.get(".badge").contains(20);
    });
  })

  describe("Filtering", () => {
    describe("By Actor title", () => {
      it("should display Actors with 'p' in the title", () => {
        const searchString = 'p'
        const matchingPersons = filterByTitle(persons, searchString);
        cy.get("input").clear().type(searchString);
        cy.get(".card").should("have.length", matchingPersons.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingPersons[index].name);
        });
      })
      it("should display persons with 'o' in the title", () => {
        const searchString = "o";
        const matchingPersons = filterByTitle(persons, searchString);
        cy.get("input").clear().type(searchString);
        cy.get(".card").should("have.length", matchingPersons.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingPersons[index].name);
        })
      })
      it("should display no movie card (xyz) in the title", () => {
        const searchString = 'xyz'
        const matchingPersons = filterByTitle(persons, searchString);
        cy.get("input").clear().type(searchString);
        cy.get(".card").should("have.length", matchingPersons.length);
      })
    })
  });
})