import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Nav = styled.div`
  width: 50%;
  height: 300px;
  margin: 0 auto;
  box-shadow: 0 0 100px grey;
  border-radius: 15px;
  color: white;
   & span {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      
      & h3{
        display: flex;
        justify-content: center;
       
      }
      & div{
   display: flex;
   justify-content: center;
   & button{
    background: green;
    border: none;
   }
      }
    }
  & nav {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 60px grey;
    border-radius: 10px;
   
    & header {
      width: 100%;
      height: 50%;
      font-size: 25px;
      color: white;
      & p {
        display: flex;
        justify-content: center;
      }
      & div {
        display: flex;
        justify-content: center;
        font-size: 30px;
      }
    }
    & section {
      width: 100%;
      height: 100%;
      /* background-color: aqua; */
     & button{
      width: 40%;
      height: 40px;
      background-color: #1c3b3b;
     }
    }
  }
`;

const Example = () => {
  const { todo } = useSelector((state) => state.test);
  console.log(todo);
  const [value, setValue] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const onHandlerClick = (isCorrent) => {
    if (isCorrent) {
      setScore(score + 1);
    }
    const nextQuestion = value + 1;
    if (nextQuestion < todo.length) {
      setValue(nextQuestion);
    } else {
      setIsCorrect(true);
    }
  };
  const onHandler= ()=>{
    setValue(0)
    setScore(0)
    setIsCorrect(false)
  }
  return (
    <Nav>
      {isCorrect ? (
        <span>
          <h3>
            Провильных ответов {score} из {todo.length}
          </h3>
          <div>
            <button onClick={onHandler}>Заново</button>
          </div>
          
        </span>
      ) : (
        <nav>
          <header>
            <p>Вопрос {value + 1} / {todo.length}</p>
            
            <div>{todo[value].questionText} ?</div>
          </header>

          <section>
            {todo[value].answerOptions.map((item, id) => (
              <button onClick={() => onHandlerClick(item.isCorrent)} key={id}>
                {item.value}
              </button>
            ))}
          </section>
        </nav>
      )}
    </Nav>
  );
};

export default Example;
