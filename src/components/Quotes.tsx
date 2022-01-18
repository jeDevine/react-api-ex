import React, { useEffect, useState } from 'react';
import Quote from '../models/quote'
//bring in function that calls api
import fetchQuotes from '../services/QuotesApiService'

const Quotes = () => {
    //create var with empty array that is type of model you created that mirrors api
    const [quotes, setQuotes] = useState<Quote[]>([]);
    //useEffect hook lets you run the code once if last param is empty array
    //call the function the calls the api in useEffect this passes the values from api that we specified in our model to their properties
    useEffect(()=>{
        fetchQuotes().then(data => setQuotes(data))} , []);

    return (
        //display data pulled from api that you specified in model
        <ul>
            {quotes.map((quote, i) => <li key={i}>{quote.text} - {quote.author}</li>)}
        </ul>
    )
}

export default Quotes;