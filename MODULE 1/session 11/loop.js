// function songuyen() {
//     let a =+prompt('nhập số lần')
//     if (a==Number.isInteger || (a>2 && a<100) ) {
//         let co = 0;
//         let num = 2;
//         while (co < a) {
//           let test = true;
//           for (let i = 2; i < num; i++) {
//             if (num %2!== 0) {
//               test = false;
//               break;
//             }
//           }
//           if (test) {
//             let result = num*num;
//             console.log(result);
//             co++;
//           }
//           num++;
//         }
//     }
//     else { 
//         alert ('nhập sai dữ liệu')
//     }
// }
function songuyen(){}
function color(){
    console.log('%cvăn bản đã có màu khác!', 'color: red');
    console.log('%cvăn bản đã có màu khác!', 'color: yellow');
    console.log('%cvăn bản đã có màu khác!', 'color: blue');
    console.log('%cvăn bản đã có màu khác!', 'color: white');
    console.log('%cvăn bản đã có màu khác!', 'color: brown');
}
function num() {
    let a =100
    let count = 0;
    let number = 1;
    while (count < a) {
          let test = true;
          for (let i = 1; i < number; i++) {
            if (number %3!== 0) {
              test = false;
              break;
            }
          }
          if (test) {
            let result = number*number;
            console.log(result);
            count++;
          }
          number++;
        }
}
function giaithua() {
let number =+prompt('nhập số vào')
let tich=1
for(let i=1; i<=number;i++)
{ tich *= i }
console.log(tich)
}

function numper(){
  const N=+prompt('nhập số bất kì')
  let total =0
  for (let i=1; i<N;i++)
  {if (N%i==0){
    total+=i
  }}
  if (total==n){
    alert ('đây là số hoàn hảo')
  }
  else {alert('đây ko phải là số hoàn hảo ')}
}
function fibo(){
    let a =0
    let b =1
    let c =0
    let count=0
    while (count<21)
    { console.log(a,"fibo") 
    c = a+b;
        a = b;
        b= c;
        count++
    }
}
 function triagle(){
 let n =+prompt('nhập số lần');
    let s = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            s += "*";
        }
        s += "\n";
    }
    console.log(s);
 }
 function tg2() {const n = +prompt("nhập chiều cao")
 for (let i = 1; i <= n; i++) {
     let row = "";
     for (let j = 1; j <= n - i; j++) {
         row += " ";
     }
     if (i === 1 || i === n) {
         for (let j = 1; j <= i * 2 - 1; j++) {
             row += "*";
         }
     } else {
         row += "*";
         for (let j = 1; j <= (i - 1) * 2 - 1; j++) {
             row += " ";
         }
         row += "*";
     }
     console.log(row);
 }}
  
 function tg3()
 {const height = +prompt("Nhập vào chiều cao")
 for (let i = 0; i <= height; i++) {
     let result = ""

     for (let k = 0; k <= height - i; k++) {
         result += " "
     }

     for (let j = 1; j <= i; j++) {
         result += "*"
     }
     console.log(result);
 }}

