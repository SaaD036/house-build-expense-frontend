import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ProtectedRoutes from './protectedRoutes';

import Layout from './Layouts';
import LoginPage from './Pages/Auth/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoutes auth>
                <Layout>Home page</Layout>
            </ProtectedRoutes>
        ),
    },
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                element: (
                    <ProtectedRoutes>
                        <LoginPage />
                    </ProtectedRoutes>
                ),
            },
        ],
    },
    {
        path: '/transaction',
        element: (
            <ProtectedRoutes auth>
                <Layout>Transaction page</Layout>
            </ProtectedRoutes>
        ),
    },
    {
        path: '/users',
        element: (
            <ProtectedRoutes auth>
                <Layout>User page</Layout>
            </ProtectedRoutes>
        ),
    },
    {
        path: '/account',
        element: (
            <ProtectedRoutes auth>
                <Layout>Account page</Layout>
            </ProtectedRoutes>
        ),
    },
]);

export default router;
