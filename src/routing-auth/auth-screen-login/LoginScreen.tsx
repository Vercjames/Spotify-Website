import React from "react"
import { Typography, Button } from "@mui/material"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./LoginScreen.css"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AuthLoginScreen = () => {
  return (
    <div>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
       Login Screen
      </Typography>

      <Button variant="contained">
        Login
      </Button>
    </div>
  )
}
