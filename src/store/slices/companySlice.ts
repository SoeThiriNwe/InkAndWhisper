import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Company } from "../../../generated/prisma"
import { setCategories } from "./categorySlice";

export const createCompany = createAsyncThunk("CreateCompanyinSlice", async (companyNameParameter : string,thunkApi) => {
        try{
           const response =  await fetch("/api/company",{
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({companyNameParameter,email : "soem28918@gmail.com"})
            });

            const createdCompanyFromApi= await response.json();
            
            thunkApi.dispatch(setCompany(createdCompanyFromApi));

        }catch (err){

        }
    } )

    export const readAllDataFromCompanyId = createAsyncThunk("readData", async ( _ , thunkApi)=>{
        try{
            const response = await fetch("/api/company?companyId=1",{
                method : "GET",
            })
            const readingData = await response.json();
            thunkApi.dispatch(setCompany(readingData.findingCompany));
            thunkApi.dispatch(setCategories(readingData.retreivingCategories))

        }catch(err){

        }
    })

interface InitialStateValueType {
    item : Company | null
}

const initialStateValue : InitialStateValueType = {
    item : null
}

const companySlice = createSlice({
    name : "companySlice",
    initialState : initialStateValue,
    reducers : {
       setCompany : (state, action)=>{
            state.item = action.payload;
       }
    }
})

export const {setCompany} = companySlice.actions;

export default companySlice.reducer;