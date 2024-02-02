import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import ListTodo from "./components/listTodo/listTodo";

export interface Todo {
  id: number;
  content: string;
  status: boolean;
}

function App() {
  const [update, setUpdate] = useState<boolean>(false);

  const handleUpdate = () => {
    setUpdate(!update);
  };

  return (
    <div className="App">
      <Header handleUpdate={handleUpdate} />
      <ListTodo update={update} handleUpdate={handleUpdate} />
    </div>
  );
}

export default App;
