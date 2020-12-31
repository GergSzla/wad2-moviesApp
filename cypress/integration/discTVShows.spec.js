let tvs;    // List of movies from TMDB


const filterByTitle = (tvList, string) =>
    tvList.filter((m) => m.name.toLowerCase().search(string) !== -1);

/* eslint-disable */
describe("Discover TV Shows Page", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`
        )
            .its("body")
            .then((response) => {
                tvs = response.results
            })
        cy.visit("/");
        cy.login()
        cy.wait(500)
    })

    describe("Navigate to Discover TV Shows", () => {
        it("Should Show TV Shows", () => {
            cy.get("nav").find(".disc_dropdown").click();
            cy.get("nav").find("#disc-tvs_nav").click();
            cy.get("h1").contains("Discover TV Shows");
            cy.get(".badge").contains(20);
        });
    })

    describe("Filtering", () => {
        describe("By Title", () => {
            it("Should Display TV Shows With L", () => {
                const searchString = 'l'
                const matchingTvs = filterByTitle(tvs, searchString);
                cy.get("input").clear().type(searchString);
                cy.get(".card").should("have.length", matchingTvs.length);
                cy.get(".card").each(($card, index) => {
                    cy.wrap($card)
                        .find(".card-title")
                        .should("have.text", matchingTvs[index].name);
                });
            })

            it("should display no TV Show Card (xyz) in the title, Badge = 0", () => {
                const searchString = 'xyz'
                const matchingTvs = filterByTitle(tvs, searchString);
                cy.get("input").clear().type(searchString);
                cy.get(".card").should("have.length", matchingTvs.length);
                cy.get(".badge").contains(0);
            })
        })
    });
})