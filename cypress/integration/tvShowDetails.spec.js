let tvId = null
let tv;
let season;

/* eslint-disable */
describe("TV Show Details Page", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/trending/tv/day?api_key=${Cypress.env(
                "TMDB_KEY"
            )}`
        )
            .its("body")
            .then((response) => {
                return response.results[4].id;
            })
            .then((arbitraryTvIdignored) => {
                tvId = arbitraryTvIdignored
                return cy
                    .request(
                        `https://api.themoviedb.org/3/tv/${tvId}?api_key=${Cypress.env(
                            "TMDB_KEY"
                        )}&language=en-US`
                    )
                    .its("body");
            })
            .then((tvDetails) => {
                tv = tvDetails;
                return tvDetails.id;
            })
        cy.login()
        cy.wait(2000)
        cy.get("nav").find(".trending_dropdown").click();
        cy.get("nav").find("#trending_tvs").click();
        cy.wait(2000)
        cy.get(".card").eq(4).find("img").click();
    });


    it("Should Display TV Show Name", () => {
        cy.get("h2").contains(tv.name);
    });

    it("Should Display TV Show Details", () => {
        cy.get("h1").contains("Overview");
        cy.get("p").contains(tv.overview);

        cy.get(".row").find("h4").contains("Tagline")
        cy.get(".row").contains(tv.tagline);

        cy.get(".row").find("h4").contains("First Aired")
        cy.get(".row").contains(tv.first_air_date);

        cy.get(".row").find("h4").contains("Popularity")
        cy.get(".row").contains(tv.popularity);

        cy.get(".row").find("h4").contains("Status")
        cy.get(".row").contains(tv.status);

        cy.get(".row").find("h4").contains("Vote Average")
        cy.get(".row").contains(tv.vote_average);

        cy.get(".row").find("h4").contains("Vote Count")
        cy.get(".row").contains(tv.vote_count);
    });

    it("Should Display Poster", () => {
        cy.get("div")
            .find('img')
            .should("have.attr", "src")
            .should("include", tv.poster_path);
    });

    describe("TV Show Seasons Page", () => {
        it("Should Navigate to Season 2", () => {
            cy.request(
                `https://api.themoviedb.org/3/tv/${tvId}/season/${2}?api_key=${Cypress.env(
                    "TMDB_KEY"
                )}`
            )
                .its("body")
                .then((seasonDetails) => {
                    season = seasonDetails;
                    return seasonDetails.id;
                })
            cy.get(".card").eq(1).find("img").click();
            //// NOTE :::: IN THIS TEST MANDALORIAN SEASON 2 WAS USED BECAUSE SEASON 1 DID NOT HAVE AN OVERVIEW TO TEST, THUS THIS TEST WILL NOT WORK WITH SHOWS THAT HAVE LESS THAN 2 SEASONS
        });

        it("Should Display Season Name", () => {
            cy.get("h1").contains(`${season.name}`);
        });

        it("Should Display Season Details", () => {
            cy.get("h1").contains("Overview");
            cy.get("p").contains(season.overview);
            
            cy.get("h4").contains("Season Air Date");
            cy.get("p").contains(season.air_date);

            cy.get("table").should('be.visible')
        });


        it("Should Display Season Poster", () => {
            cy.get("div")
                .find('img')
                .should("have.attr", "src")
                .should("include", season.poster_path);
        });
    });

})