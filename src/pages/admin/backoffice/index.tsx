import { Box, Drawer, IconButton } from "@mui/material";
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import { useState } from "react";

const backOffice = ()=>{
    const[drawerOpen,setDrawerOpen] = useState(false);
    return (
        <Box>
            <IconButton onClick={()=>setDrawerOpen(true)}><ViewListRoundedIcon sx={{fontSize : "40px",color : "#1d1235ff"}}/></IconButton>
            <Drawer open={drawerOpen} onClose={()=>{setDrawerOpen(false)}}>
ddfjdklfjdlfjdklfjl
             </Drawer>
        </Box>
    )
}
export default backOffice;