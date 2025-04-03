import './App.css'

import Login from './componets/Login';
import Home from './componets/Home';
import Nav from './componets/Nav';
import Subway from './componets/Subway';
function App() {
  return (
    <div className="w-full xl:w-4/5 h-screen mx-auto
                  flex flex-col justify-start items-center">
      
      <Nav />
      <main className="w-full flex-grow flex flex-col items-center
                    overflow-y-auto">
         <Home />
      </main>

      <footer className="w-full h-24 min-h-24 flex justify-center items-center
                       bg-gray-950 text-white text-lg">
        [부산대학교 K-Digital] AI 데이터 분석 풀스택 웹 개발자 양성과정
      </footer>
    </div>
 
  )
}

export default App


