import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root2 from './Components/Root/Root2';

import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import BookDetails from './Components/BookDetaills/BookDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root2></Root2>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
       {
        path: '/',
        element: <Home></Home>
       },
       {
        path:'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json')

       },
       {
        path:'dashboard',
        element: <Dashboard></Dashboard>
       }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
