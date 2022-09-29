import http from '../services/httpService'

export const getPosts = () => {
    return http.get("/posts")
}

export const getPostById = (postId) => {
    return http.get(`/posts/${postId}`)
}

export const addPost = (data) => {
    return http.post('/posts', data)
}

export const editPost = (postId) => {
    return http.get(`/posts/${postId}`)
}

export const updatePost = (postId, data) => {
    return http.put(`/posts/${postId}`, data)
}

