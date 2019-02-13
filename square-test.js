module.exports = x => {
    const xx = x ** 2;
    console.log(`the square of ${x} is ${xx}`);
    i = 0; j = 0;
    while (i < 100000) {
        while (j < 10000) {
           j++;
        }
        i++;
    }
    return xx;
}
