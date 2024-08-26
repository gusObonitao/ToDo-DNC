import React from 'react'
import Header from '../components/Header/Header'
import Text from '../components/Text/Text'
import Confirmation from '../components/Confirmation/Confirmation'

const Edit = () => {
  return (
    <div>
      <Header />
      <Text />
      <Confirmation text='Deseja editar esse item? ' description='teste' />
    </div>
  )
}

export default Edit