function tbc() {
    const a = +prompt ('nhập điểm toán')
    const b = +prompt ('nhập điểm lí')
    const c = +prompt ('nhập điểm hóa')
    if ( isNaN(a)||isNaN(b)||isNaN(c)) {
        document.write ('a,b,c không phải là số')
    }
    else  { 
        const d= ((a+b+c)/3)
        if (d>8) {
            document.write ('học sinh giỏi')
        }
        else {
            if (d>5) {
                document.write ('học sinh khá')
            }
            else {
                document.write ('học sinh trung bình')
            }
        }
    
    }
}
function biggest() {
    const a = +prompt ('nhập số A')
    const b = +prompt ('nhập số B')
    const c = +prompt ('nhập số C')
    if ( isNaN(a)||isNaN(b)|| isNaN(c)) {
        document.write ('a,b,c không phải là số')
    }
    else {
        if (a>b&&a>c) 
        {document.write ('A là số lớn nhất')}
        else { 
            if(b>a&&b>c)
            {document.write ('B là số lớn nhất')}
            else {
                if (c>a&&c>b)
                {document.write ('C là số lớn nhất')}
                else {document.write ('Không có số lớn nhất')}
            }
    }
    }
}