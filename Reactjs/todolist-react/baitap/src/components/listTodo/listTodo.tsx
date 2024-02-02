import { useEffect, useState } from "react";
import "./listTodo.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Todo } from "../../App";
import axios from "axios";
import { message, Popconfirm, Modal, Input, Button } from "antd";

interface Props {
  handleUpdate: Function;
  update: boolean;
}
const ListTodo = (props: Props): JSX.Element => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  useEffect((): any => {
    axios
      .get(" http://localhost:2024/TodoList")
      .then((todoDb) => setTodo(todoDb.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.update]);

  const handleDelete = async (id: number): Promise<void> => {
    await axios.delete(` http://localhost:2024/TodoList/${id}`);
  };

  const confirm = async (id: number) => {
    message.success("Delete Todo successfully");
    handleDelete(id);
    props.handleUpdate();
  };
  const cancel = (e: any): any => {
    console.log(e);
    message.error("okkkk");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (id: number) => {
    await axios.patch(` http://localhost:2024/TodoList/${id}`, {
      content: inputValue,
    });
    setIsModalOpen(false);
    props.handleUpdate();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteAll = async () => {
    Promise.all(
      todo.map(async (item: any) => {
        await axios.delete(` http://localhost:2024/TodoList/${item.id}`);
      })
    )
      .then((data) => {
        console.log(data);
        props.handleUpdate();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="listTodoGroup">
      <div className="content">
        <ul className="list">
          {todo.length === 0 ? (
            <img
              style={{ width: "100%" }}
              src="../../../public/logo192.png"
              alt=""
            />
          ) : (
            todo.map((item: Todo) => {
              return (
                <li key={item.id} className="todo">
                  <p>{item.content}</p>
                  <div className="actions">
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      onConfirm={() => confirm(item.id)}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <FaRegTrashAlt className="iconTodo" />
                    </Popconfirm>
                    <>
                      <FaEdit
                        className="iconTodo"
                        type="primary"
                        onClick={showModal}
                      >
                        Open Modal
                      </FaEdit>
                      <Modal
                        title="Basic Modal"
                        open={isModalOpen}
                        onOk={() => handleOk(item.id)}
                        onCancel={handleCancel}
                      >
                        <Input
                          onChange={(e) => setInputValue(e.target.value)}
                          placeholder={item.content}
                          style={{ width: "100%", height: 40 }}
                          type="text"
                        />
                      </Modal>
                    </>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={deleteAll}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button style={{ height: 80 }} className="delete">
          Delete All
        </Button>
      </Popconfirm>
    </section>
  );
};

export default ListTodo;
