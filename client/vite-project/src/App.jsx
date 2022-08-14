import './App.css'
import './styles/main.css'
import {useState, useEffect} from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Navbar"
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProfilePage from './pages/ProfilePage/MyProfilePage/ProfilePage';
import ProfileUsersPage from "./pages/ProfilePage/ProfileUserPage/ProfilePage"
import Footer from './components/Footer/Footer'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';

function App() {
  const [isLogged, setIslogged] = useState(window.localStorage.getItem("Token"))
  const location = useLocation()
  
  useEffect(()=> {
    setIslogged(window.localStorage.getItem("Token"))
  },[location])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='my-profile' element={<ProtectedRoutes user={isLogged}> <ProfilePage /> </ProtectedRoutes> } />
        <Route path='home' element={<HomePage />} />
        <Route path='profile/:user' element={<ProfileUsersPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App