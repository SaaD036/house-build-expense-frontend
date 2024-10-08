import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from './Layouts';
import LoginPage from './Pages/Auth/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout>Home page</Layout>,
    },
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
        ],
    },
    {
        path: '/transaction',
        element: <Layout>Transaction page</Layout>,
    },
    {
        path: '/users',
        element: <Layout>User page</Layout>,
    },
    {
        path: '/account',
        element: <Layout>Account page</Layout>,
    },
]);

export default router;
