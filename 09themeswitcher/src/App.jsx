import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from "./context/theme.js";
import Card from "./components/Card.jsx"
import ThemeBtn from "./components/ThemeBtn.jsx"

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("theme-light", "theme-dark");
    html.classList.add(`theme-${themeMode}`);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center justify-center" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="w-full max-w-sm">
          <div className="flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App;
