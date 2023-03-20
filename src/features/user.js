import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name : "user", //name of the state
    initialState: {value: {name : null}}, //name of the user
    reducers: {
       login: (state, action) => {
            state.value.name = action.payload
       }  
    }
})

export const {login} = userSlice.actions
export default userSlice.reducer