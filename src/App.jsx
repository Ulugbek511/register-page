import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/HomePage";
// import Sidebar from './components/SideBar';
// import RegisterPage from "./pages/RegisterPage" lazy import qilindi ////
// import LoginPage from "./pages/LoginPage";
// import CreatePage from "./pages/CreatePage";
import GeneraLayout from "./pages/GenaeralLayout"

const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const CreatePage = React.lazy(() => import('./pages/CreatePage'));

function App() {
  return (
    <div>
       <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        {/* <Sidebar /> */}
        <Routes>
          <Route path='/' element={<GeneraLayout />}>
            <Route index element={<Home />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            {/* <Route path='/formel' element={<FormEl />} */}
          </Route>
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
   </div>
  );
}

export default App;
