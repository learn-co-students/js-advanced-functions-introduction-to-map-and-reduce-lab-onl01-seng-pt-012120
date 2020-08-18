// Your code here
const mapToNegativize =(data)=>{
    let newA = [];
    data.forEach(num => {
        let current = num.toString();
        if (current[0] === '-') {
            newA.push(parseInt(current.substr(1)));
        } else {
            let newNum = '';
            newA.push(parseInt(newNum.concat('-', current)));
        };
    });
    return newA;
};

const mapToNoChange =(data)=>{
    let newA = [];
    data.forEach(item => {
        newA.push(item);
    });
    return newA;
};

const mapToDouble = (data)=>{
    let newA = [];
    data.forEach(item => {
        newA.push(item*2);
    });
    return newA;
};

const mapToSquare = (data) => {
    let newA = [];
    data.forEach(item => {
        newA.push(item ** 2);
    });
    return newA;
};

