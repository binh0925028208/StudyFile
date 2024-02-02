import Todo from "./todo.model";
import User from "./user.model";

const createTable = () => {
  Todo.sync().then(() => {
    console.log("todoList Created");
  });
  User.sync().then(()=>{
    console.log("user created")
  })
};

export default createTable;
