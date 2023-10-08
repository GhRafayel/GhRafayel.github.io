import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Game1 from './Components/GamesComponent/Game1/Game1';
import Timer from './Components/ProjectsComponent/Timer/Timer'
import Weather from './Components/ProjectsComponent/Weather/Weather';
import Calculation from './Components/ProjectsComponent/Calculation/Calculation';
import Game2 from './Components/GamesComponent/Game2/Game2';
import Game3 from './Components/GamesComponent/Game3/Game3';
import Shopping from './Components/Shopping/Shopping';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Timer",
    element: <Timer/>
  },
  {
    path: "/Weather",
    element: <Weather/>
  },
  {
    path: "/Calculation",
    element: <Calculation/>
  },
  {
    path: "/Game1",
    element: <Game1/>
  },
  {
    path: '/Game2',
    element: <Game2/>
  },
  {
    path: '/Game3',
    element: <Game3/>
  },
  {
    path: '/Shopping',
    element: <Shopping/>
  }
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
