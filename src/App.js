import './App.css';
import Header from './Components/Header.js';
import TodoList from './Components/TodoList.js';
import TodoFormInput from './Components/TodoFormInput.js';
import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, connectFirestoreEmulator } from 'firebase/firestore';
import { db } from "./firebaseConfig";

function App() {
  const dataRef = collection(db, "todolist");
  const [todoList, setTodoList] = useState([]);

  const getDataFirebase = async () => {
    const data = await getDocs(dataRef);
    setTodoList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  useEffect(() => {
    getDataFirebase();
  }, []);
  console.log(todoList);

  const handleCheckDone = async (id, checkDone) => {
    const newTodoList = [...todoList];
    newTodoList.map(todo => { if (todo.id === id) todo.checkDone = !checkDone; });
    setTodoList(newTodoList);
    const todo = doc(db, "todolist", id);
    const newValue = { checkDone: !checkDone };
    await updateDoc(todo, newValue);
  }

  const handleSubmitForm = async (value) => {
    await addDoc(dataRef, { title: value, checkDone: false });
    getDataFirebase();
  }

  const deleteTodo = async (id) => {
    const newTodoList = [...todoList];
    newTodoList.map(todo => { if (todo.id === id) newTodoList.splice(newTodoList.indexOf(todo), 1); })
    setTodoList(newTodoList);
    const todo = doc(db, "todolist", id);
    await deleteDoc(todo);
  }

  const editItem = async (id, value) => {
    const newTodoList = [...todoList];
    newTodoList.map(todo => { if (todo.id === id) todo.title = value; });
    setTodoList(newTodoList);
    const itemChange = doc(db, "todolist", id);
    const newTitle = { title: value };
    await updateDoc(itemChange, newTitle);
  }

  return (
    <div className="App">
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-4xl text-center">
          Tailwind CSS makes styling React components easier!
        </h1>
      </div>
      <Header logo="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
      <TodoList todoList={todoList} handleCheckDone={handleCheckDone} deleteTodo={deleteTodo} editItem={editItem} />
      <TodoFormInput handleSubmitForm={handleSubmitForm} />
    </div>
  );
}

export default App;
