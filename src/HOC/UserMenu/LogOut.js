import React, {useEffect} from 'react'
import {fireAuth} from '../../fire'
import { useStateValue } from '../../State/State';

export default function LogOut() {

    const [{ user }, dispatch] = useStateValue();



    return ( 
        <div>
        <button onClick={() =>{ 
            fireAuth.auth().signOut()
            dispatch({ type: "login", newUser: {
                displayName: 'Login',
                photoURL: 'https://api.adorable.io/avatars/285/abott@adorable.png'
              }
        }) ;
            }}>LogOut</button>
        </div>
    )
}