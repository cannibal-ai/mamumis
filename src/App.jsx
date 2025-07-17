import { useState, useEffect } from "react";
import mimi from "./assets/mamumi.jpg";
import './index.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; 
  });
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  const turnOnDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
      <button
        onClick={turnOnDarkMode}
        className={`fixed top-4 right-4 z-50 p-2 rounded-full shadow hover:scale-105 transition ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
        {darkMode ? 'light' : 'night'}
      </button>
      <div className="  flex items-center justify-center min-h-screen bg-white dark:bg-black transition-colors duration-500"> 
        <div className="bg-black dark:bg-white shadow-lg rounded-xl w-64 h-90 p-6 text-center animate-softBounce">
          <div className="flex items-center space-x-8 mb-8 pt-5 px-6">
            <a>
              <img src={mimi} className="rounded-full  border-2 dark:border-black border-white" alt="mamumi" />
              <a className="text-lg text-white dark:text-black font-bold mt-4 block">cannnibal</a>
              <a className="text-sm  text-gray-500 font-bold  ">cannibal-ai</a>
              <div className="mt-4">
                <li className=" dark:text-gray-700 text-white   font-noto text-sm">อะไรก็ได้โตแล้ว</li>
                <li className=" dark:text-gray-700 text-white   font-noto text-sm">อะไรก็ได้โตแล้ว</li>
                <li className=" dark:text-gray-700 text-white   font-noto text-sm">อะไรก็ได้โตแล้ว</li>
              </div>
            </a>
          </div>
          <a href="https://www.instagram.com/harveyyv/"  target="_blank" className="dark:bg-slate-900 bg-slate-200 hover:opacity-80 shadow-lg rounded-xl p-2 max-w-md text-center">
            <a  className="px-14 dark:text-white text-black font-bol font-noto ">ติดต่อจร้</a> 
          </a> 
        </div>
      </div>
    </div>
    
  )
}

export default App
