import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const initialTodoListState = ["Learn React Context API"];

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialTodoListState);

  const getNumberOfItems = () => todoList.length

  const addTodo = (newTodoItem) =>{
    setTodoList([...todoList, newTodoItem])
  }

  const removeTodo = (todoIndex) =>{
    const newList = todoList.filter((_, index) => index !== todoIndex)
    setTodoList(newList)
  }

  const contextValue = {
    todoList,
    getNumberOfItems,
    addTodo,
    removeTodo
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
