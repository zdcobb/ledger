import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Landing from './routes/landing';
import Login from './routes/login/login';
import Register from './routes/login/register';
import Dashboard from './routes/dashboard';
import NotFound from './routes/notfound';
import { UserContextProvider } from './components/userContext';

function App() {
    return (
        <div>
            <UserContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Landing />}></Route>
                        <Route path="login" element={<Login />}></Route>
                        <Route path="register" element={<Register />}></Route>
                        <Route path="dashboard" element={<Dashboard />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </BrowserRouter>
            </UserContextProvider>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);