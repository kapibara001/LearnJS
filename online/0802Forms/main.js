let name = document.getElementById("userName");

document.getElementById("saveName").addEventListener('click', () => {
    alert(name.value);
});

document.getElementById('StartGenerationPassword').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращение обновления странички

    const length = document.getElementById('lenghtPass').value;
    const includeLower = document.getElementById('checkboxLowerSymbols').checked;
    const includeUpper = document.getElementById('checkboxUpperSymbols').checked;
    const includeNumbers = document.getElementById('nums').checked;
    const includeSpecial = document.getElementById('SpecSym').checked;
    const excludedSymbols = document.getElementById('exludedSymbols').value;

    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/{}[]';

    let charPool = '';
    if (includeLower) charPool += lowerChars;
    if (includeUpper) charPool += upperChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSpecial) charPool += specialChars;

    // Убираем исключенные символы
    charPool = charPool.split('').filter(char => !excludedSymbols.includes(char)).join('');

    if (charPool.length === 0) {
        alert('Невозможно создать пароль: нет доступных символов!');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    document.getElementById("readyPassword").innerText = 'Сгенерированный пароль: ' + password;
});

{
    const factForm = document.getElementById("factorialForm");
    const inNum = document.getElementById("inNum");
    const factRes = document.getElementById("factResult");
    
    factForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let n = parseInt(inNum.value);
        let result = fatorial(n);
        if (isNaN(result)) {
            alert("Ошибка при вычислениях");
        } else {
            factRes.textContent = `${n}! = ${result}`;
        }
        
    })
    
    function fatorial(num) {
        if (!Number.isInteger(num) || num < 0) {
            return NaN;
        }
    
        let res = 1;
        for (let i = 1; i <= num; i++) {
            res *= i;
        }
    
        return res;
    }
}