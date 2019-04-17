import React, {useState} from 'react'
import Button from '@bit/semantic-org.semantic-ui-react.button'
// // import Header from '@bit/semantic-org.semantic-ui-react.header'
// import { Header } from 'semantic-ui-react'
import Icon from '@bit/semantic-org.semantic-ui-react.icon'
import Modal from '@bit/semantic-org.semantic-ui-react.modal'
import LoginLogic from './LoginLogic';


const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>

function UserMenu() { 

  const [open, setOpen] = useState(false)


return ( 
  <Modal trigger={<Button onClick={()=>setOpen(true)}>Login</Button>} 
  basic size='small'
open={open}
onClose={ () => setOpen(false)}
  >
    <Modal.Content>
      <p>
        Login
      </p>
      <button onClick={()=>setOpen(false)}>Close x </button>
      <LoginLogic/>
       
    </Modal.Content>

  </Modal>
  )};

export default () => (<div> {style} <UserMenu/></div>)
