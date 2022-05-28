import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// css
import './index.css';
// routes
import Landing from './routes/landing';
import Login from './routes/login/login';
import Register from './routes/login/register';
import Dashboard from './routes/dashboard';
import NotFound from './routes/notfound';
// context
import { UserContextProvider } from './components/userContext';
//apollo
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
})

function App() {
    return (
      <div>
        <UserContextProvider>
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="dashboard" element={<Dashboard />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </BrowserRouter>
          </ApolloProvider>
        </UserContextProvider>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);