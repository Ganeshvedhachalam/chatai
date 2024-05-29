import {Box,Button,Stack,Typography} from "@mui/material"
import Logo from "../assets/Group 1000011097.png"
import { useNavigate } from "react-router-dom"
export default function SideBar(){
  const navigate = useNavigate ()

    return(
        <>

        <Box sx={{ display:"flex",alignItems:"center", border:"1px solid violet", flexDirection:"column"}}>

        <Stack sx={{ backgroundColor:"primary.main" }}
        // sx={{ backgroundColor:"primary.main"}} 
        direction="row" width="150px" justifyContent={"center"} >
          <Box  component="Img" src={Logo} width="50px" height="50px"> </Box>
        
        <Button  variant="contained" onClick={()=>navigate("/")} sx={{color:"primary.contrastText"}} >NewChat</Button>

        </Stack>

        
     

      <Button   variant="contained" onClick={()=>navigate("/history")}  sx={{ backgroundColor:"primary.main" ,color:"white"}}
       >pastconvo </Button>

        </Box>
       

        
        </>
    )
}