// Your code here
const mapToNegativize =(data)=>{
    let newA = [];
    data.forEach(num => {
        let current = num.toString();
        if (current[0] === '-') {
            newA.push(current.substr(1));
        } else {
            let newNum = '';
            newA.push(newNum.concat('-', current););
        };
    });
    return newA;
};