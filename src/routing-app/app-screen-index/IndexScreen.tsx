import React from "react"
import {Button, Typography} from "@mui/material"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import "./IndexScreen.css"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AppIndexScreen = () => {
  return (
    <div>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
       Home Screen
      </Typography>
      {/*<Button variant="text">Text</Button>*/}
      {/*<Button variant="contained">Contained</Button>*/}
      {/*<Button variant="outlined">Outlined</Button>*/}
    </div>
  )
}
