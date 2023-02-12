import React from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import axios from 'axios';
import Home from "./home";
import Postpage from './Postpage';
import Aboutus from './Aboutus';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const  App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Home />,
    },
    {
      path: "/details/:id",
      element:  <Postpage />,
    },
    {
      path: "/aboutus",
      element: <Aboutus />
    }
  ]);
 
 
    return (<>
     <RouterProvider router={router}/>
     </>
    )
}

export default App;
