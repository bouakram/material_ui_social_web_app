import { AppBar, Avatar, Badge, Box, InputBase, styled, TextField, Toolbar, Typography} from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolBar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between"
});

const Search = styled("div")({
    // width : "40%",
    background : "white",
    borderRadius : "5px",
    padding : "0 10px"
});

const IconsPlaces = styled(Box)({
    display : "flex",
    gap : "10px",
    alignItems : "center",
    cursor : "pointer"
});

function NavBar() {
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
            <Typography variant='h6'>Space Dev</Typography>

            <Search sx={{display : {xs : "none" , sm : "block"}}}>
                <InputBase placeholder='Search ...'/>
            </Search>

            <IconsPlaces>
            <Badge badgeContent={25} color="error">
            <EmailIcon />
            </Badge>
            <Badge badgeContent={8} color="error">
            <NotificationsIcon />
            </Badge>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </IconsPlaces>
        </StyledToolBar>
    </AppBar>
  )
}

export default NavBar