function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1)
};

function mapToNoChange(sourceArray) {
    return sourceArray
};


function mapToDouble(sourceArray) {
 return sourceArray.map(x => x * 2)
};

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x ** 2)
};

function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce(function(allValues, value) {
        return allValues + value
    }, startingPoint)
};

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce(function(allValues, value) {
        if (value == false) {
            return allValues = false
        };
        return allValues = true
    })
};

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce(function(allValues, value) {
        if (value == true) {
            return allValues = true
        };
        return allValues = false
    })
};