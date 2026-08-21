const footballTeam = {
  team: "Argentina",
  year: 2022,
  headCoach: "Lionel Scaloni",
  players: [
    {
      name: "Emiliano Martínez",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Franco Armani",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Gerónimo Rulli",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Nahuel Molina",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Gonzalo Montiel",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Cristian Romero",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Germán Pezzella",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Nicolás Otamendi",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Lisandro Martínez",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Marcos Acuña",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Nicolás Tagliafico",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Juan Foyth",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Rodrigo De Paul",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Leandro Paredes",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Alexis Mac Allister",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Guido Rodríguez",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Alejandro Gómez",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Enzo Fernández",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Exequiel Palacios",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Ángel Di María",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Lautaro Martínez",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Julián Álvarez",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Paulo Dybala",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Ángel Correa",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Thiago Almada",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Lionel Messi",
      position: "forward",
      isCaptain: true
    }
  ]
};

document.getElementById('team').textContent = footballTeam['team']
document.getElementById('year').textContent = footballTeam['year']
document.getElementById('head-coach').textContent = footballTeam['headCoach']




const cards = document.getElementById('player-cards')

const playerOptions = document.getElementById('players')

playerOptions.addEventListener('change', (e)=> cards.innerHTML=filterPlayer(e.target.value))


function filterPlayer(value) {
  let filteredPlayers;

  if (value === "all") {

    filteredPlayers = footballTeam.players;
  } else {

    filteredPlayers = footballTeam.players.filter((p) => p.position === value);
  }
  

  const playersHTML = filteredPlayers.map((player) => {
    return `
      <div class="player-card">
        <h2>${player.name} ${player.isCaptain ? "(Captain)" : ""}</h2>
        <p>Position: ${player.position}</p>
      </div>
    `;
  }).join(''); 

  return playersHTML;
}

