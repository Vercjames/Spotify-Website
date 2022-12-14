import React from "react"
import { Route, Routes } from "react-router-dom"



// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import {AppLayout} from "../routing-app/app-layout/AppLayout";
import {AppIndexScreen} from "../routing-app/app-screen-index/IndexScreen";
import {AppAboutScreen} from "../routing-app/app-screen-about/AboutScreen";
import {AppContactScreen} from "../routing-app/app-screen-contact/ContactScreen";
import {AuthRegisterScreen} from "../routing-auth/auth-screen-register/RegisterScreen";
import {AuthLoginScreen} from "../routing-auth/auth-screen-login/LoginScreen";
import {PortalDashboardScreen} from "../routing-portal/portal-screen-dashboard/DashboardScreen";


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const NavigationRoot = () => {
  const [isAuthenticated, setAuthenticated] = React.useState<boolean>(false)
  return (
    <div>
      {!isAuthenticated ? (
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<AppIndexScreen />} />
            <Route path="about" element={<AppAboutScreen />} />
            <Route path="contact" element={<AppContactScreen />} />
            <Route path="login" element={<AuthLoginScreen />} />
            <Route path="register" element={<AuthRegisterScreen />} />
            <Route path="/*" element={<AppIndexScreen />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route index element={<PortalDashboardScreen />} />
        </Routes>
      )}
    </div>
  )
}
