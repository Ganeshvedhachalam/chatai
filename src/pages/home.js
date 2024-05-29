import React, { useState } from "react";
import Navbar from "../Components/navbar";
import { Box, Button, Input, Stack, TextField, Typography } from "@mui/material";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import { ChatInputForm } from "../Components/ChatInputForm ";
import data from "../Backend/Chatmodel.json"
import ChatCard from "../Components/ChatCard";
import InitialChat from "../Components/initialChat";


export function Home(){
    const { chat, setchat } = useOutletContext();
    const [chatId,setChatId]=useState(1)



    const generateResponse=(input)=>{
        const response = data.find(item=>input.toLowerCase() === item.question.toLowerCase())
        let answer="sry"
        if(response !== undefined){
            answer=response.response
        }
        setchat(prev => ([...prev,
            {
                type: 'human',
                text: input,
                time: new Date(),
                id: chatId
            },
            {
                type: 'ai',
                text: answer,
                time: new Date(),
                id: chatId + 1
            }
            ]))

             setChatId((prev)=>prev+1);
    }

    return(
        <>
     
        <Stack display={"flex"} justifyContent={"space-between"}>  

        <Navbar/>  

        {chat.length == 0 && <InitialChat generateResponse={generateResponse} />}

        {chat.length>0 &&
         <Stack   height={1}
                    flexGrow={0}
                    p={{ xs: 2, md: 3 }}
                    spacing={{ xs: 2, md: 3 }}
                    sx={{
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': {
                            width: '10px',
                        },
                        '&::-webkit-scrollbar-track': {
                            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.1)',
                            borderRadius: '8px'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(151, 133, 186,0.4)',
                            borderRadius: '8px'
                        }
                    }}>
            {
            chat.map((item,index) => (<ChatCard key={index} details={item} />))}

         </Stack> }
        
         <ChatInputForm generateResponse={generateResponse} chat={chat}  clearchat={()=>setchat([])} />

         </Stack>
         

        

        </>
    )
}