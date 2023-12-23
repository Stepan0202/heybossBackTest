import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './routes/root.jsx';
/*Routes */
import Dashboard from './routes/Dashboard.jsx';
import Catalogue from './routes/Catalogue.jsx';
import Page_404 from './routes/Page_404.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Page_404/>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/catalogue",
        element: <Catalogue/>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
