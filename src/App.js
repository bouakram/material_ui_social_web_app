import './App.css';
import RightBar from "./components/RightBar"
import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { Stack } from '@mui/system';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [mode , setMode] = useState('light')
  const darkTheme = createTheme({
    palette:{
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar />
      <Stack direction={"row"} spacing={2}>
      <SideBar setMode={setMode} mode={mode}/>
      <Feed />
      <RightBar />
      </Stack>
    </Box>
    </ThemeProvider>
  );
}

export default App;
