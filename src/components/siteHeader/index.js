import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (
    <div className="siteHeader">
      <Navbar collapseOnSelect variant="dark" expand="lg" fixed="top">
        <FontAwesomeIcon
          className="navbar-text text-white"
          icon={["fas", "film"]}
          size="3x"
          to="/"
        />
        <Navbar.Brand className="text-white brand " href="/">MovList</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Link id="home_nav" className="nav-link text-white" to="/"> HOME</Link></Nav.Item>

            <NavDropdown className="text-white trending_dropdown" title="TRENDING" id="responsive-nav-dropdown">
              <NavDropdown.Item><Link className="text-dark" to="/movies/trending"> MOVIES</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className="text-dark" to="/tv/trending"> TV SHOWS</Link></NavDropdown.Item>
              <NavDropdown.Item><Link id="trending_actors" className="text-dark" to="/person/trending"> ACTORS</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="text-white favs_dropdown" title="FAVOURITES" id="responsive-nav-dropdown">
              <NavDropdown.Item><Link id="fav_movies" className="text-dark" to="/movies/favorites"> MOVIES</Link></NavDropdown.Item>
              <NavDropdown.Item><Link id="fav_tvs" className="text-dark" to="/tvs/favorites"> TV SHOWS</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="text-white disc_dropdown" title="DISCOVER" id="responsive-nav-dropdown">
              <NavDropdown.Item><Link className="text-dark" to="/"> MOVIES</Link></NavDropdown.Item>
              <NavDropdown.Item><Link id="upc-movs_nav" className="text-dark" to="/movies/upcoming"> UPCOMING MOVIES</Link></NavDropdown.Item>
              <NavDropdown.Item><Link id="disc-tvs_nav" className="text-dark" to="/tv"> TV SHOWS</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="text-white following_dropdown" title="FOLLOWING" id="responsive-nav-dropdown">
              <NavDropdown.Item><Link id="following-actors" className="text-dark" to="/persons/following"> ACTORS</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Item><Link id="login" className="nav-link text-white" to="/login">REGISTER</Link></Nav.Item>
            <Nav.Item ><Link id="acc_nav" className="nav-link text-white" to="/account"> ACCOUNT</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    // <nav className="navbar  navbar-light fixed-top  bg-dark ">
    //   <nav className="navbar-brand text-white">
    //     <Link className=" text-white" to="/">
    //       TMDB Client
    //     </Link>
    //   </nav>
    //   <FontAwesomeIcon
    //     className="navbar-text text-light"
    //     icon={["fas", "video"]}
    //     size="3x"
    //   />
    //   <span className="navbar-text text-light">
    //     For the movie enthusiast !!
    //   </span>
    //   <FontAwesomeIcon
    //     className="navbar-text text-light"
    //     icon={["fas", "film"]}
    //     size="3x"
    //   />
    //   <nav className="navbar navbar-expand ">
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/">
    //           Home
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/tv">
    //           TV Shows
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/person/trending">
    //           Trending Actors
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/movies/upcoming">
    //           Trending Movies
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/tv/trending">
    //           Trending TV Shows
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/movies/upcoming">
    //           Upcoming
    //         </Link>
    //       </li>

    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/movies/favorites">
    //           Favorites
    //         </Link>
    //       </li>

    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/tvs/favorites">
    //           Fav Tvs
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link text-white" to="/persons/following">
    //           Followed Actors
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </nav>
  );
};

export default SiteHeader;