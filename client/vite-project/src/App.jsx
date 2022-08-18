import './App.css'
import './styles/main.css'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Navbar"
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProfilePage from './pages/ProfilePage/MyProfilePage/ProfilePage';
import ProfileUsersPage from "./pages/ProfilePage/ProfileUserPage/ProfilePage"
import Footer from './components/Footer/Footer'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLogged, setIslogged] = useState(window.localStorage.getItem("Token"))
  const location = useLocation()

  useEffect(() => {
    setIslogged(window.localStorage.getItem("Token"))
  }, [location])

  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<LandingPage />} />
          <Route path='my-profile' element={<ProtectedRoutes user={isLogged}> <ProfilePage /> </ProtectedRoutes>} />
          <Route path='home' element={<HomePage />} />
          <Route path='profile/:user' element={<ProfileUsersPage />} />
          <Route path='register' element={<ProtectedRoutes user={!isLogged}> <RegisterPage /> </ProtectedRoutes>} />
          <Route path='about' element={<AboutPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </div>
  )
}

export default App