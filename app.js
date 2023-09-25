// SECTION global scope variables
let home = 0
let away = 0

// !SECTION



// SECTION functions

function resetScore() {
  const hPoint = document.getElementById('homePoints')
  const aPoint = document.getElementById('awayPoints')
  home = 0
  away = 0

  hPoint.innerText = home
  aPoint.innerText = away

}

function checkWin() {
  if (home >= 21) {
    window.alert('Home Wins!!')
  } else if (away >= 21) {
    window.alert('Away Wins!!')
  }

}

function updateScore(teamName) {
  if (teamName == 'home') {
    const score = document.getElementById('homePoints')
    home++
    // @ts-ignore
    score.innerText = home
    console.log(home)
    checkWin()

  } else if (teamName == 'away') {
    const score = document.getElementById('awayPoints')
    away++
    // @ts-ignore
    score.innerText = away
    console.log(away)
    checkWin()
  }

}

function updateBigScore(teamName) {
  if (teamName == 'home') {
    const score = document.getElementById('homePoints')
    home += 3
    score.innerText = home
    console.log(home)
    checkWin()
  } else if (teamName == 'away') {
    const score = document.getElementById('awayPoints')
    away += 3
    score.innerText = away
    console.log(home)
    checkWin()
  }
}

function removePoints(teamName) {
  if (teamName == 'home') {
    const score = document.getElementById('homePoints')
    home--
    // @ts-ignore
    score.innerText = home
  } else if (teamName == 'away') {
    const score = document.getElementById('awayPoints')
    away--
    // @ts-ignore
    score.innerText = away
  }
}
// !SECTION


