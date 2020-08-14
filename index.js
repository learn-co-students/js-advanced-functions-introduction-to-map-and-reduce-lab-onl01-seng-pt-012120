function mapToNegativize(arr){
    let value  = []
    for ( let i=0; i < arr.length; i++) {
        value.push(-1 * arr[i])
    }
    return value
}

function mapToNoChange(arr) {
    let value = []
    for (let i = 0; i < arr.length; i++) {
        value.push(arr[i])
    }
    return value
}

function mapToDouble(arr) {
    let value = []
    for (let i = 0; i < arr.length; i++) {
        value.push(2 * arr[i])
    }
    return value
}

function mapToSquare(arr){
    let value = []
    for (let i = 0; i < arr.length; i++) {
        value.push(arr[i] * arr[i])
    }
    return value 
}

function reduceToTotal(arr, start = 0) {
    let total = start 
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }
    return total
}

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(!arr[i]) return false
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]) return true
    }
    return false
}