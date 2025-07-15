
import mimi from "./assets/mamumi.jpg";
import './index.css'

function App() {

  return (
    <div className="  flex items-center justify-center min-h-screen bg-black"> 
      <div className="bg-white shadow-lg rounded-xl w-64 h-90 p-6 text-center animate-softBounce">
        <div className="flex items-center space-x-8 mb-8 pt-5 px-6">
          <a>
            <img src={mimi} className="rounded-full w-50 h-50 border-2 border-black" alt="mamumi" />
            <a className="text-lg text-black font-bold mt-4 block">cannnibal</a>
            <a className="text-sm text-gray-500 font-bold  ">cannibal-ai</a>
            <div className="mt-4">
              <li className=" text-gray-700  font-bol font-noto text-sm">
                <a>อะไรก็ได้โตแล้ว</a>
              </li>
              <li className=" text-gray-700 font-bol font-noto text-sm">
                <a>อะไรก็ได้โตแล้ว</a>
              </li>
              <li className=" text-gray-700 font-bol font-noto text-sm">
                <a>อะไรก็ได้โตแล้ว</a>
              </li>
            </div>
            
          </a>
        </div>

        <a href="https://www.instagram.com/harveyyv/"  target="_blank" className="bg-slate-900 hover:opacity-80 shadow-lg rounded-xl p-2 max-w-md text-center">
          <a  className="px-14 text-white font-bol font-noto ">ติดต่อจร้</a> 
        </a>
      </div>
    </div>
  )
}

export default App
