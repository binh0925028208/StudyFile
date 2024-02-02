function findNum(){
const a = [1,6,10,20,39,22,2,8,52,32]
const b = a.filter (function(ele,i){
    return ele >= 10
})
console.log ('các số lớn >= 10', b);}

function findBigest(){

    const a = [1,6,10,20,39,22,2,8,52,3]
    let b = 0
    let c = 0
    let total = 0
    let tbc = 0
    for (let i=0; i<a.length; i++) {
        if (a[i] > b) {
            b = a[i];
            c = i;
        }
    }
    for (let d=0; d<a.length; d++)   {
        total+= a[d]
    }
    tbc = total/a.length;
    console.log (b, 'là số lớn nhất tại vị trí', c)
    console.log (tbc,'là trung bình ')
}

//     a.sort(function(a, b){return b - a})
//     console.log (a[0], 'là số lớn nhất')
// }
function reverse(){
    const a = [1,6,10,20,39,22,2,8,52,3];
    const b = a.reverse();
    console.log (b)
}
function negative() {
    const a = [1,-6,10,-20,-39,22,-2,8,-52,3];
    let b = []
    for (let i=0; i<a.length; i++) {
        if (a[i]<0){
            b.push(a[i])
        }
    }
    console.log (b)
}
function findNum(){
    const a = [1,6,10,20,39,22,2,8,52,11];
    const b= +prompt('nhập số bạn muốn tìm')
    let index =a.indexOf(b);
    if(index!=-1){
         console.log (b,'is in the array')
    }
    else {
        console.log (b,'is not in the array')
    }
}
function findDel(){
    const a = [1,6,10,20,39,22,2,8,52,3];
    const b= +prompt('nhập số bạn muốn tìm')
    let index =a.indexOf(b);
    if(index!=-1){
        const c = a.filter(function(element,index){
            return element !==b
        })
         console.log (b,'is in the array');
         console.log (c);

    }
    else {
        console.log (b,'is not in the array')
    }
}
function down() {
    const a = [1,6,10,20,39,22,2,8,52,3];
    a.sort(function(a, b){return b - a})
    console.log (a, 'là chuỗi số giảm dần')
}
function join(){
    const a = [1,6,10,20,39,22,2,8,52,3];
    const b = [21,56,55,48,98,66,45,11,112,32];
    let c = a.concat(b);
    console.log (c)
}
 


