import http from './axiosContent'
const create =(data)=>{
    return http.post('/candidature/create' ,data)
}
const getAll =()=>{
    return http.get('/candidature/getAll' )
}
const getById=(id)=>{
    return http.get(`/candidature/getBy/${id}`)
}
const update=(id , data)=>{
    return http.put(`/candidature/update/${id}`,data)
}
const deleteOne = (id)=>{
return http.delete(`/candidature/delete/${id}`)
}
export default {
    create ,
    getAll,
    getById,
    update,
    deleteOne,
}
