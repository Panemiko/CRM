import axios from 'axios'

export default function useApi() {
    return axios.create({ baseURL: '/api/' })
}
