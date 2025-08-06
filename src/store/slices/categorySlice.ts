import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "../../../generated/prisma";
export const createCategory  = createAsyncThunk("categorySlice/createCategory" , async ( categoryNamePara : string , thunkApi ) => {

        try {
            const response = await fetch ("/api/createCategory",{
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({ categoryNamePara , companyId : 1})
            })
            const createdCategory = await response.json();
            thunkApi.dispatch(addNewCategory(createdCategory))
        }catch (err) {

        }
    } )
interface InitialStateValueType {
    items : Category[]
} 
const initialStateValue : InitialStateValueType = {
    items : []
}
export const categorySlice = createSlice({
    name : "categorySlice",
    initialState : initialStateValue,
    reducers : {
        addNewCategory : ( state , action ) => {
            state.items = [...state.items , action.payload];
        },
        setCategories : (state , action)=>{
            state.items = action.payload;
        }
    }
})
export const { addNewCategory, setCategories } = categorySlice.actions;

export default categorySlice.reducer;