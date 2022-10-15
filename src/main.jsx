import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import Root, {loader as rootLoader, action as rootAction} from './routes/root'
import ErrorPage from './error-page'
import Contact, {loader as contactLoader,} from './routes/contact'
import EditContact from "./routes/edit";

import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children:[{
      path:'contacts/:contactid',
      element: <Contact />,
      loader: contactLoader
    },
    {
      path: "contacts/:contactId/edit",
      element: <EditContact />,
      loader: contactLoader,
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
