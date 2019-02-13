module.exports = x => {
    const xx = x ** 2;
    console.log(`the square of ${x} is ${xx}`);
    var sleep = require('sleep');
    sleep.sleep(100);
    return xx;
}
