import React from "react";
import { Link } from "react-router-dom";
import {  Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (

<Navbar collapseOnSelect variant="dark"expand="lg" fixed="top">
    <FontAwesomeIcon
        className="navbar-text text-dark"
        icon={["fas", "film"]}
        size="3x"
        to ="/"
      />
  <Navbar.Brand className="text-dark brand " href="/">MovList</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Item><Link className="nav-link text-dark" to="/"> HOME</Link></Nav.Item>

      <NavDropdown className="text-dark" title="Trending" id="responsive-nav-dropdown">
        <NavDropdown.Item><Link className="text-dark" to="/movies/trending"> Movies</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="text-dark" to="/tv/trending"> TV Shows</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="text-dark" to="/person/trending"> Actors</Link></NavDropdown.Item>
      </NavDropdown>

      <NavDropdown className="text-dark" title="Favourites" id="responsive-nav-dropdown">
        <NavDropdown.Item><Link className="text-dark" to="/movies/favorites"> Movies</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="text-dark" to="/tvs/favorites"> TV Shows</Link></NavDropdown.Item>
      </NavDropdown>

      <NavDropdown className="text-dark" title="Discover" id="responsive-nav-dropdown">
        <NavDropdown.Item><Link className="text-dark" to="/"> Movies</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="text-dark" to="/movies/upcoming"> Upcoming Movies</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className="text-dark" to="/tv"> TV Shows</Link></NavDropdown.Item>
      </NavDropdown>

      <NavDropdown className="text-dark" title="Following" id="responsive-nav-dropdown">
        <NavDropdown.Item><Link className="text-dark" to="/persons/following"> Actors</Link></NavDropdown.Item>
      </NavDropdown>
      <Nav.Item><Link id = "login" className="nav-link text-dark" to="/login">Register</Link></Nav.Item>
    {/* <Nav.Item ><Link className="nav-link text-dark" to="/"> Account</Link></Nav.Item> */}
  </Nav>
  </Navbar.Collapse>
</Navbar>

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