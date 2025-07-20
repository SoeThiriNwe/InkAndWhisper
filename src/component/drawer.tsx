import { Box, Divider, Drawer, IconButton, ListItemButton, Typography } from "@mui/material";
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import { useState } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NewCategories from "./newCategories";
import { useAppSelector } from "@/store/hook";

const Drawerc = ()=>{
        const[drawerOpen,setDrawerOpen] = useState(false);
        const[newCategoriesOpen,setNewCategoriesOpen] = useState(false);
        // const selector = useAppSelector((store)=>{return store.category.items})
        const categoriesArrayFormStore = useAppSelector((store)=> store.category.items)//we can remove return and {} bcz one line

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

                {/* {  [1 , 2, 3].map((num) => { return <Typography sx={{ color : "white"}}>{num}</Typography>})  } */}

                { categoriesArrayFormStore.map((category)=>{return <Typography key={category.id} sx={{ color : "white"}}>{category.name}</Typography>})}

             </Drawer>
            <NewCategories categoriesOpen={newCategoriesOpen} categoriesClose={(setNewCategoriesOpen)} ></NewCategories>
        </Box>
        
    )
}
export default Drawerc;