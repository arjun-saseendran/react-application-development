import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import Root from '../src/routes/root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from "./app/store";
import { Provider } from "react-redux";


const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    children: [
      {path: '/account',
        element: <App/>
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
