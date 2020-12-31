let movieId = null
let movie;
let reviews;

/* eslint-disable */
describe("Movie Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
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
    cy.get(".card").eq(2).find("img").click();
  });


  it("Should Display Movie Name", () => {
    cy.get("h2").contains(movie.title);
  });

  it("Should Display Movie Details", () => {
    cy.get("h1").contains("Overview");
    cy.get("p").contains(movie.overview);

    cy.get(".row").find("h4").contains("Tagline")
    cy.get(".row").contains(movie.tagline);

    cy.get(".row").find("h4").contains("Popularity")
    cy.get(".row").contains(movie.popularity);

    cy.get(".row").find("h4").contains("Budget")
    cy.get(".row").contains(movie.budget);

    cy.get(".row").find("h4").contains("Runtime")
    cy.get(".row").contains(movie.runtime);

    cy.get(".row").find("h4").contains("Release Date")
    cy.get(".row").contains(movie.release_date);

    cy.get(".row").find("h4").contains("Status")
    cy.get(".row").contains(movie.status);

    cy.get(".row").find("h4").contains("Vote Average")
    cy.get(".row").contains(movie.vote_average);
    
    cy.get(".row").find("h4").contains("Vote Count")
    cy.get(".row").contains(movie.vote_count);
  });
})