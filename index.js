// Code your solutions in this file
function printBadges(array){
  for (let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${[i + 1]}.`)
  }
  return array
}




function tailsNeverFails(){
  let tails = Math.random()
  let i = tails + 1
    while (tails >= .5 ) {
    i++
    return `You got ${i} tails in a row!`;
  }
}
