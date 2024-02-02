// let a=+prompt('nhập số bạn muốn')
// function square(a){
//     return a*a}
// console.log (square(a))

// function circle(b){
//     return (b*2)/3.14}
// let b=+prompt('nhập số bạn muốn')
// console.log (circle(b))

// function circle(b){
//     return (b*b)/3.14}
// let b=+prompt('nhập số bạn muốn')
// console.log (circle(b))

// let a=+prompt('nhập số bạn muốn')
// function multi(number){
//     let res =1
//     for (let i=1; i<=number;i++){
//     res *=i}
//     return res
// }
// console.log (multi(a))

// let a = +prompt('nhập kí tự bạn muốn kiểm tra')
// function check(key){
//     return !isNaN(key)
// }
// alert(check(a))

// function findSmall(a,b,c){
//     if (a<b && a<c){
//         return a
//     }
//     if (b<a && b<c){
//         return b
//     }
//     else {return c}
// }
// let a=+prompt('nhập số thứ nhất bạn muốn');
// let b=+prompt('nhập số thứ hai bạn muốn');
// let c=+prompt('nhập số thứ ba bạn muốn');
// console.log (findSmall(a,b,c))

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

// function arr(){
//     let a =+prompt('nhập số thứ nhất')
//     let b =+prompt ('nhập số thứ hai')
//     let c =+prompt ('nhập số thứ ba')
//     let arry =[]
//     arry.push(a,b,c)
//     let rever= arry.reverse()
//     console.log (arry)
// }

// let array =[1,2,3,4,5,1,2,3,4,1,2,3,1,2,1]
// function checkTime(numberz){
//     let num=0
//     for (let i=0;i<array.length;i++)
//     {
//     if (numberz==array[i]){
//         num++;
//     }}
// if (num ==0) {
//     num=-1;
// }
// return num
// }
// let a =+prompt('nhập số cần tìm')
// console.log (checkTime(a))

function checkWord(str) {
    //cắt chuỗi thành array
    const arr = str.split(""); 

    // vòng lặp 1 sẽ lặp qua từng kí tự trong arr
    for (const word of arr) {
        //đặt ra 1 biến để hiển thị số lần lặp lại
        let check = 0;
        //vòng lặp thứ 2 vẫn lặp qua từng kí tự và so sánh cùng với mỗi kí tự của vòng lặp đầu
        for (const wordCheck of arr) {
            if (word === wordCheck) {
                check++;
            }
        }
        //hiển thị kết quả trong vòng lặp 1
        console.log(`Từ "${word}" xuất hiện ${check} lần.`);
    }
}

const text = "hello word";
checkFrequency(text);