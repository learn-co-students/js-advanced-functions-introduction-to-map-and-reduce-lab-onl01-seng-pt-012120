let mapToNegativize = function(sourceArray){
    let negativeArray = sourceArray.map(x => {return x * -1})
    return negativeArray

}


let mapToNoChange = function(sourceArray) {
    let sameArray = sourceArray.map(x => {return x})
    return sameArray

}


let mapToDouble = function(sourceArray){
    let doubleArray = sourceArray.map(x => {return x * 2})
    return doubleArray
}

let mapToSquare = function(sourceArray){
    let squaredArray = sourceArray.map( x => {return x ** 2})
    return squaredArray
}

let reduceToTotal = function (sourceArray, startingPoint = 0){
const totaler = (runningTotal, nextItem) =>{
    return runningTotal + nextItem
};

const total = sourceArray.reduce(totaler, startingPoint)
return total
}


let reduceToAllTrue= function(sourceArray){
    let truthy = true
for (const element of sourceArray){

    if (!element) {truthy = false} 
}

return truthy
}


let reduceToAnyTrue = function (sourceArray){

    let truthy = false

    for (const element of sourceArray){
        if (element) {truthy = true; return truthy; break}
    }

    return truthy
}