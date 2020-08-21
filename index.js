// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x)
}

function mapToDouble(sourceArray){
    return sourceArray.map(x => x * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(x => Math.pow(x, 2))
}


function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce((total, element) => element + total,startingPoint)
}


function reduceToAllTrue(sourceArray) {
    
        for (let i = 0; i < sourceArray.length; i++ ) {
          if (!sourceArray[i]) return false
        }
        return true
      
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
      }
      return false
}
