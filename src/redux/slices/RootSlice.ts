import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        card_number: "Card_number",
        expiration_date: "Expiration_date",
        cvv: "Cvv",
        name: "Name",
        zip_code: "Zip_code",
    },
    reducers: {
        chooseCard_number: (state, action) => {state.card_number = action.payload},
        chooseExpiration_date: (state, action) => {state.expiration_date = action.payload},
        chooseCvv: (state, action) => {state.cvv = action.payload},
        chooseName: (state, action) => {state.name = action.payload},
        chooseZip_code: (state, action) => {state.zip_code = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseCard_number, chooseExpiration_date, chooseCvv, chooseName, chooseZip_code } = rootSlice.actions