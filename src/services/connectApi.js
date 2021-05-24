import axios from 'axios'

const connectApi = axios.create({
  baseURL: "http://localhost:3333"
})

export default connectApi