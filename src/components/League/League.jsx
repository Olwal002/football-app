import React from "react";
import LeagueTeams from './LeagueTeams';
import LeagueTournaments from './LeagueTournaments'
import TableStandings from "./TableStandings";


function League() {
  return (
    <div>
<LeagueTeams/>
<LeagueTournaments/>
<TableStandings/>
    </div>
  )
}
export default League;
