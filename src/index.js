import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./app.css"
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import TvPage from './pages/tvDetailsPage'

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import TvsContextProvider from "./contexts/tvsContext";
import AuthContextProvider from "./contexts/authenticationContext";
import TvsPage from './pages/tvPage'

import AddMovieReviewPage from './pages/addMovieReviewPage'
import PrivRoute from './pages/privRoute';


import LoginPage from './pages/loginPage'



const App = () => {
  return (
    <BrowserRouter >

      <div className="jumbotron">
        <div className="container-fluid">
          <div className="page">

            <AuthContextProvider>
              <SiteHeader />
              <MoviesContextProvider>
                <TvsContextProvider>
                  <GenresContextProvider>
                    <Switch>
                      <PrivRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                      <PrivRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                      <PrivRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />

                      <PrivRoute path="/tv/:id" component={TvPage} />
                      <PrivRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                      <Route path="/login" component={LoginPage} />
                      <PrivRoute path="/movie/reviews/:id" component={MovieReviewPage} />
                      <PrivRoute path="/movies/:id" component={MoviePage} />
                      <PrivRoute path="/tv" component={TvsPage} />
                      {/* <PrivRoute path="/tv/reviews/:id" component={TvReviewPage} /> */}
                      <PrivRoute path="/" component={HomePage} />
                      <Redirect from="*" to="/" />
                    </Switch>
                  </GenresContextProvider>
                </TvsContextProvider>
              </MoviesContextProvider>
            </AuthContextProvider>
          </div>

        </div>
      </div>

    </BrowserRouter>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));