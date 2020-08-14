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
    for (let i=0; i < arr.length; i++) {
        if (!arr[i]) return false
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i]) return true
    }
    return false
}