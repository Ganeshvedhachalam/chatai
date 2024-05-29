import React, { useState } from "react";
import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";


export function ChatInputForm( {generateResponse}){

    const [chat ,setchat]=useState([])
    const [input,setInput]=useState("")

 

    const HandleSubmit=(e)=>{
         e.preventDefault()
        generateResponse(input)
        setInput("")
    

    }
    const Handlesave=()=>{
       

    }

    return(
        <>
     
        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>    

         
         <Box component="form" onSubmit={HandleSubmit} >
           <TextField  value={input} onChange={(e)=>setInput(e.target.value)} autoFocus placeholder="quench your curiousity" >  </TextField>
           
            <Button  onClick={HandleSubmit} variant="conatined" type="submit"
             sx={{ bgcolor:"primary.light" ,color:"primary.contrastText"}}>Ask</Button>
            <Button  onClick={Handlesave} variant="conatined" 
             sx={{ bgcolor:"primary.light" ,color:"primary.contrastText"}}>Save</Button>
         </Box>
         </Box>
    

        </>
    )
}