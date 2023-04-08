import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import EntrepriseService from "../../service/EntrepriseService"
import offre from "../../service/offre"

const ListOffre=()=>{
  const OnDelete=(id)=>{
    Swal.fire({
      title: 'Are you sure',
      text:"You won't be able to reserve this",
      icon:"warning",
      showCancelButton: true,
      confirmButtonColor:"#3085d6",
      cancelButtonColor:"#d33",
      confirmButtonText: 'Yes , Delete it',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        EntrepriseService.deleteOneO(id).then((res)=>{
          getAll()
        })
        Swal.fire('Deleted!', 'Your file has been deleted', 'success')
      } 
    })
      }
      const [Offres , setOffres]=useState()
      const getAll=()=>{
    EntrepriseService
    .getAllO()
    .then((res)=>{
        console.log(res)
        setOffres(res.data.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
const user = JSON.parse(localStorage.getItem("user")).data.data
const { id }=useParams();

const getByEntreprise=()=>{
  offre.getByEntreprise()
  .then((res)=>{
    console.log(res)
    setOffres(res.data.data)
})
.catch((err)=>{
    console.log(err)
})
}
useEffect(()=>{
   
    getByEntreprise(user._id)
    getAll()
},[])


    return(
        <>
        
        <section className="projects section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 ms-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
              <img src="images/white-desk-work-study-aesthetics.jpg" className="avatar-image img-fluid" alt />
              <h2 className="text-white ms-4 mb-0">Listes d'offres</h2>
            </div>
          </div>
          <div className="clearfix" />
         

         <table className="table table-striped mt-5">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Entreprise</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    {Offres?.map((item, index)=>{
      return(
<tr>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.entreprise.name}</td>
      <td>
      <Link to={`/updateOffre/${item._id}`}> <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button></Link>
                    <button className="btn btn-danger btn-rounded btn-sm" 
                    onClick={(e)=>OnDelete(item._id)}>
                      <span className="fa fa-times" /></button>      </td>
    </tr>
      )
    })}
    
   
  </tbody>
</table>


        </div>

      </div>
    </section>         
        
        </>
    )
}

export default ListOffre