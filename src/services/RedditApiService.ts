import axios from 'axios';

import {Child} from '../models/reddit'

const fetchPosts = (): Promise<Child[]> => {
    return axios.get("https://www.reddit.com/r/aww/.json")
    .then(res => res.data.data.children)
}

export default fetchPosts;