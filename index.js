// Your code here
function mapToNegativize(array){
    let a = []
    for(let i = 0; i<array.length; i++){
        a.push(array[i]* -1)
    }
    return a
}

function mapToNoChange(array){
    let a = []
    for(let i = 0; i<array.length; i++){
        a.push(array[i])
    }
    return a
}

function mapToDouble(array){
    let a = []
    for(let i = 0; i<array.length; i++){
        a.push(array[i]* 2)
    }
    return a
}

function mapToSquare(array){
    let a = []
    for(let i = 0; i<array.length; i++){
        a.push(array[i]** 2)
    }
    return a
}

function reduceToTotal(array, startingPoint=0){
let a=startingPoint
for(let i=0; i < array.length; i++){
   a = array[i] + a
}
return a
}

function reduceToAllTrue(array){
    for(let i = 0; i < array.length; i++){
        if(!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array){
    for(let i=0; i < array.length; i++){
        if (array[i]) return true
    }
    return false
}

