import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import './output.css';
import ShowDoctor from './pages/ShowDoctor.tsx';
import EditDoctor from './pages/EditDoctor.tsx';
import Doctors from './pages/Doctors.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DeleteDoctor from './pages/DeleteDoctor.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/doctors",
    element: <Doctors />,
  },
  {
    path: "/doctors/:id",
    element: <ShowDoctor />,
  },
  {
    path: "/doctors/edit/:id",
    element: <EditDoctor />,
  },
  {
    path: "/doctors/delete/:id",
    element: <DeleteDoctor />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
