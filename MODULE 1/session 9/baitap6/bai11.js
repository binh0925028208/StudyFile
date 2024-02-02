function age (){
    const A =+prompt ('nhập tuổi của bạn')
    if (A>=18) {
        document.write ('bạn đủ tuổi')
    }
    else { document.write ('bạn chưa đủ tuổi')}
}
function hour (){
    const A =+prompt ('nhập số giờ')
    if (A>=18) {
        document.write ('Good evening')
    }
    else { document.write ('Good morning')}
}
function gio (){
    const A =+prompt ('nhập số giờ')
    if (A<10) {
        document.write ('Good evening')
    }
    else { if (A<20){document.write ('Good day')}
    else {document.write ('good evening')}}
}
function odd (){
    const A =+prompt ('nhập số cần tìm')
    let B 
    B= A%2==0 ? 'đây là số chẵn': 'đây là số lẻ'
document.write (B)
}
function color (){
    const A = prompt ('nhập màu bạn muốn')
    if (A==='vàng') {
        document.write ('màu bạn nhập là yellow')
    }
    else {
        if (A=== 'xanh') {
            document.write ('màu bạn nhập là blue')
        }
        else {
            if (A=== 'đỏ') {
                document.write ('màu bạn nhập là đỏ')
            }
            else {document.write ('màu bạn nhập không hợp lệ')}
        }
    }
}
function number() {
    const a = +prompt ('nhập số của bạn')
    if (a==0){
        document.write ('0')
    }
    else {
        if (a>0) {document.write (a,'là số nguyên dương')}
          else {document.write (a, 'là số nguyên âm')}
        }
    }
    function tb() {
        const a = +prompt('nhập cân nặng của bạn')
        const b = +prompt('nhập chiều cao của bạn')
        const c = b/(a*a)*1000
        if (c<18.5) {
            document.write (c,'Cân nặng thấp(gầy)')
        }
        else {
            if (c<24.9) {
                document.write (c,'Bình thường')
            }
            else {
                if (c<=25) {
                    document.write (c,'Thừa cân')
                }
                else {
                    if (c<29.9) {
                        document.write (c,'Tiền béo phì')
                    }
                    else {
                        if (c<34.5) {
                            document.write (c,'Béo phì độ I')
                        }
                        else {
                            if (c<39.9) {
                                document.write (c,'Béo phì độ II')
                            }
                            else { document.write (c,'Béo phì độ III')
                            }
                        }
                    }
                }
            }
        }
    }
function day() {
        const a = +prompt ('Nhập tháng bạn muốn tìm hiểu')
        switch (a) {
            case 2:
                document.write ('tháng',a,'có 28 ngày')
                break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.write ('tháng',a,'có 31 ngày')
                break;
            default:
                document.write ('tháng',a,'có 30 ngày')
                break;
        }
    }
function score() {
        const a = +prompt ('điểm toán')
        const b = +prompt ('điểm lí')
        const c = +prompt ('điểm hóa')
        const d = +prompt ('điểm văn')
        const e = +prompt ('điểm sử')
        const f = +prompt ('điểm địa')
          if ( isNaN(a)||isNaN(b)||isNaN(c)||isNaN(d)||isNaN(e)||isNaN(f)) {
                document.write ('đây không phải là số')
            }
            else  { 
                const total= ((a+b+c+d+e+f)/6)
                if (total>=8) {
                    document.write ('học sinh giỏi')
                }
                else {
                    if (total>=6.5) {
                        document.write ('học sinh khá')
                    }
                    else {
                        if (total>=5){
                        document.write ('học sinh trung bình')}
                        else {document.write ('học sinh yếu')}
                    }
                }
            
            }
        }
    function zodiac(){
         const a = +prompt ('Your day')
         const b = +prompt ('Your month')
        if ( isNaN(a)||isNaN(b)|| (a>31) || (b>12)) {
            document.write ('đây không phải là dữ liệu hợp lệ')}
            else{
                switch (b) {
                        case 1: if (a<19) {
                            document.write ('bạn là cung ma kết')
                        } else {document.write ('bạn là cung bảo bình') }
                            break;
                        case 2: if (a<18) {
                            document.write ('bạn là cung bảo bình')
                        } else {document.write ('bạn là cung song ngư')}
                            break;
                        case 3: if (a<20) {
                            document.write ('bạn là cung song ngư')
                        } else {document.write ('bạn là cung bạch dương')}
                            break
                        ;case 4: if (a<19) {
                            document.write ('bạn là cung bạch dương')
                        } else {document.write ('bạn là cung kim ngưu')}
                            break;
                        case 5: if (a<20) {
                            document.write ('bạn là cung kim ngưu')
                        } else {document.write ('bạn là cung song tử')}
                            break;
                        case 6: if (a<20) {
                            document.write ('bạn là cung song tử')
                        } else {document.write ('bạn là cung cự giải')}
                            break;
                        case 7: if (a<22) {
                            document.write ('bạn là cung cự giải')
                        } else {document.writeo ('bạn là cung sư tử')}
                            break;
                        case 8: if (a<23) {
                            document.write ('bạn là cung sư tử')
                        } else {document.write ('bạn là cung xử nữ')}
                            break;
                        case 9: if (a<23) {
                            document.write ('bạn là cung xử nữ')
                        } else {document.write ('bạn là cung thiên bình')}
                            break;
                        case 10: if (a<23) {
                            document.write ('bạn là cung thiên bình ')
                        } else {document.write ('bạn là cung hổ cáp')}
                            break;
                        case 11: if (a<22) {
                            document.write ('bạn là cung hổ cáp')
                        } else {document.write ('bạn là cung nhân mã')}
                            break;
                        default: {document.write('bạn là cung nhân mã') }
                            break;
                    }
                }
            }