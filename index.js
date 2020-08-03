// Your code here

// map-like methods
function mapToNegativize(sourceArray){
    let newArray = [];
    sourceArray.forEach(element => { 
        newArray.push(element * -1);
    });
    return newArray;
}

function mapToNoChange(sourceArray){
    let newArray = [];
    sourceArray.forEach(element => { 
        newArray.push(element);
    });
    return newArray;

}

function mapToDouble(sourceArray){
    let newArray = [];
    sourceArray.forEach(element => { 
        newArray.push(element * 2);
    });
    return newArray;

}

function mapToSquare(sourceArray){
    let newArray = [];
    sourceArray.forEach(element => { 
        newArray.push(element ** 2);
    });
    return newArray;

}

// reduce-like methods
function reduceToTotal(sourceArray, startingPoint = 0){
    sourceArray.forEach(element => {
        startingPoint += element;
    });
    return startingPoint
}

function reduceToAllTrue(sourceArray){
    let result;
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i] === true) {
          result = true;
        } else {
            result = false;
        }

      }
      return result;
}

function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === true) {
          return true
        }
      }
      return false;
}

