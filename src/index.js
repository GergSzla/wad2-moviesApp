import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./app.css"
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import TvPage from './pages/tvDetailsPage'
import PersonPage from './pages/personDetailPage'

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import FavoriteTvsPage from './pages/favoritesTvsPage'
import FollowingPersonsPage from './pages/followingPersonsPage'
import UserProfPage from './pages/userProfile'


import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import TrendingMoviesPage from './pages/trendingMoviesPage'
import TrendingTvsPage from './pages/trendingTvPage'


import MovieReviewPage from "./pages/movieReviewPage";
import TvReviewPage from "./pages/tvReviewPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import TvsContextProvider from "./contexts/tvsContext";
import PersonsContextProvider from "./contexts/personContext";

import AuthContextProvider from "./contexts/authenticationContext";
import TvsPage from './pages/tvPage'
import PersonsPage from './pages/personPage'
import SeasonPage from './pages/seasonPage'

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
                  <PersonsContextProvider>
                    <GenresContextProvider>
                      <Switch>
                        <PrivRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                        <PrivRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                        <PrivRoute exact path="/tvs/favorites" component={FavoriteTvsPage} />
                        <PrivRoute exact path="/persons/following" component={FollowingPersonsPage} />
                        <PrivRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                        <PrivRoute exact path="/movies/trending" component={TrendingMoviesPage} />
                        <PrivRoute exact path="/tv/trending" component={TrendingTvsPage} />
                        <PrivRoute exact path="/account" component={UserProfPage} />
                        <PrivRoute exact path="/person/trending" component={PersonsPage} />
                        <PrivRoute path="/person/trending/:id" component={PersonPage} />
                        <PrivRoute path="/tv/:tv_id/season/:season_number" component={SeasonPage} />
                        <PrivRoute path="/tv/:id" component={TvPage} />
                        <PrivRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                        <Route path="/login" component={LoginPage} />
                        <PrivRoute path="/movies/reviews/:id" component={MovieReviewPage} />
                        <PrivRoute path="/tvs/reviews/:id" component={TvReviewPage} />
                        <PrivRoute path="/movies/:id" component={MoviePage} />
                        <PrivRoute path="/tv" component={TvsPage} />
                        {/* <PrivRoute path="/tv/reviews/:id" component={TvReviewPage} /> */}
                        <PrivRoute path="/" component={HomePage} />
                        <Redirect from="*" to="/" />
                      </Switch>
                    </GenresContextProvider>
                  </PersonsContextProvider>
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