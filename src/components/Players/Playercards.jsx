import React from 'react'
import { useState, useEffect } from 'react';
function Playercards() {
  
  // useState som inneholder alle lag via useEffect
  const [teams, setTeams] = useState([]);

  let teamsID = [1,2,3,4];


  useEffect(() => {
    for (let i = 0; i < teamsID.length; i++){
      console.log(teamsID[i])
    fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamsID[i]}/roster`)
      .then(response => response.json())
      .then(response => {setTeams(response.roster)
      })
      .catch(error => setTeams( error ));
    }}, []);
    console.log(teams)
    

  return (
    <div>
{/*     {teams.map((player) => (<p key={player.person.id}>{player.person.fullName}</p>))}
 */}     </div>
    
  )
};

export default Playercards;