const calculate = require('./build/Release/calculate');

function calc(){
    let i, x = 100.32462344, y = 200.333456533452;

    for (i = 0; i < 1000000000; i++){
        x += y;
    }

    const total = x;
    return total;
}

console.time('c++');
calculate.calc();
console.timeEnd('c++');

console.time('js');
calc();
console.timeEnd('js');