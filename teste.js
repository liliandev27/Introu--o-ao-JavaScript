//console.log("Hello Word");

//console.log("Vai dormir Anna Olinda, Eloah de Fátima e Ozias Neto");


function returnEvenValues(array) {
    let evenNums = [];

    for(let i = 0; i < array.length; i++) {
  
    if(array[i] % 2 === 0) { 
        evenNums.push(array[i]);
    }
  }
  console.log(evenNums);
}

let array = [1,2,3,5,8,9];

returnEvenValues(array);