import React, { useState, useEffect } from 'react';
import { StateProvider } from './State/State';
import './App.css';
import RouterApp from './Router/RouterApp';
import VideoBackground from './Components/VideoBackground/VideoBackground';
import UserMenu from './HOC/UserMenu/UserMenu';
import { fireAuth } from './fire';



function App(props) {
  const [user, setUser] = useState(null);


  const initialState = {
    theme: {
      primary: "white",
      background: "transparent"
    },
    user: {
      displayName: 'Login',
      photoURL: 'https://api.adorable.io/avatars/285/abott@adorable.png'
    }
  }


  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme,
        };
      case 'login':
        return {
          ...state,
          user: action.newUser
        }
      default:
        return state;
    }
  };


  useEffect(()=>{

    fireAuth.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);

        console.log("[App] user is signed in " + user.displayName);
        console.log("[App] user is signed in " + user.providerId);
      } else {
        console.log("[App] no user ")
      }
    });
  }, [user])



  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <VideoBackground />
      <UserMenu />
      <RouterApp />
    </StateProvider>
  )
}

export default App;
