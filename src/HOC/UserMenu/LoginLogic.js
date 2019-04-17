import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {fireAuth} from '../../fire';



export default function LoginLogic() {


  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      fireAuth.auth.GoogleAuthProvider.PROVIDER_ID,
      fireAuth.auth.FacebookAuthProvider.PROVIDER_ID
    ]
  };
    return (
        <>
       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fireAuth.auth()}/>
        </>
    )
}