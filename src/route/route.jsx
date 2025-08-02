
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { Home } from '../pages/Home';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import About from '../pages/About';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    },
    {
        path: 'cart',
        element: <Cart />
    }
]);
