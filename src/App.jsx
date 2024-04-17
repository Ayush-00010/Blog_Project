import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import  LoadingSpinner  from "./components/LoadingSpinner";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // simulate async data fetching
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const [themeMode,setThemeMode] = useState("light")
  
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(()=>{
     document.querySelector('html').classList.remove("light","dark")
     document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return !loading ? (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
        <div className="dark-mode-btn-container">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
        </div>
          <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
            <div className="w-full block">
              <Header />
              <main>
              <Outlet />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ) : <LoadingSpinner />;
}

export default App;
