//onsole.log(`Hello World!`)

const games = [
  { champion: "Darius", kills: 10, deaths: 3, assists: 5, damage: 23567, role: "Top" },
  { champion: "Garen", kills: 7, deaths: 8, assists: 10, damage: 28432, role: "Top" },
  { champion: "Camille", kills: 12, deaths: 4, assists: 4, damage: 25123, role: "Top" },
  { champion: "Fiora", kills: 6, deaths: 7, assists: 8, damage: 15467, role: "Top" },
  { champion: "Darius", kills: 9, deaths: 2, assists: 6, damage: 26678, role: "Top" },
  { champion: "Garen", kills: 4, deaths: 6, assists: 7, damage: 20345, role: "Top" },
  { champion: "Camille", kills: 11, deaths: 9, assists: 4, damage: 22456, role: "Top" },
  { champion: "Fiora", kills: 8, deaths: 10, assists: 9, damage: 27534, role: "Top" },
  { champion: "Darius", kills: 5, deaths: 5, assists: 6, damage: 18432, role: "Top" },
  { champion: "Garen", kills: 13, deaths: 4, assists: 2, damage: 30456, role: "Top" },

  { champion: "Ahri", kills: 20, deaths: 5, assists: 15, damage: 40378, role: "Mid" },
  { champion: "Viktor", kills: 18, deaths: 6, assists: 10, damage: 36234, role: "Mid" },
  { champion: "Syndra", kills: 17, deaths: 7, assists: 12, damage: 39145, role: "Mid" },
  { champion: "Zed", kills: 14, deaths: 8, assists: 14, damage: 35673, role: "Mid" },
  { champion: "Ahri", kills: 16, deaths: 4, assists: 8, damage: 32267, role: "Mid" },
  { champion: "Viktor", kills: 15, deaths: 5, assists: 9, damage: 31498, role: "Mid" },
  { champion: "Syndra", kills: 19, deaths: 9, assists: 13, damage: 41234, role: "Mid" },
  { champion: "Zed", kills: 21, deaths: 3, assists: 11, damage: 45389, role: "Mid" },
  { champion: "Ahri", kills: 23, deaths: 2, assists: 18, damage: 47345, role: "Mid" },
  { champion: "Viktor", kills: 22, deaths: 4, assists: 15, damage: 46342, role: "Mid" },

  { champion: "Lee Sin", kills: 6, deaths: 7, assists: 9, damage: 21456, role: "Jungle" },
  { champion: "Elise", kills: 7, deaths: 8, assists: 12, damage: 23789, role: "Jungle" },
  { champion: "Kha'Zix", kills: 9, deaths: 9, assists: 13, damage: 24234, role: "Jungle" },
  { champion: "Graves", kills: 2, deaths: 9, assists: 1, damage: 3978, role: "Jungle" }, 
  { champion: "Lee Sin", kills: 5, deaths: 5, assists: 14, damage: 19673, role: "Jungle" },
  { champion: "Elise", kills: 11, deaths: 4, assists: 8, damage: 28412, role: "Jungle" },
  { champion: "Kha'Zix", kills: 10, deaths: 7, assists: 7, damage: 26453, role: "Jungle" },
  { champion: "Graves", kills: 1, deaths: 10, assists: 2, damage: 1287, role: "Jungle" }, 
  { champion: "Lee Sin", kills: 14, deaths: 4, assists: 11, damage: 29546, role: "Jungle" },
  { champion: "Graves", kills: 2, deaths: 12, assists: 0, damage: 4679, role: "Jungle" } 
];

let topPerformance = calculatePerformance(`Top`);
let midPerformance = calculatePerformance(`Mid`);
let junPerformance = calculatePerformance(`Jungle`);

// -------------------------------------------------------------
let championPerformances = calculateChampionPerformances();
let bestChampionPerformance = calculateBestPerformance(championPerformances);
let worstChampionPerformance = calculateWorstPerformance(championPerformances, bestChampionPerformance);

writeScore(`topAvgPerformance`, topPerformance);
writeScore(`midAvgPerformance`, midPerformance);
writeScore(`junAvgPerformance`, junPerformance);
writeScore(`bestChampPerformance`, `${bestChampionPerformance.champion}: ${bestChampionPerformance.score}`);
writeScore(`worstChampPerformance`, `${worstChampionPerformance.champion}: ${worstChampionPerformance.score}`);


function calculatePerformance(role){
  let performance = games.reduce((score, game) => {
    if(game.role === role){
      let kills = game.kills;
      let assists = game.assists;
      let damage = game.damage;
      score += (kills * 2) + assists + (damage / 100);
    }
    return score;
  }, 0); // 0 itt az initialValue
  
  let numberOfGamesPlayed = games.filter(game => game.role === role).length;
  let averagePerformance = performance / numberOfGamesPlayed;
  return averagePerformance;
}

function writeScore(id, score){
  let scoreSpan = document.getElementById(id).innerText = score;
}

function calculateChampionPerformances(){
  return games.map((game) => {
    return {champion: game.champion, score: (game.kills * 2) + game.assists + (game.damage / 100)}
  });
}

function calculateBestPerformance(championPerformances){
  let highest = 0;
  let bestPerformance;
  for(const game of championPerformances){
    if(game.score > highest){
      highest = game.score;
      bestPerformance = game;
    }
  }
  return bestPerformance;
}

function calculateWorstPerformance(championPerformances, bestChampionPerformance){
  let lowest = bestChampionPerformance.score;
  let worstPerformance;
  for(const game of championPerformances){
    if(game.score < lowest){
      lowest = game.score;
      worstPerformance = game;
    }
  }
  return worstPerformance;
}