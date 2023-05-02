import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import { Flip, ToastContainer } from 'react-toastify';
import AuthProvider from './components/AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </React.StrictMode>
  </AuthProvider>
)
