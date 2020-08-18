// Your code here
const mapToNegativize =(data)=>{
    let newA = [];
    data.forEach(num => {
        let current = num.toString();
        if (current[0] = '-') {
            newA.push(current.substr(1));
            debugger;
        } else {
            let newNum = '';
            newNum.concat('-',current);
            newA.push(newNum);
            debugger;
        };
    });
    return newA;
};