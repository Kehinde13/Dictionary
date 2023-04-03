import {
   Box, 
   createTheme, 
   ThemeProvider
   } from '@mui/material';
import { useState } from 'react';
import Main from './components/Main'
import NavBar from './components/NavBar';

function App() {
   const [mode, setMode] = useState("light")

   const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme} >
      <Box
       bgcolor={"background.default"} 
       color={"text.primary"} 
      >
       <NavBar
        mode={mode}
        setMode={setMode}
       />
       <Main />
      </Box>
    </ThemeProvider>
  );
}

export default App;
