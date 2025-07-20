import { useAppDispatch } from "@/store/hook";
import { createCompany } from "@/store/slices/companySlice";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AdminSignUp =  ()=>{
    const [companyName, setCompanyName] = useState<string>(""); 
    const dispatch = useAppDispatch();


    const createCompanyHandler = ()=>{
        dispatch(createCompany(companyName))
    }
    
    return (
        <Box sx={{ background : "linear-gradient(45deg, #bc588fff , #0a2b4bff, #30308fff , #b484d4ff  )",height : "100vh",display : "flex",justifyContent : "center", alignItems : "center"}}>
            <Box sx ={{background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', width : "450px", height : "250px",borderRadius : "10px",border : "6px solid rgba(255, 255, 255, 0.2)",display : "flex",justifyContent : "center", alignItems : "center", flexDirection : "column", gap : "25px"}}>
                <Typography variant="h5" sx={{fontWeight: "700" ,fontFamily : "initial" ,color : "#141b5cff" }}>Company Name   </Typography>
                <TextField onChange={(event)=>{setCompanyName(event.target.value)}} id="standard-basic" label="Name" variant="standard"  sx={{'& .MuiInputBase-input':{color : "#110c6eff"},'& label': {color: '#110c6eff',  },'& label.Mui-focused': {color: '#110c6eff', }, }} />
                <Button variant="outlined" sx = {{color : "#110c6eff",borderColor : "#110c6eff",width :"200px"}} onClick={()=>{createCompanyHandler()}}>Submit</Button>
            </Box>
        </Box>
    )
}
export default AdminSignUp;