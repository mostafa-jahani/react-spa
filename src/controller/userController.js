import http from '../services/httpService'


export const getUsers = () => {
    return http.get("/users")
}


export const getUserById = (userId) => {
    return http.get(`/users/${userId}`)
}

