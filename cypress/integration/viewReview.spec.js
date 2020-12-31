let movieId = null
let movie;
let review;


/* eslint-disable */
describe("View Review In Modal", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[0].id;
      })
      .then((arbitraryMovieIdignored) => {
        movieId = arbitraryMovieIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((movieDetails) => {
        movie = movieDetails;
        return movieDetails.id;
      })
    cy.login()
    cy.wait(500)
    cy.get(".card").eq(0).find("img").click();
  });

  describe("Get Movie Reviews", () => {
    it("Navigate to Review", () => {
        cy.request(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
            "TMDB_KEY"
          )}`
          ).its("body")
          .then((reviewDetails) => {
              review = reviewDetails;
              return reviewDetails.id;
          })
          cy.get("#btn_revs").click()
          cy.get(".rev_link").eq(0).click();
          cy.get("#show-rev").click()

          cy.request(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
            "TMDB_KEY"
          )}`
          ).its("body")
          .then((reviewDetails) => {
              review = reviewDetails;
              return reviewDetails.id;
          })
          
        //   cy.get(".rev-author").should('be.visible')
        //   cy.get(".rev-content").should('be.visible')

    });
  });
  
})