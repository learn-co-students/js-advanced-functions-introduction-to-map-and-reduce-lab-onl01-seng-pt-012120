function mapToNegativize(arr){
    let result = [];
    for (let i=0; i < arr.length; i++) {
        result.push(arr[i] * -1)
    };
    return result
}

function mapToNoChange(arr){
    let result = [];
    for (let i=0; i < arr.length; i++) {
        result.push(arr[i])
    };
    return result
}

function mapToDouble(arr){
    let result = [];
    for (let i=0; i < arr.length; i++) {
        result.push(arr[i] * 2)
    };
    return result
}

function mapToSquare(arr){
    let result = [];
    for (let i=0; i < arr.length; i++) {
        result.push(arr[i] * arr[i])
    };
    return result
}

function reduceToTotal(arr, init = 0) {
    let result = init;
    for (let i=0; i < arr.length; i++) {
        result = result + arr[i]
    };
    return result
}

function reduceToAllTrue(arr) {
    let result = false;
    let truthyArr = [];
    for (let i=0; i < arr.length; i++) {
        if (!!arr[i]) {
            truthyArr.push(arr[i])
        }  // For each arr element, if truthy, add to new array
    };
    if (truthyArr.length === arr.length) {
        result = true
    }; // if new arr length is equal to original, change result to true
    return result
}

function reduceToAnyTrue(arr) {
    let result = false;
    for (let i=0; i < arr.length; i++) {
        if (!!arr[i]) {
            result = true
        }
    };
    return result
}