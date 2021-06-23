
/*
Специальное значение undefined также стоит особняком. Оно формирует тип из самого себя так же, как и null.
Оно означает, что «значение не было присвоено».
Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined:
 */
let age
const price = undefined
console.log(age, price)
let firstNumber = 5
let secondNumber = 10
console.log(firstNumber >= secondNumber)
console.log(firstNumber <= secondNumber)