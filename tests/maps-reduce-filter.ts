
let objArray = [
  { name: 'Usman Khawaja ', score: 46, balls: 73 },
  { name: 'Angus Lovell ', score: 4, balls: 27 },
  { name: 'Marnus Labuschagne (c)', score: 159, balls: 197 },
  { name: 'Jack Clayton ', score: 13, balls: 52 },
  { name: 'Lachlan Hearne ', score: 106, balls: 143 },
  { name: 'Jimmy Peirson †', score: 9, balls: 19 },
  { name: 'Jack Wildermuth ', score: 4, balls: 18 },
  { name: 'Michael Neser ', score: 15, balls: 29 },
  { name: 'Jack Sinfield ', score: 15, balls: 20 },
  { name: 'Tom Straker ', score: 0, balls: 13 },
  { name: 'Mitchell Swepson ', score: 8, balls: 8 }
]
let numArray = [
  46, 4, 159, 13, 106,
  9, 4, 15, 15, 0,
  8
]

// filter objArray to return only those batsmen with scrore greater than 20
let twentyPlusScorers = objArray.filter(batsman => batsman.score > 20)
console.log(twentyPlusScorers.length);

// filter numArray to return only those numbers greater than 20
let twentyPlusScores = numArray.filter(num => num > 20)
console.log(twentyPlusScores);

// map to update the exisating array to display batter name and strike rate
let strikeRate = objArray.map(batsman => {
  return {
    name: batsman.name,
    strikeRate: ((batsman.score / batsman.balls) * 100).toFixed(2)
  }
})

console.log(strikeRate);

// use reduce to get high scorer - need: name, score, strike rate

let highScorer = objArray.reduce((prev, item) => {
  return prev.score > item.score ? prev : item
})
console.log(highScorer);