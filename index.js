function mapToNegativize(a) {return a.map(n => {return n * -1})}

function mapToNoChange(a) {return a.map(n => {return n})}

function mapToDouble(a) {return a.map(n => {return n * 2})}

function mapToSquare(a) {return a.map(n => {return n * n})}

function reduceToTotal(a, s=0) {
    let t = s;
    a.forEach(n => {
        t = t + n
    });
    return t
}

function reduceToAllTrue(a) {
    let b = true;
    a.forEach(n => {
        if (!n) {b = false}
    });
    return b
}

function reduceToAnyTrue(a) {
    let b = false;
    a.forEach(n => {
        if (n) {b = true}
    });
    return b
}