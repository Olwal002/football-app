import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import League from "./components/League/League";
import Navbar from "./components/Navbar/Navbar";
import RegisterPlayer from "./components/Register/RegisterPlayer";
import RegisterTeam from "./components/Register/RegisterTeam";
import LoginManager from "./components/Login/LoginManager";
import LoginPlayer from "./components/Login/LoginPlayer";
import AboutUs from "./components/About/AboutUs";
import AboutManagement from "./components/About/AboutManagement";
import Contact from "./components/Contact/Contact.jsx";
import Home from "./components/Home/Home";
import LeagueTeams from "./components/League/LeagueTeams";
import LeagueTournaments from './components/League/LeagueTournaments'
import TableStandings from "./components/League/TableStandings";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/league" component={League} />
        <Route path="/loginplayer" exact component={LoginPlayer} />
        <Route path="/loginmanager" exact component={LoginManager} />
        <Route path="/registerplayer" exact component={RegisterPlayer} />
        <Route path="/registerteam" exact component={RegisterTeam} />
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/aboutmanagement" exact component={AboutManagement} />
        <Route path="/leagueteams" exact component={LeagueTeams} />
        <Route path="/leaguetournaments" exact component={LeagueTournaments} />
        <Route path="/tablestandings" exact component={TableStandings}/>
      </Switch>
    </Router>
  );
}

export default App;
