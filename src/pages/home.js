import React, { useState } from "react";
import Navbar from "../Components/navbar";
import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { ChatInputForm } from "../Components/ChatInputForm ";
import data from "../Backend/Chatmodel.json"
import { type } from "@testing-library/user-event/dist/type";


export function Home(){
    const [chat ,setchat]=useState([])
    const [chatId,setChatId]=useState(1)



    const generateResponse=(input)=>{
        const response = data.find(item=>input.toLowerCase() ===item.question.toLowerCase())
        let answer="sry"
        if(response!== undefined){
            answer=response.response
        }
        setchat(prev=>([...prev,
            {
                type:"human",
                text:input,
                time :new Date(),
                id :chatId
            },
            {
                type:"ai",
                text:answer,
                date:new Date(),
                id :chatId+1
            }
        ]))

             setChatId((prev)=>prev+1);
    }

    return(
        <>
        <Navbar/>
        <Box display={"flex"} justifyContent={"center"}>    
        <Typography color={"primary.contrastText"}>HOW CAN I HELP YOU TODAY</Typography>
        
         </Box>
        <ChatInputForm generateResponse={generateResponse} />

        </>
    )
}