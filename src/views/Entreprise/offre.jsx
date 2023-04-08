import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import EntrepriseService from "../../service/EntrepriseService"

const Offre =()=>{
  const navigate=useNavigate()
  const [data , setData] = useState()
  const onChangeHandler =(e)=>{
      setData({...data,
      [e.target.name]:e.target.value}

      )
      console.log(data)

  }
  const user = JSON.parse(localStorage.getItem("user")).data.data
  const [firstName, setFirstName] = useState(user._id);

  const onSumbitHandler=(e)=>{
      e.preventDefault()
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      })
      .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          EntrepriseService.offre
          (data)
          .then((res) => {
            console.log(res);
            navigate('/listeoffre')
          })
          .catch((err) => {
            console.log(err);
          });
  
  
          
          Swal.fire('Saved!', '', 'saved')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
  }

    return(
        <>
  <section className="projects section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 ms-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
              <img src="images/white-desk-work-study-aesthetics.jpg" className="avatar-image img-fluid" alt />
              <h2 className="text-white ms-4 mb-0">Créer une offre</h2>
            </div>
          </div>
         <form onSubmit={onSumbitHandler}>

         <input type="text" placeholder="name" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'4%'}}
    onChange={onChangeHandler} name="name"  />
    <input type="text" placeholder="description" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}} 
     onChange={onChangeHandler}  name="description"  />
    <input type="text" placeholder="entreprise" className="form-control" style={{width: "51%",marginLeft:"30%" , marginTop:'1%' }} 
    name="entreprise"  onChange={onChangeHandler} defaultValue={user._id }  /><br></br>
    {/* <input
    type="text" placeholder="entreprise" className="form-control" style={{width: "51%",marginLeft:"30%" , marginTop:'1%'}}
        defaultValue={firstName} name="entreprise"
        onChange={event => setFirstName(event.target.value)}
      /> */}
    <button className="btn btn-success"             style={{ marginLeft: "57%", marginBottom: "3%", marginTop: "2%" }}
> Créer</button>
         </form>
        </div>
      </div>
    </section>       
        </>
    )
}
export default Offre