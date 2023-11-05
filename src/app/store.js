import { configureStore } from "@reduxjs/toolkit";
import pictureReducer from "../feature/picture.slice"

export default configureStore({
    reducer: {
        pictures: pictureReducer,

    },
    
})