// Your code here


// map-like
// mapToNegativize(sourceArray)
// mapToNoChange(sourceArray)
// mapToDouble(sourceArray)
// mapToSquare(sourceArray)
// Remember, all map methods return a new Array.
function mapToNegativize(array) {
    let result = [];
    for (const num of array) {
      result.push(num * -1)
    };
    return result;
  };
  
  function mapToNoChange(array) {
    return array;
  };
  
  function mapToDouble(array) {
    let result = [];
    for (const num of array) {
      result.push(num * 2)
    };
    return result;
  }
  
  function mapToSquare(array) {
    let result = [];
    for (const num of array) {
      result.push(num ** 2)
    };
    return result;
  };
  
  function reduceToTotal(array, start=0) {
    let total = start;
    for (const num of array) {
      total += num
    }
    return total;
  }
  

//   reduce-like
// reduceToTotal(sourceArray, startingPoint)
// reduceToAllTrue(sourceArray)
// reduceToAnyTrue(sourceArray)
// Remember, all reduce methods return a value.
  function reduceToAllTrue(array) {
    let truthy = [];
    for (const element of array) {
      if (!!element === true) truthy.push(!!element)
    }
    return truthy.length === array.length ? true : false
  }
  
  function reduceToAnyTrue(array) {
    let truth = [];
    for (const element of array) {
      if (!!element === true) truth.push(!!element)
    }
    return truth.length > 0 ? true : false
  }