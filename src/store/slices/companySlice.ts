import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Company } from "../../../generated/prisma"


// const createCompany = async () => {
//         await fetch("/api/company",{
//             method : "POST",
//             headers : {
//                 "content-type" : "application/json"
//             },
//             body : JSON.stringify({companyName,email : "soem28918@gmail.com"})
//         })
//     }; 


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