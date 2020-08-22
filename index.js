function   mapToNegativize(array){
  let newArray = [];
  let i;
  //returns an array with all values made negative
  for(i = 0; i < array.length; i++){
    newArray.push(-(array[i])) // goes through each element in the array, and assignes minus
  }
  return newArray;
}

function mapToNoChange(array) { 
  let i;
  let newArray = [];
  for(i = 0; i < array.length; i++) {
  newArray.push(array[i]);
  }
  return newArray;
}

function mapToDouble(array) { 
  let i;
  let newArray = [];
  for(i = 0; i < array.length; i++) {
  newArray.push(array[i]*2);
  }
  return newArray;
}

function mapToSquare(array) { 
  let i;
  let newArray = [];
  for(i = 0; i < array.length; i++) {
  newArray.push(array[i]**2);
  }
  return newArray;
}

function reduceToTotal(array, start=0) {
  let i;
  for(i = 0; i < array.length; i++) {
  start += array[i]
  }
  return start
}

function reduceToAllTrue(array, start=0) {
  let i;
  for(i = 0; i < array.length; i++) {
  if(!array[i]){return false}
  }
  return true
}

function reduceToAnyTrue(array) {
  let i;
  for(i = 0; i < array.length; i++){
    if(array[i]){return true}
  }
  return false
}



