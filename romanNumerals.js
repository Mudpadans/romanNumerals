

const romanize = (n) => {
    let newRomanNum = "";
    const romanNumTable = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50, 
        X: 10, 
        V: 5, 
        I: 1
    }
    
    for (const key in romanNumTable) {
        const numberValue = romanNumTable[key];
        
        while (numberValue <= n) {
            n -= numberValue;
            newRomanNum += key; 
        }
    }

    return newRomanNum
}   

console.log(romanize(4))