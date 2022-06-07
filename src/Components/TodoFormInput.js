import React, { useState } from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
  margin: 10px;
  width: inherit;
`;

function TodoFormInput(props) {
  let value = '';
  const [inputValue, setInputValue] = useState('');
  const { handleSubmitForm } = props;

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue === "") return;
    handleSubmitForm(inputValue);
    setInputValue('');
    value = '';
  }

  function inputChange(e) {
    value += e.target.value;
    setInputValue(value);
    console.log(value);
  }
  return (
    <FormDiv>
      <form onSubmit={handleSubmit}>
        <input placeholder="Do somethings..." value={inputValue} onChange={e => inputChange(e)}></input>
        <button>Add to list</button>
      </form>
    </FormDiv>
  );
}

export default TodoFormInput;