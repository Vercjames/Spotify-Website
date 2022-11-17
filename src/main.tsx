import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import {NavigationRoot} from "./navigation/NavigationRoot";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationRoot />
    </BrowserRouter>
  </React.StrictMode>
)
