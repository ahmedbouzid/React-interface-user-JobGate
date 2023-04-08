import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import commentaireService from "../../service/commentaireService"
const ListCommentaire=()=>{
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
            commentaireService.deleteOne(id).then((res)=>{
              getAll()
            })
            Swal.fire('Deleted!', 'Your file has been deleted', 'success')
          } 
        })
          }
          const [Commentaires , setCommentaires ]=useState()
          const getAll=()=>{
        commentaireService
        .getAll()
        .then((res)=>{
            console.log(res)
            setCommentaires(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
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
              <h2 className="text-white ms-4 mb-0">Listes des commentaire</h2>
            </div>
          </div>
          <div className="clearfix" />
         

         <table className="table table-striped mt-5 mb-5">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Candidat</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
    {Commentaires?.map((item, index)=>{
      return(
<tr>
      
      <td>{item.description}</td>
      <td>{item.candidat}</td>
      <td>
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
export default ListCommentaire