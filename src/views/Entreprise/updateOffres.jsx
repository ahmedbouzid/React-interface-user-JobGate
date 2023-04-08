import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import EntrepriseService from "../../service/EntrepriseService";

const UpdateO=()=>{
    const [Data, setData]=useState({});
    const { id }=useParams();
    const navigate=useNavigate();
    const onChangeHandler=(e)=>{
      setData({
        ...Data,
        [e.target.name]:e.target.value,
      });
    };
    const onSumbitHandler=(e)=>{
      e.preventDefault();
      EntrepriseService.updateO(id , Data).then((res)=>{
        console.log(res);
        
      },navigate("/homeEntre"))
      .catch((err)=>{
        console.log(err);
      });
    };
    useEffect(()=>{
      EntrepriseService.getByIdO(id)
      .then((res)=>{
        console.log(res.data.data)
        setData(res.data.data)
      })
    },[])

    return(
        <>
     <section className="projects section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 ms-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
              <img src="images/white-desk-work-study-aesthetics.jpg" className="avatar-image img-fluid" alt />
              <h2 className="text-white ms-4 mb-0">Modifier une offre</h2>
            </div>
          </div>
         <form onSubmit={onSumbitHandler}>

         <input type="text" placeholder="name" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'4%'}}
    onChange={onChangeHandler} name="name" value={Data.name} />
    <input type="text" placeholder="description" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}} 
     onChange={onChangeHandler}  name="description" value={Data.description} />
    <input type="text" placeholder="entreprise" className="form-control" style={{width: "51%",marginLeft:"30%" , marginTop:'1%' }} 
    name="entreprise" onChange={onChangeHandler} value={Data.entreprise} /><br></br>
    <button className="btn btn-success"             style={{ marginLeft: "57%", marginBottom: "3%", marginTop: "2%" }}
> Modifier</button>
         </form>
        </div>
      </div>
    </section>       
        </>
    )
}

export default UpdateO