import reactLogo from '../assets/react.svg'
 

export default function Nav() {
   
  return (
    <header className="w-full h-24 min-h-24 px-10 bg-emerald-600 flex justify-between items-center">
        <div className='flex'>
        <div className="flex text-sm items-center mx-2">
            <img src={reactLogo} alt="react" className="w-8" /> + 
            <img src="/vite.svg" alt="vite" className="w-8" />
          </div>
          
        </div>
        <ul className='flex justify-center items-center'>
            <li className='font-bold mx-1'>
                  홈으로 
            </li>
            <li> 
                  지하철대기정보 
            </li>
          </ul>
        <div  className='p-2  text-white
                         border rounded-sm
                                      hover:cursor-pointer hover:bg-emerald-400'>
           <span>로그인</span> 
        </div>
      </header>
  )
}
