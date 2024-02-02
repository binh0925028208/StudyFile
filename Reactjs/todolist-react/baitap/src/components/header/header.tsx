import { useRef, useState } from "react";
import "./header.css";
import axios from "axios";

interface Props {
  handleUpdate: Function;
}

const Header = (props: Props): JSX.Element => {
  const [task, setTask] = useState<string>("");
  // console.log(todo);
  const input: any = useRef();
  const handlePost = async (): Promise<void> => {
    await axios
      .post("http://localhost:9000/todoLists", { content: task, status: false })
      .then(() => {
        input.current.focus();
        setTask("");
        props.handleUpdate();
      })
      .catch(() => {
        console.log("loi");
      });
  };

  return (
    <header>
      <h1 className="titleHeader">Todolist</h1>
      <div className="addTodo">
        <input
          autoFocus
          ref={input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="inputTodo"
        />
        <button onClick={handlePost} className="btnTodo">
          Add+
        </button>
      </div>
    </header>
  );
};

export default Header;
