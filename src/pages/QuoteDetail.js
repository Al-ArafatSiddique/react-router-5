import React from 'react'
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
const DUMMY_DATA = [
  {id: '1', author: 'Arafat siddique', text: 'this is a dummy text'},
  {id: '2', author: 'Arafat', text: 'this is a dummy text'}

]
export default function QuoteDetail() {
 const match= useRouteMatch();

  const params= useParams();
  const quote= DUMMY_DATA.find((quote)=>quote.id === params.quoteId);
  if(!quote){
    return <h2>Noting Found</h2>
  }
  return (
    <div>
   
   <HighlightedQuote text={quote.text} author={quote.author} />
   <Route path={match.path} exact> <Link to={`${match.url}/comments`}>See Comments</Link></Route>

  <Route path={`${match.path}/comments`}><Comments/> </Route>
    </div>
  )
}
