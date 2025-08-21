import { Box, Divider, Drawer, IconButton, ListItemButton, ListItemText, Typography } from "@mui/material";
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
                            backgroundColor : "#d5cae6f8",
                            width : "200px"
                        }
                    }
                }} >
                    
                <Box>
                    <ListItemButton onClick={()=>{setNewCategoriesOpen(true)}} sx={{display : "flex", alignItems : "center" , justifyContent : "center",  gap: "20px"}}>
                        <Typography sx={{fontSize : "25px",fontWeight : "bold",fontFamily : "initial",color : "#6923a1cc"}} >New </Typography>
                        <IconButton>
                            <AddRoundedIcon sx={{color : "#6923a1cc"}}/>
                        </IconButton>
                    </ListItemButton>
                </Box>
                <Divider variant="middle" sx={{border : " 1.3px solid #6923a1cc"}} />

                {/* {  [1 , 2, 3].map((num) => { return <Typography sx={{ color : "white"}}>{num}</Typography>})  } */}

                <Box sx={{marginTop : "10px"}}>
                    { categoriesArrayFormStore.map((category)=> {
                        return  (
                            <ListItemButton key={category.id} onClick={()=>{
                                setDrawerOpen(false) 
                                
                            }}>
                                <Typography  sx={{color : "#6923a1cc", fontSize : "20px" ,fontFamily : "initial" , fontWeight : "bold"}}> {category.name} </Typography>
                            </ListItemButton>
                        )
                    })}
                </Box>

             </Drawer>
            <NewCategories categoriesOpen={newCategoriesOpen} categoriesClose={(setNewCategoriesOpen)} ></NewCategories>
        </Box>
        
    )
}
export default Drawerc;