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