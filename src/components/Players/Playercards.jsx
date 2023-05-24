import React from 'react'
import { useState, useEffect } from 'react';

const Playercards = () => {
  
  // useState som inneholder alle lag via useEffect
    const [teams, setTeams] = useState([]);

    useEffect(() => {
      const ids = Array.from({length: 55}, (_, i) => i + 1);
      const requests = ids.map(id => 
        fetch (`https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`)
        .then(response => {
          if (!response.ok) {
            console.log(`Team ID ${id} not found`);
          }
          return response.json();
        })
        .then(data => ({id, roster: data.roster}))
        // .catch(error => console.error('Error:', error))
        );
      Promise.all(requests)
      .then(allTeams => setTeams(allTeams))
      // .catch(error => console.error('Error:', error))
      }, []);
    
    console.log(teams)
    

  return (
    <div>
      {teams && teams.map((team, index) => (
        <div key={index}>
          <h2>Team ID: {team.id}</h2>
          {team.roster && team.roster.map((player, index) => (
            <div key={index}>
              <p>{player.person.fullName}</p>
            </div>
          ))}
        </div>
      ))}
     </div>
  );
};

export default Playercards;