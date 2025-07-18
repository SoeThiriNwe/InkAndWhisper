import { Box, Divider, Drawer, IconButton, ListItemButton, Typography } from "@mui/material";
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import { useState } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NewCategories from "./newCategories";

const Drawerc = ()=>{
        const[drawerOpen,setDrawerOpen] = useState(false);
        const[newCategoriesOpen,setNewCategoriesOpen] = useState(false);
    return (
        <Box>

            <IconButton onClick={()=>setDrawerOpen(true)}><ViewListRoundedIcon sx={{fontSize : "40px",color : "#1d1235ff"}}/></IconButton>
        
            <Drawer open={drawerOpen} onClose={()=>{setDrawerOpen(false)}} 
                slotProps={{
                    paper : {
                        sx : {
                            backgroundColor : "#1d1149ff",
                            width : "200px"
                        }
                    }
                }} >
                    
                <Box>
                    <ListItemButton onClick={()=>{setNewCategoriesOpen(true)}} sx={{display : "flex", alignItems : "center" , justifyContent : "center",  gap: "20px"}}>
                        <Typography sx={{fontSize : "25px",fontWeight : "bold",fontFamily : "initial",color : "#fefeffff"}} >New </Typography>
                        <IconButton>
                            <AddRoundedIcon sx={{color : "#faf8ffff"}}/>
                        </IconButton>
                    </ListItemButton>
                </Box>
                <Divider variant="middle" sx={{border : " 1.3px solid #faf8ffff"}} />
             </Drawer>
            <NewCategories categoriesOpen={newCategoriesOpen} categoriesClose={(setNewCategoriesOpen)} ></NewCategories>
        </Box>
        
    )
}
export default Drawerc;