import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../store/uiSlice";
import Cart from "./Cart";


const Forma = styled.div`
    width: 90%;
    height: 90px;
    box-shadow: 0 0 10px grey;
    padding-right: 20px;
    color: white;
    margin:  0 auto;
    
    & form {
      display: flex;
      justify-content: center;
      align-items: center;
      & label {
    font-size: 25px;
    color: white;
    }
    & input {
      height: 25px;
      width: 50%;
      font-size: 22px;
      background-color: goldenrod;
      color: white;
      border: none;
      border-bottom: 1px solid;
      padding-left: 10px;
    }
    & button {
      width: 100px;
      height: 40px;
      font-size: 20px;
    }
    }
    
    
    
  `;
const Form = () => {
  const { todo } = useSelector((state) => state.test);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const data = {
    questionText: value,
    id: Math.random().toString(),
    answerOptions: [],
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }

    dispatch(addTodo(data));
    setValue("");
  };
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  
  return (
    <>  <Forma>
     <form onSubmit={onSubmitHandler}>
          <label>Добавить вопрос:</label>
          <input
            type="text"
            value={value}
            onChange={onChangeHandler}  
            placeholder="Пишите ворос ..."
          />
          <button onClick={onSubmitHandler}>Добавить</button>
        </form>
     
      

          {todo.map((item) => (
            <Cart key={item.id} data={item} {...item} />
          ))}

         <button>Сохранить</button>
        
      </Forma> 
    </>
  );
};

export default Form;
