// function getAllItems(tableName: string) {
//   const entities = JSON.parse(localStorage.getItem(tableName) as string) || [];
//   return entities;
// }

// function deleteItemById(tableName: string, id: number) {
//   try {
//     const entities =
//       JSON.parse(localStorage.getItem(tableName) as string) || [];

//     let delIndex = -1;
//     for (let i = 0; i < entities.length; i++) {
//       const _entity = entities[i];
//       if (_entity.id == id) {
//         delIndex = i;
//       }
//     }

//     if (delIndex != -1) {
//       entities.splice(delIndex, 1);
//       localStorage.setItem(tableName, JSON.stringify(entities));
//     }

//     return true;
//   } catch (error) {
//     return false;
//   }
// }

// interface Todo {
//   id: number;
//   context: string;
// }
// const Todo: Todo[] = [];
// if (!JSON.parse(localStorage.getItem("Todo") as string)) {
//   localStorage.setItem("Todo", JSON.stringify(Todo));
// }

// class TodoList2 implements Todo {
//   id: number;
//   context: string;

//   constructor(id: number, context: string) {
//     this.id = id;
//     this.context = context;
//   }

//   get getId(): number {
//     return this.id;
//   }
// }

// function onAdd(): void {
//   const jobList: TodoList2[] = getAllItems("Todo");
//   let id: number = jobList.length > 0 ? jobList[jobList.length - 1].id + 1 : 1;
//   let context: HTMLInputElement = document.getElementById(
//     "todoText"
//   ) as HTMLInputElement;
//   let detailValue: string = context.value;
//   let newJob: TodoList2 = new TodoList2(id, detailValue);
//   jobList.push(newJob);
//   localStorage.setItem("Todo", JSON.stringify(jobList));
//   renderJobs();
// }

// function onDelete(id: number): void {
//   let popUp: string = "Are you sure to delete?";
//   if (confirm(popUp)) {
//     deleteItemById("Todo", id);
//     renderJobs();
//   }
// }

// function renderJobs(): void {
//   let jobList: Todo[] = getAllItems("Todo");
//   let renderToDoList2: HTMLElement = document.getElementById(
//     "jobOnBoard"
//   ) as HTMLElement;
//   renderToDoList2.innerHTML = ``;
//   jobList.forEach((item: Todo) => {
//     renderToDoList2.innerHTML += ` <div class="todoBox">
//       <p>${item.context}</p>
//       <button onclick="onDelete(${item.id})">
//         <i class="fa-solid fa-trash"></i>
//       </button>
//     </div>
//       `;
//   });
// }
