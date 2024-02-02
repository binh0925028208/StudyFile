// var imagesrc = [
//     "./blog_f80b599183c340bca744c174e7ab2af8.webp",
//     "./coffee-brain-caffeine-neuroscincces.webp",
//     "./intro-1645231221.jpg",
//     "./Latte_and_dark_coffee.jpg",
//     "./Roasted_coffee_beans.jpg",
//     "./blog_f80b599183c340bca744c174e7ab2af8.webp",
//     "./coffee-brain-caffeine-neuroscincces.webp",
//     "./intro-1645231221.jpg",
//     "./Latte_and_dark_coffee.jpg",
//     "./Roasted_coffee_beans.jpg",
    
//   ];
//   var stt= 0;
//   function next() {
//     const content = document.querySelectorAll('.pic')
//     var changePic = document.getElementById("img_slider");
//     content[stt].classList.remove('active')
//     stt++;
//     if (stt>= imagesrc.length) {
//       stt= 0;
//     }
//     changePic.src = imagesrc[stt];
//     content[stt].classList.add ('active')
//   }

// function prev() {
//     var changePic = document.getElementById("img_slider");
//     const content = document.querySelectorAll('.pic')
//     content[stt].classList.remove('active')
//     stt--;
//     if (stt<0) {
//       stt= imagesrc.length-1;
//     }
//     changePic.src = imagesrc[stt];
//     content[stt].classList.add ('active')
// } 
function hide(){
  document.getElementById("text").style.display="none";
}
function show(){
  document.getElementById("text").style.display="block";
}
// bài 1

function showModal(){
  document.getElementById('modal').style.display ='block';
}
function closeModal(){ 
  document.getElementById('modal').style.display='none';
}
// bài 2

function normal(){
  document.getElementById('background').style.backgroundColor='#ddd';
}
function changeRed(){
  document.getElementById('background').style.backgroundColor='red';
}
function changeGreen(){
  document.getElementById('background').style.backgroundColor='green';
}
function changeYellow(){
  document.getElementById('background').style.backgroundColor='yellow';
}
// bài 3 

function showIt(){
  document.getElementById('tooltiptext').style.visibility= 'visible';
}
function defa(){
  document.getElementById('tooltiptext').style.visibility= 'hidden';
}
// bài 4

const object=[{
  todo:'hit the gym',
  status:1,
},]
   
if (!(JSON.parse(localStorage.getItem("object")))){
  localStorage.setItem('object',JSON.stringify(object))
}
function renderTodo(){
  const localData = JSON.parse(localStorage.getItem('object'))
  const listTodo = document.querySelector('#myUL')
  listTodo.innerHTML=""
  localData.forEach(function(item,index){
    listTodo.innerHTML+=`
    <li>
    <div class="todo_detail">
    <p style="text-decoration:${item.status?'line-through':'none'}"onlick="updateTodo('${index}')">${item.todo}</p>
      <div>
        <button onclick="deleteTodo('${index}')">delete</button>
        <button onclick="updateTodo('${index}')">update</button>
      </div>
    </div>
  </li>`
  })
} 
renderTodo()
function newJob(event){
  event.preventDefault()
  let myTodolist = document.getElementById('todo')
  let todolist = myTodolist.value
  let newData= {
    todo:todolist,
    status:1,
  }
  const data= JSON.parse(localStorage.getItem('object'))
  data.push(newData)
  localStorage.setItem('object',JSON.stringify(data))
  document.getElementById('todo').value=""
  renderTodo()
}

function deleteTodo(index){
  const dataLocal =JSON.parse(localStorage.getItem('object'))
  const newData = dataLocal.filter(function(item,i){
    return index!=i
  })
  localStorage.setItem('object',JSON.stringify(newData))
  renderTodo()
}
function updateTodo(index){
  const dataLocal =JSON.parse(localStorage.getItem('object'))
  const newData = dataLocal.map(function(item,i){
    if(index==i){
      return{
        todo:item.todo,
        status : 2,
      }
    }
    else{ return item}
  })
  renderTodo()
}