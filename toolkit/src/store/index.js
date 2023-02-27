// Хранилище Store
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todoSlice';


// Возвращает хранилище, который содержит набор редюсеров
export default configureStore({
    reducer: {
        todos: todoReducer,
    }
})