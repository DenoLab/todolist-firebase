import React, { useState } from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
  margin: 10px;
  width: inherit;
`;

function TodoFormInput(props) {
  let value = '';
  const [inputValue, setInputValue] = useState('');
  const { onSubmitForm } = props;

  function onSubmit(e) {
    e.preventDefault();
    if (inputValue === "") return;
    onSubmitForm(inputValue);
    setInputValue('');
    value = '';
  }

  function handleChange(e) {
    setInputValue(e.target.value);
    console.log(value);
  }
  return (
    <FormDiv>
      <form onSubmit={onSubmit}>
        <input placeholder="Do somethings..." value={inputValue} onChange={e => handleChange(e)}></input>
        <button>Add to list</button>
      </form>
    </FormDiv>
  );
}

export default TodoFormInput;