import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addSubCard } from "../store/uiSlice";
import { removeCart, removeSubCart } from "../store/uiSlice";
import Deleted from "./Deleted";

const StyleComponent = styled.div`
  width: 100%;
  height: 210px;
  box-shadow: 0 0 10px grey;
  padding-left: 20px;
  margin-top: 20px;
  & header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    & span {
      margin-right: 20px;
      cursor: pointer;
    }
    & p {
      font-weight: 900;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-size: 20px;
    }
  }

  & input {
    border: none;
    border-bottom: 1px solid;
    background-color: rgba(254, 254, 254, 0);
  }
  & section {
    width: 100%;
    height: 70%;
    & span {
      width: 30px;
      height: 30px;
      cursor: pointer;
      margin-left: 10px;
    }
    & nav {
      display: flex;
      justify-content: space-around;
      & div {
        background: #e7eae74c;
        border-radius: 10px;
        cursor: pointer;
        width: 100px;
        display: flex;
        justify-content: center;
      }
    }

    & input {
      width: 70%;
      font-size: 18px;
      color: white;
    }
    & button {
      width: 30%;
      height: 25%;
      margin-top: 15px;
      font-size: 15px;
    }
  }
`;
const Cart = ({ data, answerOptions, id }) => {
  const dispatch = useDispatch();
  const state=useSelector(state=>state.test.todo)
  console.log(state);

  const [value, setValue] = useState("");
  const [isCorrent,setIsCorrent]=useState(false)

  // const [score, setScore] = useState(0);
  // const [isCorrect, setIsCorrect] = useState(false);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    dispatch(
      addSubCard({
        id: Math.random().toString(),
        mainId: data.id,
        value: value,
        isCorrent: isCorrent,
      })
    );
    setValue("");
  };
  const onRemomeHandler = (id) => {
    dispatch(removeCart(id));
  };
  

  return (
    <>
      <StyleComponent>
        <header>
          <p>{data.questionText}?</p>{" "}
          <span onClick={() => onRemomeHandler(id)}>&#10060;</span>
        </header>
        <section>
          <nav>
            <input
              placeholder="Добавить ворианты ..."
              type="text"
              value={value}
              onChange={onChangeHandler}
            />
            <div onClick={onSubmitHandler}>Добавить</div>
          </nav>

          {answerOptions.map((item) => (
            <>
              <button onClick={()=>setIsCorrent(true)} key={item.id}>{item.value}</button>
              <Deleted  {...item}/>
            </>
          ))}
        </section>
      </StyleComponent>
    </>
  );
};

export default Cart;
