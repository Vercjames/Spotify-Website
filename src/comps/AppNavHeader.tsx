import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Tooltip, MenuItem, Menu, AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import VertIcon from "@mui/icons-material/MoreVert";


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AppNavHeader = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const changePage = (target: string) => {
    navigate(target)
  }

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget)
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
            <Tooltip title="Authentication" >
              <IconButton color="inherit" onClick={(e) => handleMenu(e)}>
                <VertIcon />
              </IconButton>
            </Tooltip>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => {
                changePage("login")
                setAnchorEl(null)
              }}>
                Login
              </MenuItem>
              <MenuItem onClick={() => {
                changePage("register")
                setAnchorEl(null)
              }}>
                Register
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}
