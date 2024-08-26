import React from 'react'
import Header from '../components/Header/Header'
import Text from '../components/Text/Text'
import TodoForm from '../components/TodoForm/TodoForm'
import Form from '../components/Form/Form'

const Home = () => {
  return (
    <div>
      <Header />
      <Text />
      <TodoForm />
      <Form />
    </div>
  )
}

export default Home