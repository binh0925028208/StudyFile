
function handleRegister(event){
    event.preventDefault()
    const emailVa = document.getElementById ('email')
    const idVa = document.getElementById ('id')
    const passVa = document.getElementById ('pass')
    const mainData=JSON.parse(localStorage.getItem('users'))||[]
    const checkEmail = mainData.find((item) => item.email== emailVa.value)
    if (checkEmail) {
        return alert("email đã tồn tại")
    }
    else{
        const newUser= {
            id: mainData.length ? mainData[mainData.length-1].id+1 : 1,
            email : emailVa.value,
            name : idVa.value,
            password: passVa.value,
            role:2,
            carts:[],
            status: 1
        }
        mainData.push(newUser)
        localStorage.setItem('users', JSON.stringify(mainData))
    }
}

function handleLogin (event) {
    event.preventDefault()
    const emailInput = document.getElementById('userEmail')
    const passInput = document.getElementById('userPass')
    const dataBase=JSON.parse(localStorage.getItem('users'))||[]
    const userLogin= dataBase.find((item,index) =>{
        return item.email == emailInput.value && item.password ==passInput.value
    })
    if (userLogin){
        if (userLogin.status ==1) {
            window.location.href ="https://www.youtube.com/"
            localStorage.setItem("userLogin",JSON.stringify(userLogin))
        }
        else{
            alert ('tài khoản bị khóa')
        }
    }
    else{
        alert ('tài khoản/ mật khẩu không đúng')
    }
}
function handleLogout(){
    localStorage.removeItem ('userLogin')
    window.location.href="../session 16/baitap.html"
}