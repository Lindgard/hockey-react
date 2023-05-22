import React from 'react'
import { useState, useEffect } from 'react';
function Playercards() {
  
  // useState som inneholder alle lag via useEffect
    const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    for (let i = 1; i <= 55; i++){
    fetch(`https://statsapi.web.nhl.com/api/v1/teams/`)
      .then(response => response.json())
      .then(response => setPlayers(response.roster))
      .catch(error => setPlayers( error ));
}}, []);

  console.log(players)

  return (
    <div>
   {players.map((player : any) => (<p key={player.person.id}>{player.person.fullName}</p>))}
    </div>
  )
};

export default Playercards;