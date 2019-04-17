import React, { useState, useEffect } from 'react'
import Button from '@bit/semantic-org.semantic-ui-react.button'
// // import Header from '@bit/semantic-org.semantic-ui-react.header'
// import { Header } from 'semantic-ui-react'
import Icon from '@bit/semantic-org.semantic-ui-react.icon'
import Modal from '@bit/semantic-org.semantic-ui-react.modal'
import LoginLogic from './LoginLogic';
import GeneralStyleButton from '../../Theme/GeneralStyleButton';
import Avatar from '../Avatar/Avatar';
import { useStateValue } from '../../State/State';
import LogOut from './LogOut';


const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css' />

function UserMenu() {

  const [open, setOpen] = useState(false);

  const [{ user, theme }, dispatch] = useStateValue();

  return (
    <Modal trigger={
      <Button className="menu-button" onClick={() => setOpen(true)}>
        <Avatar />
      </Button>}
      basic size='small'
      open={open}
      onClose={() => setOpen(false)}
    >
      <Modal.Content>
        <button className="userMenu-close" onClick={() => setOpen(false)}>Close x </button>
        <h1> User Menu </h1>
        <p>
        { user.providerId ? user.displayName  : "Login"  }
      </p>
      
{ user.providerId ? <LogOut/> : <LoginLogic /> }
        
        <br></br>
        <p> Choose Style </p>
        <GeneralStyleButton />
        <br></br>
        <p> Github repository </p>

      </Modal.Content>

    </Modal>
  )
};

export default () => (<div> {style} <UserMenu /></div>)
