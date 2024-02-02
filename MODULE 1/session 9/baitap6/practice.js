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

