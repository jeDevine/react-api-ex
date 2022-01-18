import React from 'react';
//npm install axios
//import axios library here in service file
import axios from 'axios';
import Quote from '../models/quote'

//creating api request
// const functionName = (): Promise<Model[]>  =>{
//     return axios.get().then();
// }

//takes api url and returns all data specified in then statement. response.data is all data.
const fetchQuotes = (): Promise<Quote[]>  =>{
    //returning the result of .get(url of api)
    return axios.get("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then(response => response.data);
}

export default fetchQuotes;