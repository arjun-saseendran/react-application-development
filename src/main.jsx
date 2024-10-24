import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import Root from '../src/routes/root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from "./app/store";
import { Provider } from "react-redux";
import ViewProduct from './components/ViewProduct/ViewProduct.jsx';
import Cart from './components/Cart.jsx';
import Account from './components/Account/Account.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <App /> },
      { path: "/view-product/:productId", element: <ViewProduct /> },
      { path: "/cart", element: <Cart /> },
      { path: "/account", element: <Account /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
