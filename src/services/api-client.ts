import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key : 'a7838669fc674b53bb579921e7191714',
    }
})