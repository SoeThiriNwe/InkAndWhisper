import { useAppDispatch } from "@/store/hook";
import { createCategory } from "@/store/slices/categorySlice";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

interface ParaType {
    categoriesOpen : boolean
    categoriesClose : (value : boolean) => void;
}

const NewCategories = ( obj : ParaType )=>{
    const [categoryName, setCategoryName] = useState<string>("");
    const dispatch = useAppDispatch();
    // const creatCategory = async ()=>{
    //     const response = await fetch ("/api/createCategory",{
    //         method : "POST",
    //         headers : {
    //             "content-type" : "application/json"
    //         },
    //         body : JSON.stringify({categoryName, companyId : 1})
    //     })
    //     const createdCategory = await response.json();
        

        
    // } that are written in categorySlice.ts


    const handleCreateCategory =()=>{
        dispatch(createCategory(categoryName))
    }    

    return (
        <Dialog open={obj.categoriesOpen} onClose={() => obj.categoriesClose(false)} 
            slotProps={{
                paper : {
                    sx : {
                        background : "linear-gradient(45deg, #f5c9d6ff , #b5d6f7ff, #f5c9d6ff , #e4caf5ff  )",
                        width : "300px",
                    }
                } 
            }}
        >
             <DialogTitle sx={{fontFamily : "initial",fontSize : "30px",color : "#2a2374ff"}}>Add Category</DialogTitle>
             <DialogContent >
                 <TextField onChange={(event)=>{setCategoryName(event.target.value)}} sx={{marginTop : "15px",'& .MuiInputBase-input':{color : "#1c1849ff"},'& label': {color: '#1e1e4dff',  },'& label.Mui-focused': {color: '#110c6eff', }, width :  "252px" }} label="Name" />
                 
             </DialogContent>
             <DialogActions >
                <Button onClick={()=>{handleCreateCategory()}} variant="contained" sx={{color : "#d2cff1ff", bgcolor : "#171157ff"}}    >Add</Button>
             </DialogActions>
        </Dialog>
    )
}
export default NewCategories;