// Code your solutions in this file
function printBadges(array){
  for (let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${[i + 1]}.`)
  }
  return array
}

let tails = Math.random()
let i = 0


function tailsNeverFails(){

    while (tails >= .5 ) {
    i++
    return `You got ${i} tails in a row!`;
  }
}
