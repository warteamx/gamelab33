import React from 'react'
import Button from '@bit/semantic-org.semantic-ui-react.button'
// // import Header from '@bit/semantic-org.semantic-ui-react.header'
// import { Header } from 'semantic-ui-react'
import Icon from '@bit/semantic-org.semantic-ui-react.icon'
import Modal from '@bit/semantic-org.semantic-ui-react.modal'
import FormResearchCard from '../FormResearchCard/FormResearchCard';


const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>

const AddResearchCard = () => (
  <Modal trigger={<Button>Add Research Card</Button>} basic size='small'>
    <Modal.Content>
      <p>
        Add Course Card
      </p>
      <FormResearchCard /> 
    </Modal.Content>
  </Modal>
)

export default () => (<div> {style} <AddResearchCard/></div>)
