// SECTION global scope variables
let home = 0
let away = 0

// !SECTION



// SECTION functions
function homeScore() {
  const score = document.getElementById('homePoints')
  home++
  // @ts-ignore
  score.innerText = home
  console.log(home)

}


function awayScore() {
  const score = document.getElementById('awayPoints')
  away++
  // @ts-ignore
  score.innerText = away
  console.log(away)
}

function bigAwayScore() {
  const score = document.getElementById('awayPoints')
  away += 3
  // @ts-ignore
  score.innerText = away
  console.log(away)
}

function bigHomeScore() {
  const score = document.getElementById('homePoints')
  home += 3
  score.innerText = home
  console.log(home)
}

// !SECTION