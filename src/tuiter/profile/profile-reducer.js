import {createSlice} from "@reduxjs/toolkit";
import data from "./profile-info.json"

const profileSlice = createSlice({
    name:'profile',
    initialState: data,
    reducers: {
        editProfile(state, action) {
            if (action.payload.name.length > 0) {
                state.name = action.payload.name
            }
            if (action.payload.bio.length > 0) {
                state.bio = action.payload.bio
            }
            if (action.payload.location.length > 0) {
                state.location = action.payload.location
            }
            if (action.payload.website.length > 0) {
                state.website = action.payload.website
            }

            if (action.payload.dateOfBirth.length > 0) {
                state.dateOfBirth = action.payload.dateOfBirth
            }
        }
    }
    }
)
export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;

