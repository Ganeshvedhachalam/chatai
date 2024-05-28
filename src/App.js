
import './App.css';
import {Grid, Typography, createTheme,ThemeProvider,Stack,Box,Button } from '@mui/material'
import SideBar from './SIdeBar';

function App() {

  const theme  = createTheme({
    palatte:{
      primary:{

        main:"#9785BA",
        lite:"#AF9FCD",
        white:"#fff"
      },
      secondary:{
        main:"#D7C7F4",
        white:"#fff"
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

      <Grid item xs={12} md={9}> <Typography variant="h2">
      prasana
    </Typography>
 </Grid>
        
      </Grid>
   
    

    </div>

    </ThemeProvider>
    
  );
}

export default App;
