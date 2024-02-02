function bai1(a,b){
    return a+b;
}
console.log (bai1(1,2))

// function circle(chuvi){
//     return (chuvi*2)/3.14}
// let bankinh=+prompt('nhập số bạn muốn')
// console.log (circle(bankinh))

// function circle(dientich){
//     return (dientich*dientich)/3.14}
// let a=+prompt('nhập số bạn muốn')
// console.log (circle(a))

// let a = +prompt('nhập kí tự bạn muốn kiểm tra')
// function check(key){
//     return !isNaN(key)
// }
// alert(check(a))

// let a = +prompt('Nhập số bạn muốn kiểm tra số có phải số dương không ?')
// function checkNegative(number){
//     return number>0
// }
// alert(checkNegative(a))

// function changePlace(number1,number2){
//     let c = 0;
//     c = number1 + number2;
//     number2 = number1;
//     number1 = c - number2;
//     console.log (number1, number2)
// }
// let a =+prompt('nhập số thứ nhất')
// let b =+prompt ('nhập số thứ hai')
// changePlace(a,b)


// function findSmall(a,b,c){
//     if (a<b && a<c){
//         return a
//     }
//     if (b<a && b<c){
//         return b
//     }
//     else {return c}

// function soNguyenTo(){
//     const a = +prompt("nhập vào giá trị");
//     if (a == Number.isInteger) {
//         let co = 0;
//         let num = 2;
//         while (co < a) {
//             let test = true;
//             for (let i = 2; i < num; i++) {
//                 if (num % i == 0) {
//                     test = false;
//                     break;
//                 }
//             }
//             if (test) {
//                 console.log(num);
//                 co++;
//             }
//             num++;
//         }
//         console.log("done");
//     } else {
//         document.write("nhập lại số");
//     }
// }

// s

// function checkWord(str) {
//     const arr = str.split(""); 
//     for (const word of arr) {
//         let check = 0;
//         for (const wordCheck of arr) {
//             if (word === wordCheck) {
//                 check++;
//             }
//         }
//         console.log(`Từ "${word}" xuất hiện ${check} lần.`);
//     }
// }
// const text = "hello word";
// checkFrequency(text);

// function tichSo(){
//     let a = +prompt ('nhập số nguyên dương')
//     let count = 1
//     let b = 1
//     let multi =0
//     if  (a==Number.isInteger || (a>1 && a<100) ) {
//         while (count<=a) {
//             multi=count*b
//             b=multi;
//             count++;
//         }
//         console.log (b)
//     }
//     else { alert ('vui lòng nhập lại số nguyên dương')}
// }

// function sortNumber(){
//     let b = prompt('nhập số bạn muốn')
//     let rev = b.split(""); 
//     rev.sort()
//     console.log (rev)
// }
