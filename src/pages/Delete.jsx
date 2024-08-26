import React from 'react'
import Text from '../components/Text/Text'
import Header from '../components/Header/Header'
import Confirmation from '../components/Confirmation/Confirmation'

const Delete = () => {
  return (
    <div>
      <Header />
      <Text />
      <Confirmation text='Deseja excluir esse item?' description='teste 2' />
    </div>
  )
}

export default Delete