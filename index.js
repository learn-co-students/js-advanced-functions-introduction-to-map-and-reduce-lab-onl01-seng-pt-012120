// Your code here
function mapToNegativize(arr) {
  let result = [];
  for (const num of arr) {
    result.push(num * -1)
  };
  return result;
};

function mapToNoChange(arr) {
  return arr;
};

function mapToDouble(arr) {
  let result = [];
  for (const num of arr) {
    result.push(num * 2)
  };
  return result;
}

function mapToSquare(arr) {
  let result = [];
  for (const num of arr) {
    result.push(num ** 2)
  };
  return result;
};

function reduceToTotal(arr, start=0) {
  let total = start;
  for (const num of arr) {
    total += num
  }
  return total;
}

function reduceToAllTrue(arr) {
  let truthTally = [];
  for (const element of arr) {
    if (!!element === true) truthTally.push(!!element)
  }
  return truthTally.length === arr.length ? true : false
}

function reduceToAnyTrue(arr) {
  let truth = [];
  for (const element of arr) {
    if (!!element === true) truth.push(!!element)
  }
  return truth.length > 0 ? true : false
}