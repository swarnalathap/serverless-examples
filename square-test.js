module.exports = x => {
    const xx = x * 10;
    console.log(`the square of ${x} is ${xx}`);
    i = 0; j = 0;
    while (i < 100000) {
        while (j < 10000) {
           j++;
        }
        i++;
    }
    var waitTill = new Date(new Date().getTime() + 10 * 1000);
    while(waitTill > new Date()){}
    return xx;
}
