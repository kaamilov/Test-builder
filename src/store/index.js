import { configureStore } from "@reduxjs/toolkit";
import  toDoSlice  from "./uiSlice";
export const store = configureStore({
    reducer:{
        test:toDoSlice
    }
})