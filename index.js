// Code your solutions in this file
function printBadges(array){
  for (let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${[i + 1]}.`)
  }
  return array
}



function tailsNeverFails(){
    while (Math.random() !>= .5) {
      return `You got ${" "} tails in a row!`;
  }
}
