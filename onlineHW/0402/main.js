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
        
        if (sum == digital) return { res: true, print: `${digital} - Совершенное число` };
        else return { res: false, print: `${digital} - Неовершенное число` };
    }
    // document.write(createDigitalArray(28).print);
    // document.write(createDigitalArray(29).print);

    function interval(a, b) {
        let arr = new Array();
        for (let i = a; i <= b; i++) {
            if (createDigitalArray(i).res) arr.push(i);
        }
        return arr;
    }
    // document.write(interval(5, 30));
}

{   // 7
    function printTime(h, m, s) {
        if (!s) {
            if (h >= 0 && m >= 0) {
                if (h < 10 || m < 10) {
                    if (h < 10 && m > 10) return `0${h.toString()}:${m.toString()}:00`
                    else if(h > 10 && m < 10) return `${h.toString()}:0${m.toString()}:00`
                    else return `0${h.toString()}:0${m.toString()}:00`
                } else return `${h.toString()}:${m.toString()}:00`
            } else return "Неправильно задано время(с минусом)";
        } else {
            if (h >= 0 && m >= 0 && s >= 0) {
                return `${h.toString()}:${m.toString()}:${s.toString()}`;
            } else return "Неправильно задано время(с минусом)";
        }
    }
    // document.write(printTime(50, 50, 12));

    // Можно было и в случае, когда не указываем секунды, просто поставить перменную s и установить ей значение по умолчанию 0 и можно было бы обойтись
    // без блока else в 76 строке
}

{   // 8, 9, 10
    function timeDifferents(h1, m1, s1, h2, m2, s2) {
        let secs1 = convertToSeconds(h1, m1, s1);
        let secs2 = convertToSeconds(h2, m2, s2);

        let partResult = Math.max(secs1, secs2) - Math.min(secs1, secs2);

        return {
            res: `${converToAllTimes(partResult).hour}:${converToAllTimes(partResult).minute}:${converToAllTimes(partResult).second}`,
            h1: h1,
            m1: m1, 
            s1: s1,
            h2: h2, 
            m2: m2,
            s2: s2,
        }
    }

    function convertToSeconds(h, m, s) {
        return h*3600+m*60+s;
    }
    // document.write(convertToSeconds(1, 1, 1));

    function converToAllTimes(seconds) {
       return {
        hour: Math.floor(seconds/3600),
        minute: Math.floor((seconds%3600)/60),
        second: Math.floor(seconds%60),
       }
    }
    
    document.write(`Разница между ${timeDifferents(16, 15, 50, 20, 20, 10).h1}:${timeDifferents(16, 15, 50, 20, 20, 10).m1}:${timeDifferents(16, 15, 50, 20, 20, 10).h1} и 
    ${timeDifferents(16, 15, 50, 20, 20, 10).h2}:${timeDifferents(16, 15, 50, 20, 20, 10).m2}:${timeDifferents(16, 15, 50, 20, 20, 10).h2} - 
    ${timeDifferents(16, 15, 50, 20, 20, 10).res}`);
}