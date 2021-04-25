import axios from 'axios';

const KEY = 'AIzaSyDIPBEjRAsWTv_dI-e4CAt5g_qLJViGQJk';

export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    maxResults:5,
    key:KEY,  
    type:'video'
}
});