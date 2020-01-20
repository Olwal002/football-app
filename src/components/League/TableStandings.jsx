import React from 'react';

function TableStandings () {
  return (
    <div className="container"><br/>

<table className="table table-borderless table-responsive-sm table-hover">

  <thead className="thead-light">
    <tr>
      <th scope="col">Pos</th>
      <th scope="col">Team</th>
      <th scope="col">Pld</th>
      <th scope="col">W</th>
      <th scope="col">D</th>
      <th scope="col">L</th>
      <th scope="col">GF</th>
      <th scope="col">PTS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Manyatta</td>
      <td>4</td>
      <td>3</td>
      <td>1</td>
      <td>0</td>
      <td>8</td>
      <td>10</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>SuperStrikers</td>
      <td>4</td>
      <td>3</td>
      <td>1</td>
      <td>0</td>
      <td>6</td>
      <td>10</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Powerboys</td>
      <td>4</td>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>3</td>
      <td>7</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Bayern Fc</td>
      <td>4</td>
      <td>1</td>
      <td>3</td>
      <td>0</td>
      <td>3</td>
      <td>6</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Toldo Fc</td>
      <td>4</td>
      <td>0</td>
      <td>1</td>
      <td>3</td>
      <td>9</td>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Pro 16</td>
      <td>4</td>
      <td>0</td>
      <td>1</td>
      <td>3</td>
      <td>8</td>
      <td>1</td>
    </tr>
  </tbody>
</table>

<br/>
    <div>
    
    <table className="table table-bordered table-responsive-sm table-hover">

<thead className="thead-light">
  <tr>
    <th scope="col">Day</th>
    <th scope="col">Date</th>
    <th scope="col">Time</th>
    <th scope="col">Home  :   Away</th>
    <th scope="col">Venue</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Saturday</td>
    <td>12/04/2020</td>
    <td>9:00 am</td>
    <td>Manyatta  vs SuperStrikers</td>
    <td>Kisumu Day</td>
  
  </tr>
  <tr>
    <td>Saturday</td>
    <td>12/04/2020</td>
    <td>11:00 am</td>
    <td>Bayern Fc Vs Powerboys</td>
    <td>Kisumu Day</td>
  </tr>
  <tr>
    <td>Sunday</td>
    <td>13/04/2020</td>
    <td>9:00 am</td>
    <td>Toldo fc Vs Pro 16</td>
    <td>Highway Primary</td>
  </tr>
</tbody>
</table>
    </div>

    <br/>
    
    </div>
  );
}

export default TableStandings;

