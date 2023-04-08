import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EntrepriseService from "../../service/EntrepriseService";

const Update=()=>{
    const [Data, setData]=useState({});
    const { id }=useParams();
    const navigate=useNavigate();
    const onChangeHandler=(e)=>{
      setData({
        ...Data,
        [e.target.name]:e.target.value,
      });
    };
    const OnSubmitHandler=(e)=>{
      e.preventDefault();
      EntrepriseService.update(id , Data).then((res)=>{
        console.log(res);
        
      },navigate("/profilEntre"))
      .catch((err)=>{
        console.log(err);
      });
    };
    useEffect(()=>{
      EntrepriseService.getById(id)
      .then((res)=>{
        console.log(res.data.data)
        setData(res.data.data)
      })
    },[])

    return(
        <>
      <div className="contact__form mt-5 ">
  <h5 style={{textAlign:"center"}}>Update</h5>
  <form  onSubmit={OnSubmitHandler} >
    <input type="text" placeholder="name" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}}
    onChange={onChangeHandler} name="name" value={Data.name} />
    <input type="text" placeholder="phone" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}} 
     onChange={onChangeHandler}  name="phone" value={Data.phone} />
    <input type="text" placeholder="password" className="form-control" style={{width: "51%",marginLeft:"30%" , marginTop:'1%' }} 
    name="password" onChange={onChangeHandler} value={Data.password} /><br></br>
    <input type="text" placeholder="Email" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}} 
    name="email" onChange={onChangeHandler} value={Data.email} />
    <input type="text" placeholder="description" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}} 
    name="description" onChange={onChangeHandler} value={Data.description}  />
    <input type="text" placeholder="adress" className="form-control" style={{width: "51%",marginLeft:"30%" , marginTop:'1%' }}
     name="adress" onChange={onChangeHandler}  value={Data.adress} /><br></br>
     <input type="text" placeholder="siteWeb" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}}
      name="siteWeb" onChange={onChangeHandler} value={Data.siteWeb}  />
       <input type="text" placeholder="categorie" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}}
      name="categorie" onChange={onChangeHandler} value={Data.categorie}  />
      
    <button type="submit" className="btn btn-danger" style={{marginLeft: "57%",
    marginBottom: "3%", marginTop:"2%"}}>Registre</button>
  </form>

</div>  
        
        </>
    )
}

export default Update