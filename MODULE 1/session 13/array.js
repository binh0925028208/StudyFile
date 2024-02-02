function arry(){
    let a = [4,8,6,5,1,7]
    for (let i = 0; i < a.length; i++) {
        console.log ('vị trí thứ',i,'là số',a[i]);
    }
}
function forof(){
    let a =[5,6,7,8,9,10]
    for (const i of a) {
        console.log (i )
    }
}
function connect (){
    let mycolor =['Lion','Tiger','Wolf','Kangaroo']
    console.log(mycolor.join()  )
}
// function even() {
// const num=+prompt('nhập số tùy ý');//242365
// const result = [str[0]];
// for(let x=1; x<num.length; x++)
//   {
//     if((num[x-1]%2 === 0)&&(num[x]%2 === 0))
//      {
//       result.push('-', num[x]);
//      }
//     else
//      {
//       result.push(num[x]);
//      }
//   }
// console.log(result.join(''));
// }
function even() {
    let a = prompt ('nhập số bạn muốn')
    let res =""
    for (let i=0;i < a.length;i++) {
        if ((a[i]%2==0) && (a[i+1]%2==0)) {
            res += a[i]+('-');
        }
        else { res+= a[i] }
    }
    console.log(res);
}

// }
function up() {
var str = prompt ('nhập chữ bạn muốn');
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));

}
function dic(){
    let vi = ['mèo', 'gà', 'vịt', 'chó', 'gấu']
    let en = ['cat', 'chicken','duck','dog','bear']
    let a = +prompt ('nhập từ con vật bạn muốn')
    let index =vi.indexOf(a);
    if(index!=-1){
         arlet (en[index]);
    }
    else {
        alert('không tìm thấy');
    }
}
// for (let i=0; i<vi.length;i++) {
// if (a==vi[i]){
//     alert (en[i]);
//     break;
// } else {
//     alert('không tìm thấy');
//     break;
// }

function find(){
    let value = prompt("Enter a number: ");
    let numbers = [-3, 5, 1, 3, 2, 10];
    for (let i = 0; i < numbers.length; i++) {
        if (value == numbers[i]) {
            alert("Value " + numbers[i] + "found at " + i);
        }
     }
}

const list = document.getElementById("todo")

const arr = []

function addTodo() {
    const input = prompt("nhập công việc")
    arr.push(input)
    list.innerHTML = ""
    for (let index in arr) {
        list.innerHTML += `<li>${arr[index]}</li>`
    }
}

function delTodo() {
    const input = +prompt("nhập vào vị trí muốn xoá")
    delete arr[input]

    list.innerHTML = ""
    for (let index in arr) {
        list.innerHTML += `<li>${arr[index]}</li>`
    }
}

function updateTodo() {
    const input = +prompt("nhập vào vị trí muốn sửa")
    const data = prompt("Nhập vào công việc sửa")

    arr.splice(input, 1, data)
    
    list.innerHTML = ""
    for (let index in arr) {
        list.innerHTML += `<li>${arr[index]}</li>`
    }
}

function odd(){
   let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
   let b = [] ;
   let c = [];
    for (let i=0; i < a.length; i++)
    if (a[i]%2==0) {
        b.push(a[i]);
    }
    else {
        c.push(a[i]);
    }
    console.log (b);
    console.log (c);
}