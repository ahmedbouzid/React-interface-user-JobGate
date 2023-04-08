import http from './axiosContent'
const registre=(data)=>{
    return http.post("/entreprise/registre" , data)
}
const offre=(data)=>{
    return http.post('/entreprise/offre' , data)

}
const update=(id , data)=>{
    return http.put(`/entreprise/update/${id}`,data)
}
const deleteOne =(id)=>{
    return http.delete(`/entreprise/delete/${id}`)
}
const getById=(id)=>{
    return http.get(`/entreprise/get/${id}`)

}
const updateO=(id , data)=>{
    return http.put(`/entreprise/offreupdate/${id}`,data)
}
const deleteOneO =(id)=>{
    return http.delete(`/entreprise/deleteOffre/${id}`)
}
const getByIdO=(id)=>{
    return http.get(`/entreprise/getOffre/${id}`)
}
const getAllO=()=>{
    return http.get('/entreprise/getAllO')
}
export default {
    registre,
    update,
    deleteOne,
    getById,
    offre,
    updateO,
    deleteOneO,
    getByIdO,
    getAllO
}