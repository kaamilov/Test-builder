import React from "react";
import { useDispatch } from "react-redux";
import { removeSubCart,toggleCompletedTodo } from "../store/uiSlice";
const Deleted = ({ mainId, id ,isCorrent,setIsCorrent}) => {
    console.log(isCorrent);
const dispatch =useDispatch()
const completed = ()=>{
    const comp = !isCorrent
    return comp
}
  const removeDeleted = () => {
    dispatch(
      removeSubCart({
        id,
        mainId
      })
    );
  };
  
  return (
    <>
      <span onClick={()=>completed()}>&#9989;</span>
      <span>&#9997;</span>
      <span onClick={removeDeleted}>&#10060;</span>
    </>
  );
};

export default Deleted;
