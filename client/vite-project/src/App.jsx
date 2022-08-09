import './App.css'
import './styles/main.css'
//dependencies
import { Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"

//components
import Header from "./components/Header/Header";



function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='home' element={<HomePage />} />
        <Route path='login' element={<LoginPage/>} />
        <Route path='register' element={<RegisterPage/>}/>

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
