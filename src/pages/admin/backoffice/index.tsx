import { Box, Divider, Drawer, IconButton, ListItemButton, Typography } from "@mui/material";
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import { useEffect, useState } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Drawerc from "@/component/drawer";
import { useAppDispatch } from "@/store/hook";
import { readAllDataFromCompanyId } from "@/store/slices/companySlice";

const backOffice = ()=>{
    const dispatch = useAppDispatch();

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