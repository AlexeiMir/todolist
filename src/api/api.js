import *as axios from 'axios'


const instance = axios.create(
    {
        withCredentials:true,
        baseUrl:`https://social-network.samuraijs.com/api/1.0/`,
        headers: {'API-KEY':'9d9cecf4-b78d-4b8b-a645-bf352d4054c5'}
    }
)

export const todoAPI = {
    getTasks(){
        instance.get('todo-lists/{todolistId}/tasks')
    },
    getTodoList() {
        instance.get(`todo-lists?id=${id}&title=${title}&order=${order}`)
    },
    postTodoList() {
        instance.post('todo-lists',{title})
    }
}