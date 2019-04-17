import React , {useEffect} from 'react'
import { useStateValue } from '../../State/State';
import {fireAuth} from '../../fire';


export default function Avatar(props) {

    const [{ user, theme }, dispatch] = useStateValue();


    useEffect(()=> {
        fireAuth.auth().onAuthStateChanged(function (user) {
          if (user) {
         dispatch({ type: "login", newUser: user}) ;
            console.log("[LoginLogic] user is signed in " + user.displayName)
          } else {
            console.log("[LoginLogic] no user ")
          }
        });
      }, [])

    return(
        <div className="avatar-menu">
        <img className="avatar-photo " src={user.photoURL} alt=""></img>
        <p style={ {color: theme.primary }} > {user.displayName} </p>
        
        </div>
    )
}