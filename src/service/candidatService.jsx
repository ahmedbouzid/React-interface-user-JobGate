import http from './axiosContent'
const registre=(data)=>{
    return http.post("/candidat/registre" , data , )
}
const logout=()=>{
    return http.post('/auth/logout')
}
const getAll =()=>{
    return http.get('/candidat/getall')
}
const update=(id , data)=>{
    return http.put(`/candidat/update/${id}`,data)
}
const deleteOne =(id)=>{
    return http.delete(`/candidat/delete/${id}`)
}
const getById=(id)=>{
    return http.get(`/candidat/get/${id}`)
}
export default {
    registre ,
    logout,
    getAll,
    update,
    deleteOne,
    getById 
}