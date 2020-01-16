import React from 'react';

function TableStandings () {
  return (
    <div className="container"><br/>

<table className="table table-bordered table-responsive-sm">

  <thead>
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
  </tbody>
</table>
    
    </div>
  );
}

export default TableStandings;

