import {Box,Button,Stack,Typography} from "@mui/material"
import Logo from "./assets/Group 1000011097.png"
export default function SideBar(){

    return(
        <>

        <Box sx={{ border:"1px solid violet",backgroundColor:"primary"}}>

        <Stack sx={{ backgroundColor:"primary"}}
        // sx={{ backgroundColor:"primary.main"}} 
        direction="row">
          <Box component="Img" src={Logo} width="50px" height="50px"> </Box>
        
        <Button  >NewChat</Button>

        </Stack>

        
      <Stack  
    //   sx={{backgroundColor:"primary.main" }}
      className="pastcon"></Stack>
      <Button sx={{ backgroundColor:"primary"}}
       >pastconvo </Button>

        </Box>
       

        
        </>
    )
}