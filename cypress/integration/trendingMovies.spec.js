
let movies;    // List of movies from TMDB

const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

/* eslint-disable */
describe("Trending Movies", () => {
  before(() => {
    cy.request(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${Cypress.env(
            "TMDB_KEY"
          )}`
    )
      .its("body")
      .then((response) => {
        movies = response.results
      })
    cy.visit("/");
    cy.login()
    cy.wait(500)
  })

  describe("Navigate to Trending Movies", () => {
    it("Should Show Trending Movies Page", () => {
      cy.get("nav").find(".trending_dropdown").click();
      cy.get("nav").find("#trending_movies").click();
      cy.get("h1").contains("Trending Movies");
      cy.get(".badge").contains(20);
    });
  })

  describe("Base test", () => {
    it("displays page header", () => {
      cy.get("h1").contains("Trending Movies");
      cy.get(".badge").contains(20);
    });
  })

  describe("Filtering", () => {
    describe("By movie title", () => {
      it("should display movies with 'p' in the title", () => {
        const searchString = 'p'
        const matchingMovies = filterByTitle(movies, searchString);
        cy.get("input").clear().type(searchString);
        cy.get(".card").should("have.length", matchingMovies.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies[index].title);
        });
      })
      it("should display movies with 'o' in the title", () => {
        const searchString = "o";
        const matchingMovies = filterByTitle(movies, searchString);
        cy.get("input").clear().type(searchString);
        cy.get(".card").should("have.length", matchingMovies.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies[index].title);
        })
      })
      it("should display no movie card (xyz) in the title", () => {
        const searchString = 'xyz'
        const matchingMovies = filterByTitle(movies, searchString);
        cy.get("input").clear().type(searchString);
        cy.get(".card").should("have.length", matchingMovies.length);

      })

    })
    describe("By movie genre", () => {
      it("should display movies with the specified genre only", () => {
        const selectedGenreId = 35;
        const selectedGenreText = "Comedy";
        const searchString = "o";
        cy.get("input").clear()
        const matchingMovies = filterByGenre(movies, selectedGenreId, searchString);
        cy.get("select").select(selectedGenreText);
        cy.get(".card").should("have.length", matchingMovies.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies[index].title);
        });
      });
    });

    describe("By movie Title & Genre", () => {
      it("should display movies with the specified genre and title", () => {
        const selectedGenreId = 28;
        const selectedGenreText = "Action";
        cy.get("input").clear()
        const matchingMovies = filterByGenre(movies, selectedGenreId);
        cy.get("select").select(selectedGenreText);
        cy.get(".card").should("have.length", matchingMovies.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies[index].title);
        });
      });
    });
  });
})