// Задание
// 1. Написать функцию, которая принимает 2 числа и возвра- щает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
// 2. Написать функцию, которая вычисляет факториал пере- данного ей числа.
// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
// 5. Написать функцию, которая проверяет, является ли пере- данное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
// 7. Написать функцию, которая принимает время (часы, мину- ты, секунды) и выводит его на экран в формате «чч:мм:сс».
// 1
//    Домашнее задание No4
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
// 10. Написатьфункцию,котораясчитаетразницумеждудатами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыду- щих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».


console.log('Hello, World')

// 1

// function minMax (a , b)
// {
//     if (a < b)
//         return -1
//     else if (a > b)
//         return 1
//     else
//         return 0
// }
// console.log(minMax(5,4))
// console.log(minMax(5,5))
// console.log(minMax(2,4))

// 2

// function factorial (n)
// {
//     if (n <= 1)
//         return 1
//     else
//     return factorial (n-1) * n
// }
// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(4))
// console.log(factorial(10))

// 3

// function makeNumber (a , b ,c)
// {
//     let res = 'New Number ' + a + b + c
//         return res
// }
// console.log(makeNumber(1,2,3))

// 4

// function calcArea (a , b)
// {
//     if (b == undefined)
//         return a * a
//     else
//         return a * b
// }
// console.log(calcArea(5))
// console.log(calcArea(2,5))

// 5

// function perfect(num)
// {
//     for (let i = 1, n = 0; i < num; i++)
//     {
//       if (num % i === 0)
//       {
//         n += i;
//       }
//     }
//     return n === num;
//   }
//   console.log(perfect(6));
//   console.log(perfect(80));
//   console.log(perfect(280));

// 6

// function perfect(a , b)
// {
//     var perfects = []
//     for (let i = a; i < b; i++)
//     {
//         sum = 0
//         for (let n = 1; n <= i/2; n++)
//         {
//             if (i % n === 0) sum += n
//         }
//         if (i === sum)
//             perfects.push(i)
//     }
//     return perfects
//   }
//   console.log(perfect(6, 65))
//   console.log(perfect(6, 3453))
//   console.log(perfect(6, 11000))

// 7

// function printTime(h , m , s)
// {
//     if (m === undefined && s === undefined)
//         return `${h}:00:00`
//     else if (m === undefined)
//         return `${h}:00:${s}`
//     else if (s === undefined)
//         return `${h}:${m}:00`
//     else
//         return `${h}:${m}:${s}`
// }
// console.log(printTime(5))
// console.log(printTime(5,10))
// console.log(printTime(5,10,20))

// 8

// function calcSeconds (h , m , s)
// {
//     return h * 3600 + m * 60 + s
// }
// console.log(calcSeconds(1,1,0))
// console.log(calcSeconds(2,0,0))
// console.log(calcSeconds(0,0,59))

// 9
// function toSeconds (s)
// {
//     var m = Math.floor(s / 60);
//     s = s%60;
//     var h = Math.floor(m / 60)
//     m = m % 60;
//     return h + ":" + m + ":" + s;
// }
// console.log(toSeconds(3600))
// console.log(toSeconds(3660))
// console.log(toSeconds(59))

// 10

// function calcSeconds (h , m , s)
// {
//     return h * 3600 + m * 60 + s
// }

// function toSeconds (s)
// {
//     var m = Math.floor(s / 60);
//     s = s%60;
//     var h = Math.floor(m / 60)
//     m = m % 60;
//     return h + ":" + m + ":" + s;
// }

// function diffTime (h1, m1, s1, h2, m2, s2)
// {
//     let difference = calcSeconds(h1,m1,s1) - calcSeconds(h2,m2,s2)

//     return toSeconds(difference)
// }

// console.log(diffTime(2,0,0,0,30,0))
// console.log(diffTime(2,0,0,1,30,0))
// console.log(diffTime(2,0,0,0,0,59))