import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Drawerc from "@/component/drawer";
import { useAppDispatch } from "@/store/hook";
import { readAllDataFromCompanyId } from "@/store/slices/companySlice";

const backOffice = ()=>{
    const dispatch = useAppDispatch();
    const [selectedCategory, setSelectedCategory] = useState();

    useEffect(()=>{
        dispatch(readAllDataFromCompanyId())
        console.log("hello")
    },[])


    
    return (
        <Box sx={{bgcolor : "#c4d4e8ff",height : "100vh"}}>
            <Drawerc/>
        </Box>
    )
}
export default backOffice;