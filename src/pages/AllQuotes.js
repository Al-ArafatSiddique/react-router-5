import React from 'react'
import QuoteList from '../components/quotes/QuoteList'
export default function AllQuotes() {
    const DUMMY_DATA = [
        {id: '1', author: 'Arafat siddique', text: 'this is a dummy text'},
        {id: '2', author: 'Arafat', text: 'this is a dummy text'}

    ]
  return (
    <div>
      <QuoteList quotes={DUMMY_DATA}/>
    </div>
  )
}
