import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EntrepriseService from "../../service/EntrepriseService";
import Swal from "sweetalert2"
import commentaireService from "../../service/commentaireService";

const OffreDetaile =()=>{

    const navigate=useNavigate()

    const { id }=useParams();
    const [offre , setOffre ]=useState({})
    const getById=()=>{
        EntrepriseService
        .getByIdO(id)
        .then((res)=>{
            console.log(res)
            setOffre(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const [data , setData] = useState()
    const onChangeHandler =(e)=>{
        setData({...data,
        [e.target.name]:e.target.value}
  
        )
        console.log(data)
  
    }
    const user = JSON.parse(localStorage.getItem("user")).data.data

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
          commentaireService.create
          (data)
          .then((res) => {
            console.log(res);
            navigate('/homecandidat')
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
    useEffect(()=>{
        getById(id)
      },[])

    return(
        <>
        
{/*     <h3 className="mb-5 mt-5 " style={{color:"red"}}> Offre détaillé :</h3>
    
     <h5 style={{marginLeft:"-650px" ,color:"green" }}> Post: </h5> <br/>
     <p name='name' style={{ marginTop:"-35px"}} >{offre.name} </p>
     <h5 style={{marginLeft:"-580px" , color:"green" }}> Description: </h5><br/>
     <p name='name' style={{ marginTop:"-35px"}} >{offre.description} </p> 
     <h5 style={{marginLeft:"-630px" ,color:"green" }}> Salaire: </h5><br/>
     <p name='name' style={{ marginTop:"-35px"}} >1111 </p>  */}
      <div className="col-6 col-xl-6 ">
              <div className="card mt-5  align-items-left card-body ">
                <div className="card-header">
                  <h4>Offre détailés</h4>
                </div>
                <div className="card-body">
                <h5 style={{color:"green" , textAlign:"left" }}> Post:  <span style={{color:"black"}}>{offre.name}</span>   </h5> <br/>
                <h5 style={{color:"green" , textAlign:"left" }}> Description:  <span style={{color:"black"}}>{offre.description}</span>     </h5><br/>
                <h5 style={{ textAlign:"left",color:"green" }}> Salaire:  <span style={{color:"black"}}>1111</span> </h5><br/>
                <button className="btn btn-danger"             style={{ marginLeft: "-6%", marginBottom: "3%", marginTop: "2%" }}
> Postuler </button>

                </div>
              </div>
            </div>
<form onSubmit={onSumbitHandler} >
<input type="text" placeholder="Commenter" className="form-control" style={{width: "50%",   marginTop:'1%'}}
      name="description"  onChange={onChangeHandler}   />
      <input type="text" placeholder="User" className="form-control" style={{width: "50%" , marginTop:'1%'}}
      name="candidat"    onChange={onChangeHandler}  />
       <button className="btn btn-success"             style={{ marginLeft: "-6%", marginBottom: "3%", marginTop: "2%" }}
> Commenter</button>
      
    
  </form>


        </>
    )
}

export default OffreDetaile