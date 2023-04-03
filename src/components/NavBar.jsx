import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { IconButton } from '@mui/material';

function NavBar({mode, setMode}) {
    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky">
                    <Toolbar 
                     variant="dense"
                     sx={{
                        display: "flex",
                        justifyContent: "space-between"
                     }}
                     >
                        <Typography variant="h6" color="inherit" component="div">
                            Dictionary
                        </Typography>

                        <IconButton
                         color='inherit'
                         onClick={e => setMode(mode === "light" ? "dark" : "light")}
                        >
                          {mode === 'light' ? <NightlightRoundIcon/> : <WbSunnyIcon/>}
                          <Typography>
                            {mode === 'light' ? "Dark Mode" : "Light Mode"}
                          </Typography>
                        </IconButton>
                        
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    )
}

export default NavBar