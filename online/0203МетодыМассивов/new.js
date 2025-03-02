{  // .filter() - проверяет элемент и либо его оставляет, либо удаляет
    const mass = [321, 235, 12, 325, 5647, 12, 14];

    let doublemass = mass.filter((num) => num % 2 === 0); // метод filter. Перебирает в нашем случае num из массива mass и добавляет тот num, который кратен 2
    console.log(`Массив до фильтра: ${mass.join(', ')}. Массив после фильтра: ${doublemass.join(', ')}`);


    const filtermass = mass.filter(
        async (value, index) => {
            const response = await fetch(`http://numbersapi.com/${value}`);
            return response.status && index < 4;
        }
    )
    console.log(`Массив после фильтра ${filtermass.join(', ')}`);
}

{ // .map - способен изменять элемент
    const mass = [321, 235, 12, 325, 5647, 12, 14];
    let doublemass = mass.map((num) => num*num);
    console.log(doublemass);

    const seconds = [1241251, 453645654, 1243242, 712];
    const mapSec = seconds.map(
        value => new Date(seconds*1000)
    )
    console.log(`${mapSec.join(', ')}`);
}