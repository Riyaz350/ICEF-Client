import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import AuthProvider from './Components/Authentication/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReadDoc from './Components/ReadDoc/ReadDoc.jsx';
import LogIn from './Components/Authentication/LogIn.jsx';
import PrivateRoute from './Components/Hooks/PrivateRoutes.jsx';
import Form from './Components/Registration2/Form.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Form/>
      },
      {
        path: 'logIn',
        element: <LogIn />
      },
      {
        path: 'registrations',
        element:  <PrivateRoute><ReadDoc/></PrivateRoute>
      },
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
