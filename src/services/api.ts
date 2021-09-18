
import axios from 'axios'

//const API_KEY = `object?apikey=67bf3681-3d2f-4da2-b777-aa534bd77b5d`
export const API_KEY = `?apikey=67bf3681-3d2f-4da2-b777-aa534bd77b5d`

const api = axios.create({
    baseURL: `https://api.harvardartmuseums.org/`,
   
})

export default api
