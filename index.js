// Code your solutions in this file
function printBadges(array){
  for (let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${[i + 1]}.`)
  }
  return array
}


function tailsNeverFails(){
    return Math.random()

  
}

while(tailsNeverFails() >= .5){
  let count = 1
  count++
  return `You got ${count} tails in a row!`
}