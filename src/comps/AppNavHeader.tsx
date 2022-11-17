import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AppNavHeader = () => {
  const navigate = useNavigate()

  const changePage = (target: string) => {
    navigate(target)
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => changePage("")}>
              Spotify Clone
            </Typography>
            <Button color="inherit" onClick={() => changePage("")}>Home</Button>
            <Button color="inherit" onClick={() => changePage("about")}>About</Button>
            <Button color="inherit" onClick={() => changePage("contact")}>Contact</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}
