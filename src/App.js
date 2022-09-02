import './App.css';
import RightBar from "./components/RightBar"
import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import NavBar from './components/NavBar';

function App() {
  return (
    <Box>
      <NavBar />
      <Stack direction={"row"} spacing={2}>
      <SideBar />
      <Feed />
      <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
