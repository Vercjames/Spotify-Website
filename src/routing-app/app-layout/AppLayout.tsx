import React from "react"
import { Outlet } from "react-router"
import { Typography } from "@mui/material"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import {AppNavHeader} from "../../comps/AppNavHeader";


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const AppLayout = () => {
  return (
    <div>
      <AppNavHeader />

      <Outlet />
    </div>
  )
}
