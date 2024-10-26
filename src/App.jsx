import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import ThemeButton from "./Componenets/ThemeButton"
import Card from "./Componenets/Card"



function App() {
const [themeMode,setThememode]=useState("light")
const lightTheme=()=>{
  setThememode("light")
}
const darkTheme=()=>{
  setThememode("dark")
}

useEffect(()=>{
document.querySelector('html').classList.remove("light","dark")
document.querySelector('html').classList.add(themeMode)
},[themeMode])



  return (
    <>
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themebutton*/}
            <ThemeButton></ThemeButton>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card></Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
