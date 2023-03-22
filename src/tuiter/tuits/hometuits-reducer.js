import { createSlice } from "@reduxjs/toolkit"
import tuitsdata from "./tuitsdata.json"

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const hometuitsSlice = createSlice({
    name:'hometuits',
    initialState: tuitsdata,
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }

    }


})

export const {createTuit, deleteTuit} = hometuitsSlice.actions;

export default hometuitsSlice.reducer;