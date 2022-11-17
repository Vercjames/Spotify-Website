import React from "react"
import { Route, Routes } from "react-router-dom"



// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import {AppLayout} from "../routing-app/app-layout/AppLayout";
import {AppIndexScreen} from "../routing-app/app-screen-index/IndexScreen";
import {AppAboutScreen} from "../routing-app/app-screen-about/AboutScreen";
import {AppContactScreen} from "../routing-app/app-screen-contact/ContactScreen";


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const NavigationRoot = () => {
  return (
    <div>
      <Routes>
        <Route element={<AppLayout />}>
        <Route index element={<AppIndexScreen />} />
        <Route path="about" element={<AppAboutScreen />} />
        <Route path="contact" element={<AppContactScreen />} />
        <Route path="/*" element={<AppIndexScreen />} />
        </Route>
      </Routes>
    </div>
  )
}
