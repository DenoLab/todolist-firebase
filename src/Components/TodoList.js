import React, { useState } from 'react';
import styled from 'styled-components';

const ItemTodo = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  // justify-content: space-around;
`;
const TitleTodo = styled.li`
  width: 60%;  
  text-align: left;
  input {
    border: none;
    border-bottom: 1px solid red;
  };
`;
const CheckDoneTodo = styled.div`
  width: 20%;  
`;
const DeleteTodo = styled.button`
  width: 20%;
`;

function TodoList(props) {
  const [valueChange, setValueChange] = useState('');
  let tempValue = '';

  const { todoList, handleCheckDone, deleteTodo, editItem } = props || [
    { id: null, title: null, checkDone: false },
  ];
  function checkDone(index, checkDone) {
    if (!handleCheckDone) return;
    handleCheckDone(index, checkDone);
  }
  function deleteItem(index) {
    if (!deleteTodo) return;
    deleteTodo(index);
  }

  function itemChange(id, e) {
    tempValue += e.target.value;
    console.log(tempValue);
    editItem(id, tempValue);
    tempValue = '';
  }

  return (
    <div>
      {todoList.map((todo) =>
        <ItemTodo key={todo.id} >
          <TitleTodo><input value={todo.title} onChange={e => itemChange(todo.id, e)}></input></TitleTodo>
          <CheckDoneTodo><input type="checkbox" checked={todo.checkDone} onChange={(e) => checkDone(todo.id, todo.checkDone)}></input>Done</CheckDoneTodo>
          <DeleteTodo onClick={e => deleteItem(todo.id)}>Delete</DeleteTodo>
        </ItemTodo>
      )
      }
    </div >
  );
}

export default TodoList;