function age() {
    let b=prompt ('nhập tuổi của bạn')
    document.write (b)
}
function fullname()
{
    const a = prompt ('nhập tên của bạn')
    const b = prompt ('nhập họ của bạn')
    const c = (b+c)
    document.write (c)
}
function changevalue () {
    var A = +prompt ('nhập giá trị a' )
    var B = +prompt ('nhập giá trị b')
    A=B+A
    B=A-B
    A=A-B
    document.write (A,B)
}
function changetype(){
    let A = +prompt ('nhập bất kì cái gì')
    document.write (typeof A) 
}
function isstudent(){
    let isstudent = true
    document.write (typeof isstudent)
}
function math_f () {
    const a = +prompt ('nhập số a')
    const b = +prompt ('nhập số b')
    tong = a+b
    hieu = a-b
    thuong = a/b
    tich = a*b
    document.write (tong," ",hieu," ",thuong," ",tich)
}
function radius(){
    const a= +prompt ('nhập số bán kính')
    chuvi = a*2*Math.PI 
    document.write (chuvi)

}
function evenodd(){
    const a= +prompt('nhập số bất kì')
    b=a%2
    if (b<=0) {document.write (a,'is even')}
    else {document.write (a,'is odd')} 
}