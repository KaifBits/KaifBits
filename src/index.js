import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import UserList from './Components/UserList';
import LeaderBoard from './Components/LeaderBoard';


const route=createBrowserRouter([

  {
    path:"/",
    element:<UserList/>
  },
  {
    path:"/rank",
    element:<LeaderBoard/>
  }
  
  ])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={route} >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RouterProvider>
);


