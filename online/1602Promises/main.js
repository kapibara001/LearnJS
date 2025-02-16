
/* Промисы(Promise) – это специальный объект, который содержит своё состояние. 
 На promise можно навешивать колбэки двух типов:
   onFulfilled – срабатывают, когда promise в состоянии «выполнен успешно».
   onRejected – срабатывают, когда promise в состоянии «выполнен с ошибкой.»

 Код, которому надо сделать что-то асинхронно, создаёт объект promise и возвращает его.
 Внешний код, получив promise, навешивает на него обработчики.
 По завершении процесса асинхронный код переводит promise в состояние fulfilled (с результатом) или rejected (с ошибкой). 
 При этом автоматически вызываются соответствующие обработчики во внешнем коде.
*/
async function getFactNums(number) { // Суть в том, что запросы для всех чисел пойдет одновременно, а не по порядку, из-за чего числа и данные о них выведутся в рандоном порядке
    const response = await axios.get(`http://numbersapi.com/${number}`); // Синтаксис ассинхронного запроса
    return response.data;
}

let mainOL = document.getElementById('container-number');

for (let i = 1; i <= 10; i++) {
    getFactNums(i).then( // Успешное выполнение промиса(запроса)
        data => {
            const fact = document.createElement('li');
            fact.innerText = data;
            mainOL.appendChild(fact);
        }
    )
}


// СОздание собственного промиса
function myAxios(url) {
    const promise = new Promise(
        async (resolve, reject) => {
            try {
                const response = await axios.get(url);
                if (response.statusText === "OK") {
                    resolve(response.data);
                } else {
                    reject(response);
                }
            }
            catch(err) {
                error(err);
            }
        }
    )
    return promise;
}

myAxios(`http://numbersapi.com/${1}`)
    .then(fact => console.log(fact))
    .catch(err => console.log(err));