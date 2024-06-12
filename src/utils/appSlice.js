import { createSlice } from "@reduxjs/toolkit"


const appSLice  = createSlice({
    name : "app",
    initialState : {
        isMenuOpen : true,
    },
    reducers : {
        toggleMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state) => {
            state.isMenuOpen = false;
        }
    },
});

export const {toggleMenu, closeMenu} = appSLice.actions;
export default appSLice.reducer;