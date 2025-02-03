{   // 1
    function ab(a, b) {
        if (a<b) return -1;
        else if(a>b) return 1;
        else return 0;
    }

    // document.write(ab(1, 2));
}

{ // 2
    function fatorial(digit) {
        let factorial = 1;
        for (let i = 2; i <= digit; i++) {
            factorial *= i;
        }
        return factorial;
    }
    // document.write(fatorial(5));
}

{   // 3    
    function fullnum(a, b, c) {
        if ((typeof a === "number") && (typeof b === "number") && (typeof c === "number")) 
            return (a.toString() + b.toString() + c.toString());
        else return ("Одно или несколько значений не цифры");
    }
    // document.write(fullnum(1, 5, 3));
}

{   // 4 
    function square(...nums) {
        if (nums.length === 2) return nums[0]*nums[1];
        else if(nums.length === 1) return nums[0]**2;
    }
    // document.write(`Площадь квадрата: ${square(15)}<br>`);
    // document.write("Площадь Прямоугольника: " + square(16, 5));
}

{   // 5, 6
    function createDigitalArray(digital) {
        let arr = new Array();
        for (let i = 2; i <= Math.sqrt(digital); i++) {
            if (digital % i === 0) arr.push(i, digital/i);
        }
        
        sum = 1;
        for (let i = 0; i < arr.length; i++) sum += arr[i];

        if (sum == digital) return {res: true, print: `${digital} - Совершенное число`};
        else return {res: false, print: `${digital} - Неовершенное число`};
    }
    // document.write(createDigitalArray(28).print);
    // document.write(createDigitalArray(29).print);
}