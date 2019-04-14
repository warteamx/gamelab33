import React from 'react';
import { StateProvider } from './State/State';
import './App.css';
import RouterApp from './Router/RouterApp';
import GeneralStyleButton from './Theme/GeneralStyleButton';
import VideoBackground from './Components/VideoBackground/VideoBackground';


function App(props) {

  const initialState = {
    theme: { primary: 'white',
  background: 'transparent'  }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme
        };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
    <VideoBackground />
      <GeneralStyleButton />
      <RouterApp />
    </StateProvider>
  )
}

export default App;
