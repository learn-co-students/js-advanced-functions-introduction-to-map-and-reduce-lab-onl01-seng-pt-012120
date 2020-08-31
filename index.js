// Your code here
function mapToNegativize(sourceArray) {
    let newArray = [];
    sourceArray.forEach(element => {
        newArray.push((element * -1))
    });
    return newArray;
};

function mapToNoChange(sourceArray) {
    return sourceArray;
};

function mapToDouble(sourceArray) {
    let newArray = [];
    sourceArray.forEach(element => {
        newArray.push(element*2)
    });
    return newArray;
};

function mapToSquare(sourceArray) {
    let newArray = [];
    sourceArray.forEach(element => {
        newArray.push(element**2)
    });
    return newArray;
};

function reduceToTotal(sourceArray, startingPoint=0) {
    sourceArray.forEach(element => {
        startingPoint += element;
    });
    return startingPoint;
};

function reduceToAllTrue(sourceArray) {
    let val;
    sourceArray.forEach(element => {
        if (element) {
            val = true
        } else {
            val = false
        }
    });
    return val;
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.some(function(element) {
        return !!element
    });
}