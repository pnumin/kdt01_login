<<<<<<< HEAD
import { useAtom } from "jotai";
import { isLogin } from "../atoms/IsLoginAtom";
import Login from "./Login";

export default function Home() {
  const [login] = useAtom(isLogin) ;

  return (
    <div className="w-full h-full">
     {
        login ? <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                  <h1 className="text-2xl font-bold">
                    <span className="text-blue-700">{`${localStorage.getItem('email')}`}</span>
                    님 로그인이 되었습니다.
                  </h1>
                </div>
              : <Login />
     }
=======

import Login from "./Login";
export default function Home() {
  return (
    <div className="w-full h-full">
     <Login /> 
>>>>>>> c89866243bb94eeb6c049c73b0f6115d7710d0f2
    </div>
  )
}
