// 1) С помощью prompt запрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор, пока он не введет допустимое значение

// 2) Запрашиваем сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 7. Спрашиваем пока пользователь не введет допустимое значение

// 3) Запрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО. Запрашиваем пока пользователь не введет допустимое значение

// 4) С помощью alert или console.log выводим финальный результат действия (+ - / *).



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

do { 
    operand = parseInt(prompt(`How many operands will you use? (More than 1 less than 7)`))
if (operand === null) {
    alert ("Try again!");
}
    else if (isNaN(+operand)) {
        alert ("Try again! It's not a number");
    }

} while (operand >= 7 || operand <= 1) 
        console.log (operand);



 finalResult = 0;
 for (i = 1; i <= operand; i++){

do {
    number = parseInt(prompt(`Enter the number ${i}`).replaceAll("", " "));

} while (isNaN(number))
 
switch (question) {
    case "+":
        finalResult += number; 
    break;
    case "-":
        finalResult = i === 1 ? number : finalResult - number; 
    break;
    case "/":
        finalResult =  i === 1 ? number : finalResult / number; 
    break;
    case "*":
        if(i === 1) finalResult = 1
        finalResult *= number; 
    break;
}
 }
console.log(finalResult);


