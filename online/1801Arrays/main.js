/*
{
    let N = +prompt('Укажите размер массива');
    while(N < 1 || N > 10_000) {
        N = +prompt('Ошибка, Введите размер массива ещё раз');
    }
 
    // Создать массив
    const mas = new Array(N);
    
    // Заполняем массив - заполняем каждый его элемент
    for(let i = 0; i < mas.length; i += 1) {
        mas[i] = +prompt(`mas[${i}] = `);
    }
 
    // Поиск элемента в массиве
    {
        const key = +prompt('Введите искомое значение');
        // Поиск первого элемента с начала массива
        {
            // Решение 1
            {   
                let index = -1;
                for(let i = 0; i < mas.length && index === -1; i += 1) {
                    if(mas[i] === key) {
                        index = i;
                    }
                }
 
                if(index === -1) {
                    alert('Таких элементов нет');
                }else {
                    alert(`mas[${index}] = ${key} | Ответ = ${index}`);
                }
            }
 
            // Решение 2
            {
                // Найти индекс
                {
                    const index = mas.indexOf(key);
                    if(index === -1) {
                        alert('Таких элементов нет');
                    }else {
                        alert(`mas[${index}] = ${key} | Ответ = ${index}`);
                    }
                }
 
                // Определить есть ли элемент или нет
                {
                    if(mas.includes(key)) {
                        alert('Такой элемент есть');
                    } else {
                        alert('Таких элементов нет');
                    }
                }
            }
        }
 
        // Поиск первого элемента с конца массива
        {
            // Решение 1
            {   
                let index = -1;
                for(let i = mas.length - 1; i >= 0 && index === -1; i -= 1) {
                    if(mas[i] === key) {
                        index = i;
                    }
                }
 
                if(index === -1) {
                    alert('Таких элементов нет');
                }else {
                    alert(`mas[${index}] = ${key} | Ответ = ${index}`);
                }
            }
 
            // Решение 2
            {
                // Найти индекс
                {
                    const index = mas.lastIndexOf(key);
                    if(index === -1) {
                        alert('Таких элементов нет');
                    }else {
                        alert(`mas[${index}] = ${key} | Ответ = ${index}`);
                    }
                }
            }
        }
 
        // Поиск всех элементов в массиве
        {
            let isFind = false;
 
            for(let i = 0; i < mas.length; i += 1) {
                if(mas[i] === key) {
                    alert(i);
                    isFind = true;
                }
            }
 
            if(!isFind) {
                alert('Таких элементов нет')
            }
        }
    }
 
    // Задача 7
    {
        // Решение 5
        {
            alert(` 5 | До переворота: ${mas}`);
            mas.reverse();
            alert(` 5 | После переворота: ${mas}`);
        }
 
        // Решение 4
        {
            const reverseMas = new Array(mas.length);
            for(
                let i = 0, j = mas.length - 1; 
                i < mas.length; 
                i += 1, j -= 1
            ) {
                reverseMas[j] = mas[i];
            }
            alert(`
                До переворота: ${mas}
                После переворота: ${reverseMas}
                `);
        }
 
        // Способ 1 - НЕВЕРНЫЙ
        {
            for(let i = mas.length - 1; i >= 0; i -= 1) {
                alert(mas[i]);
            }
        }
 
        // Решение 2 
        {
            alert(`До переворота: ${mas}`);
            const lastIndex = mas.length - 1;
            for(let i = 0; i < mas.length / 2; i += 1) {
                const temp = mas[i];
                mas[i] = mas[lastIndex - i];
                mas[lastIndex - i] = temp;
            }
            alert(`После переворота: ${mas}`);
        }
 
        // Решение 3
        {
            alert(`До переворота: ${mas}`);
            for(
                let i = 0, j = mas.length - 1; 
                i < j; 
                i += 1, j -= 1
            ) {
                const temp = mas[i];
                mas[i] = mas[j];
                mas[j] = temp;
            }
            alert(`После переворота: ${mas}`);
        }
    }
 
    // Задача 2 
    {
        for(let i = 0; i < mas.length; i += 1) {
            if(mas[i] % 2 === 0) {
                alert(mas[i]);
            }
        }
    }
 
    // Задача 1
    {
        // Решение 1
        {
            for(let i = 0; i < mas.length; i += 1) {
                if(i % 2 === 0) {
                    alert(mas[i]);
                }
            }
        }
 
        // Решение 2
        {
            for(let i = 0; i < mas.length; i += 2) {
                alert(mas[i]);
            }
        }
    }
   
}
*/
 

// найти масимальный элемент в массиве - значение и порядковый номер
{
    let num = +prompt("Количество элементов в массиве");
    let array = new Array(num);

    for (let i = 0; i < num; i++) {
        array[i] = Math.floor(Math.random() * 1000);
    }

    let max = Number.MIN_SAFE_INTEGER;
    let max_index = -1;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i];
            max_index = i;
        }
        //else {
        //    continue;
        //}
    }
    alert(`Максимальный элемента в списке (${array}): ${max}. Стоит на ${max_index+1} месте.`)
}



{
    let sum = 0
    while(true) { 
        let num = +prompt("Введите число", ''); //  Второе значение тут (" '' ") - знаение по умолчанию
        if (!num) {
            break;
        }
        sum += num;
    }
    alert(sum);

}

{
    let name = prompt("Какое настоящее название JavaScript?");
    (name == "ECMAScript") ? alert("Верно!") : alert("Неверно( Настоящее название - ECMAScript");
}