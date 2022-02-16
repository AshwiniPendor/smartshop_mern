import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
//import { createBrowserHistory } from 'history'

const SearchBox = () => {
    const navigate = useNavigate()

    
  //const history = createBrowserHistory()
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
        navigate(`/search/${keyword}`, { replace: true })
    } else {
        navigate('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} className="avatar">
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products..'
        className="mr-sm-1 ml-sm-1 btn-sm"
      >
      </Form.Control>
       <Button type='submit' variant='outline-success' className='p-2  btn-sm'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox