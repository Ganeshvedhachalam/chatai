
import React from 'react';
import './App.css';
import {Grid, Typography, createTheme,ThemeProvider,Stack,Box,Button } from '@mui/material'
import SideBar from './Components/SIdeBar';
import ReactDOM from 'react-dom/client';
import { Outlet } from 'react-router-dom';

function App() {

  const theme  = createTheme({
    palette:{
      primary:{

        main:"#9785BA",
        light:"#AF9FCD",
        contrastText:"#fff"
      },
      secondary:{
        main:"#D7C7F4",
        light :"#fff"
        , contrastText:"#fff"
      }

    }
    ,typography:{
      fontFamily:"ubuntu,open-sans" ,
    }

  }

   
  );


  return (
    <ThemeProvider theme={theme}>

      
    <div className="App">
      <Grid sx={{display:"flex" ,justifyContent:"center"}} container spacing={5}>
        
       
      <Grid item xs={0} md={3}>
       <SideBar/>
      </Grid>



      <Grid bgcolor="secondary.main" item xs={12} md={9}> 
       <Outlet/>
       <Typography variant="h1" color="initial"> </Typography>
       </Grid>
        
      </Grid>
   
    

    </div>

    </ThemeProvider>
    
  );
}

export default App;
