import {Box,Button,Stack,Typography} from "@mui/material"
export default function Navbar(){

    return(
        <>

        <Box   bgcolor="secondary.main"  sx={{alignSelf:"center", width:"70%", mt:"20px", display:"flex" ,height:"50px" ,boxShadow:"0px 20px 10px 0px rgba(212, 175, 235, 1)"}}>
            <Typography color="primary.contrastText" variant="h4" >
                Bot Ai
            </Typography>

        </Box>
        
        </>
    )
}