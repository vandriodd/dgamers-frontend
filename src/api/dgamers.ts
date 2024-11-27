import axios from 'axios'

const baseURL = 'https://test.gmnlab.com/api'

export const dgamers = axios.create({
  baseURL,
  headers: {
    Authorization: 'Bearer ' + import.meta.env.VITE_PUBLIC_TOKEN
  }
})
