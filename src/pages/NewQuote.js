import React from 'react'
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'
export default function NewQuote() {
  const history= useHistory();
  const formSubmitHandler=(formData)=>{
    console.log(formData)
    history.push('/quotes');
  }
  return (
    
    <div>
      <h2>Add new one</h2>
      <QuoteForm onAddQuote={formSubmitHandler}/>
    </div>
  )
}
