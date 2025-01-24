// * Route layout for login, signup, and admin panel, are not final, authentication will still be handled.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Login from './routes/Login.tsx'
import Signup from './routes/Signup.tsx'
import AdminPanel from './routes/AdminPanel.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>}/>
        
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="admin" element={<AdminPanel/>}/>
      </Routes> 
    </BrowserRouter>
  </StrictMode>,
)
