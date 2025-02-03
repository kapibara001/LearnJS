function stepen(num, times) {
    newnum = num;
    if (times > 0){ 
        for(let i = 1; i <= times-1; i++) {
            newnum *= num;
        }
        document.write(newnum);
    } else if (times < 0) {
        for(let i = 1; i <= Math.abs(times+1); i++) {
            newnum *= num;
        }
        document.write(`1/${newnum}`);
    } else {
        document.write("1");
    }

}

stepen(5, -10);