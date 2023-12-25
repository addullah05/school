import { configureStore } from "@reduxjs/toolkit";
import { schoolService } from './services/schoolService';
import {authService} from "./services/authService";
import authReducers from "./reducers/authReducers";
import {academyService} from "./services/academyService";
import { classService } from "./services/classService";
import {studentService} from "./services/studentService";
import { teacherService } from "./services/teacherService";

const store = configureStore({
    reducer: {
        [schoolService.reducerPath]: schoolService.reducer,
        [authService.reducerPath]: authService.reducer,
        [academyService.reducerPath]:academyService.reducer,
        [classService.reducerPath]:classService.reducer,
        [studentService.reducerPath]:studentService.reducer,
        [teacherService.reducerPath]:teacherService.reducer,
        "authReducer": authReducers
    },
    
       
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(schoolService.middleware, authService.middleware, academyService.middleware, classService.middleware, studentService.middleware, teacherService.middleware),
});

export default store;
