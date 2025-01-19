let array = [1, 3, 2, 3]; // Стандартное задание массива 

let N = 15;
const array2 = new Array(N);

for (let i = 0; i < array2.length; i++) {
    if (array2[i] != "undefined") {
        document.write(array2[i]);
    }
    else {
        continue;
    }
}
