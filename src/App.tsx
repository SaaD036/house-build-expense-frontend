import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';

import router from './Routes';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                pauseOnFocusLoss
                pauseOnHover
                transition={Bounce}
            />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
