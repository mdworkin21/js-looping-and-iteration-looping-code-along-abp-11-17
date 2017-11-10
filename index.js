// Code your solutions in this file
function printBadges(array){
  for (let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${[i + 1]}.`)
  }
  return array
}


function tailsNeverFails(){
    let tails = Math.random() >= 0.5;

    while(tails === true){
      let i = 0;
      let j = 0;
        i++;
        j += i
        return `You got ${j} tails in a row!`;
    }
}
