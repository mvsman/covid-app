import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://covid-api.mmediagroup.fr/v1'
})

export default instance