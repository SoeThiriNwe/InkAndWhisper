import { Box, Divider, Drawer, IconButton, ListItemButton, Typography } from "@mui/material";
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import { useState } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Drawerc from "@/component/drawer";

const backOffice = ()=>{
    return (
        <Box sx={{bgcolor : "#c4d4e8ff",height : "100vh"}}>
            <Drawerc/>
        </Box>
    )
}
export default backOffice;