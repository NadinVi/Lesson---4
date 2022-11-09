// 1) С помощью prompt запрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор, пока он не введет допустимое значение

// 2) Запрашиваем сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 7. Спрашиваем пока пользователь не введет допустимое значение

// 3) Запрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО. Запрашиваем пока пользователь не введет допустимое значение

// 4) С помощью alert или console.log выводим финальный результат действия (+ - / *).






// 1) С помощью prompt запрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор, пока он не введет допустимое значение

    
do { 
    question = prompt(`What operation do you want to take: + , - , / , * ?`);
    if (question === null ) {
        alert ("Try again!");
}   else if (question.trim() === '') {
    alert ("Try again!");
}
}
    while (!(question == '+' || question == '-' || question == '/' || question == '*')) 
       console.log(question);


// 2) Запрашиваем сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 7. Спрашиваем пока пользователь не введет допустимое значение

do { 
    operand = parseInt(prompt(`How many operands will you use? (More than 1 less than 7)`))
if (operand === null) {
    alert ("Try again!");
}
    else if (isNaN(+operand)) {
        alert ("Try again! It's not a number");
    }

} while (!(operand >= 1 || operand < 7)) 
        console.log (operand);

for (j = 1; j <= operand; j++ ) {
    operandNumbers = parseInt(prompt("Enter operand numbers"));
    if (operandNumbers.length === operand || operandNumbers != isNaN) {
        console.log(operandNumbers);
    }  else (alert ("Try again! Enter operand numbers"))
}
// 3) Запрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО. Запрашиваем пока пользователь не введет допустимое значение

// 4) С помощью alert или console.log выводим финальный результат действия (+ - / *).
finalResult = operandNumbers[0];

for (i = 1; i < operandNumbers.length; i++){
switch (question) {
    case '+':
        finalResult += operandNumbers[i]; 
    break;
    case '-':
        finalResult -= operandNumbers[i]; 
    break;
    case '/':
        finalResult = finalResult / operandNumbers[i]; 
    break;
    case '*':
        finalResult *= operandNumbers[i]; 
    break;
}
}
console.log(finalResult);
