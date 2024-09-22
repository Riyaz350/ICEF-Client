import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Registration2 from './Components/Registration2/Registration2.jsx';
import Home from './Components/Home/Home.jsx';
import AuthProvider from './Components/Authentication/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReadDoc from './Components/ReadDoc/ReadDoc.jsx';
import LogIn from './Components/Authentication/LogIn.jsx';
import PrivateRoute from './Components/Hooks/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Registration2 />
      },
      // {
        // path: '/studentForm',
        // element: <Registration/>
        // element:<RegistrationDummy/>
        // element: <Registration2 />,
      // },
      {
        path: 'logIn',
        element: <LogIn />
      },
      {
        path: 'registrations',
        element:  <PrivateRoute><ReadDoc/></PrivateRoute>
      },
      // {
      //   path: '/singleRegistration/:id',
      //   element: <PrivateRoute><SingleRegistration /></PrivateRoute>
      // }

    ]
  },
]);
const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
