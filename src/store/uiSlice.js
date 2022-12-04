import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    // {
    //   questionText:'',
    //   answerOptions:[
    //       {answeText:''}
    // ]
    // },
    {
      questionText:"Столица США?",
      answerOptions:[
        {value:"Бостон", isCorrent:false},
        {value:"Вашингтонг", isCorrent:true},
        {value:"Нью-Йорк", isCorrent:false},
        {value:"Лос-Анджелес", isCorrent:false},
      ]
    },
    {
      questionText:"4+4?",
      answerOptions:[
        {value:"5", isCorrent:false},
        {value:"10", isCorrent:false},
        {value:"8", isCorrent:true},
        {value:"11", isCorrent:false},
      ]
    },
    {
      questionText:"Президент России?",
      answerOptions:[
        {value:"Мусерский", isCorrent:false},
        {value:"Путин", isCorrent:true},
        {value:"Акаев", isCorrent:false},
        {value:"Лелин", isCorrent:false},
      ]
    },
    {
      questionText:"Кыргызстан?",
      answerOptions:[
        {value:"Европе", isCorrent:false},
        {value:"Африке", isCorrent:false},
        {value:"Америка", isCorrent:false},
        {value:"Азия", isCorrent:true},
      ]
    },
  ],
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    addSubCard(state, action) {
      
      const newSub = state.todo.find(
        (item) => item.id === action.payload.mainId
      );
      newSub.answerOptions.push(action.payload);
    },
    removeCart: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
   removeSubCart:(state,action)=>{
    const removeCart = state.todo.find((item)=>item.id === action.payload.mainId)
    removeCart.answerOptions = removeCart.answerOptions.filter((item)=>item.id !== action.payload.id)
   },
   
  },
});
export const { addTodo, addSubCard, removeCart, removeSubCart } = toDoSlice.actions;
export default toDoSlice.reducer;
