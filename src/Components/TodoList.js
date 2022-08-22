import React from 'react';
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
  const { todoList } = props || [
    { id: null, title: null, isChecked: false },
  ];

  return (
    <div>
      {todoList.map((todo) =>
        <ItemTodo key={todo.id} >
          <TitleTodo><input value={todo.title} onChange={e => props.onEditTodo(todo.id, e.target.value)}></input></TitleTodo>
          <CheckDoneTodo><input type="checkbox" checked={todo.isChecked} onChange={(e) => props.onCheckDone(todo.id, todo.isChecked)}></input>Done</CheckDoneTodo>
          <DeleteTodo onClick={e => props.onDelete(todo.id)}>Delete</DeleteTodo>
        </ItemTodo>
      )}
    </div >
  );
}

export default TodoList;