function mottram(){
    let a = 1
    while (a<100){
        console.log (a)
        a++
    }
    console.log ('đã hoàn thành')
}
function nhietdo(){
    let a =+prompt ('nhập nhiệt độ hiện tại')
    if(a<20){
        alert ('vui lòng tăng nhiệt độ')
    }
    if (a>100) {
        alert('vui lòng giảm nhiệt độ')
    }
    else {
        alert('nhiệt độ ổn áp')
    }
}
function fibo(){
    let a =0
    let b =1
    let sumab =0
    let count=0
    while (count<21)
    { console.log(a,"fibo") 
    sumab = a+b;
    a = b;
    b= sumab;
    count++
    }
}
function fibodiv(){
    let a =1
    let b =1
    let sumab =0
    let count=0
    while (count<21)
    { if(a%5!==0) { 
        sumab = a+b;
        a = b;
        b= sumab;
    } 
    else { console.log (a, 'là số cần tìm')
    }
    count++
    }
}
function fibosum(){
    let a =0
    let b =1
    let sumab =0
    let count=0
    let total = 0
    let c = 0
    while (count<21)
    {  sumab = a+b;
        a = b;
        b= sumab;
        count++;
        total = a + c;
        c = total;
    }
    console.log (total, 'là tổng 20 số fibo đầu tiên ')
}
function sum7() {
    let a = 1
    let count = 0
    let b = 0
    let c = 0
    let d = 0
    while (count<31){
        if (a%7==0){
            b = a + b;
            c = b;
            c +=d;
            d = c;
            count++;
        }
        else {
            a++;
         }
    }
    console.log (c,'là tổng 30 số chia hết cho 7')
}
function fizz(){
    let a = 1
    while (a<100){
        if ((a%3==0)&&(a%5==0))  {
            console.log ('fizzbuzz');
            a++;
        }
        if (a%3==0) {
            console.log ('fizz');
            a++;
        }
        if (a%5==0) {
            console.log ('buzz');
            a++;
        }
        else {
            console.log (a)
            a++;
        }
    }
}
// function guess(){
//     let a= +prompt ('nhập khoảng giá trị');
//     let count=0
//     let c =0
//     { while (count<a)
//         { count++;
//             //nhập công thức random số rồi cho c bằng số đó//
//             c=123;
//     }
//     let b= +prompt ('nhập số bạn muốn đoán')
//     while (b!==c) {
//         if (b<c) {
//                 alert ('số bạn đoán nhỏ hơn số này');
//              }
//         else {
//             alert ('số bạn đoán lớn hơn số này');
//         }
//     }
//          }
//     alert ('bạn đã đoán đúng, chúc mừng');
// }
function tichso(){
    let a = +prompt ('nhập số nguyên dương')
    let count = 1
    let b = 1
    let multi =0
    if  (a==Number.isInteger || (a>1 && a<100) ) {
        while (count<=a) {
            multi=count*b
            b=multi;
            count++;
        }
        console.log (b)
    }
    else { alert ('vui lòng nhập lại số nguyên dương')}
}