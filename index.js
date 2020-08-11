// Your code here
function mapToNegativize(arr){
  const negatives = [];
  for(let i = 0; i < arr.length; i++){
    negatives.push((arr[i] * -1));
  };
  return negatives;
}

function mapToNoChange(arr){
  return arr
}

function mapToDouble(arr){
  const doubles = [];
  for(let i = 0; i < arr.length; i++){
    doubles.push(arr[i] * 2);
  };
  return doubles;
}

function mapToSquare(arr){
  const squares = [];
  for(let i = 0; i < arr.length; i++){
    squares.push(arr[i] ** 2);
  };
  return squares;
}

function reduceToTotal(arr,n = 0){
  let total = n
  for(let i = 0 ; i < arr.length; i++){
    total += arr[i];
  };
  return total;
}

function reduceToAllTrue(arr){
  for(let i = 0; i < arr.length; i++){
    if (!arr[i]){
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(arr){
  for(let i = 0; i < arr.length; i++){
    if (!!arr[i]){
      return true;
    }
  }
  return false;
}
