import "./App.css";
import React,{ useEffect }  from 'react'
import SideBar from "./components/sidebar/SideBar";
import Chat from "./components/chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./components/login/Login";
import { auth } from "./dbConfig/firebase";
import {login, logout} from "./features/userSlice"

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log("user is",authUser)
      if (authUser) {
        //login user

        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          name: authUser.displayName

        }))
        
      }else {
        //logout 
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <div className="app">
      {user ? (
        <>
          <SideBar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
