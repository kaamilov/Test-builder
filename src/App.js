import { useState } from "react";
import styled from "styled-components";
// import "./App.css";
import Example from "./components/Example";
import Form from "./components/Form";
const Styled = styled.div`
  width: 100vw;
  height: 120vw;
  background-color: goldenrod;
  & button{
   background:  rgba(255, 255, 255, 0);
    border: 1px solid;
    color: white;
    font-size: 25px;
    border-radius: 10px;
    cursor: pointer;
    margin: 20px;
    width: 200px;
    height: 50px;
  }
  & button:hover{
    background:#641E16;
    border: none
    
  }
  `

function App() {
  const [show,setShow]=useState(false)
  const [isShow,setIsShow]=useState(false)
  const [swich,setSwich]=useState(false)


  const showHandler = ()=>{
    
    setShow(!show)
    setIsShow(false)
  }
  const isShowHandler =()=>{
    
    setIsShow(!isShow)
    setShow(false)
  }
  const sshow = ()=>{
    setShow(false)
  }
  
  return <Styled>
    <div className={swich ? "container" :""}>
    <input type="checkbox" onClick={()=>setSwich(!swich)} />
    <button onClick={()=>showHandler()}>Создать тест</button>
    <button onClick={()=>isShowHandler()}>Тест</button>
    { show &&  <Form/>}
    {isShow && <Example/>}
    {/* <Example/> */}
    
    </div>
  
  </Styled>
}

export default App;
