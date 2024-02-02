function abc(){
    const a = +prompt ("điểm toán")
    const b = +prompt ("điểm lí")
    const c = +prompt ("điểm hóa") 
    let d = ((a+b+c)/3)
    document.write("đây là điểm trung bình", d )
    console.log (d>8)
}