import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [signupOpen, setSignupOpen]=useState(false)
  const [LeagueOpen,setLeagueOpen]=useState(false);
  const [AboutOpen,setAboutOpen]=useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const signToggle =() =>setSignupOpen(prevState=>!prevState)
  const LeagueToggle=()=>setLeagueOpen(prevState=>!prevState)
  const AboutToggle =()=>setAboutOpen(prevState=>!prevState)
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-info">
      <div className="container-fluid">
        <a href="/#" className="navbar-brand">
         
        </a>
        <ul className="navbar-nav ml-auto">
           <h2 className="header">KISUMU COUNTY FOOTBALL ASSOCIATION</h2>
           <li className="nav-item">
          <Dropdown style={{background:"transparent !important"}} isOpen={AboutOpen} toggle={AboutToggle}>
                <DropdownToggle caret>About</DropdownToggle>
                <DropdownMenu>
                <a className="nav-link" href="/AboutUs">
                  <DropdownItem>About Us</DropdownItem>
                  </a>
                  <a className="nav-link" href="/AboutManagement">
                  <DropdownItem>Management</DropdownItem> 
                  </a>          
                </DropdownMenu>
              </Dropdown>
          </li>
          <li className="nav-item">
           
              <Dropdown style={{background:"transparent !important"}} isOpen={signupOpen} toggle={signToggle}>
                <DropdownToggle caret>Register</DropdownToggle>
                <DropdownMenu>
                <a className="nav-link" href="/RegisterPlayer">
                  <DropdownItem>As a Player</DropdownItem>
                  </a>
                  <a className="nav-link" href="/RegisterTeam">
                  <DropdownItem>As a Team</DropdownItem> 
                  </a>          {/* <Redirect from="/" to="/app"/> */}{/* <Redirect from="/" to="/app"/> */}
                </DropdownMenu>
              </Dropdown>
          
          </li>
          <li className="nav-item">
          <Dropdown style={{background:"transparent !important"}} isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Login</DropdownToggle>
                <DropdownMenu>
                <a className="nav-link" href="/LoginPlayer">
                  <DropdownItem>As a Player</DropdownItem>
                  </a>
                  <a className="nav-link" href="/LoginManager">
                  <DropdownItem>As a Manager</DropdownItem> 
                  </a>          
                </DropdownMenu>
              </Dropdown>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
          <Dropdown style={{background:"transparent !important"}} isOpen={LeagueOpen} toggle={LeagueToggle}>
                <DropdownToggle caret>League</DropdownToggle>
                <DropdownMenu>
                <a className="nav-link" href="/LeagueTeams">
                  <DropdownItem>Teams</DropdownItem>
                  </a>
                  <a className="nav-link" href="/LeagueTournaments">
                  <DropdownItem>Tournaments</DropdownItem> 
                  </a> 
                  <a className="nav-link" href="/TableStandings">
                  <DropdownItem>Table Standings</DropdownItem> 
                  </a>               
                </DropdownMenu>
              </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
