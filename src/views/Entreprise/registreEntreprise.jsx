import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert"
import EntrepriseService from "../../service/EntrepriseService"

const RegisterEntre =()=>{

  const [Data , setData] = useState({})
  const navigate = useNavigate()
  const onChangeHandler=(e)=>{
    setData({
      ...Data,
      [e.target.name] : e.target.value,
    })
    console.log(Data)
  }
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    EntrepriseService.registre(Data)
    .then((res)=>{
      console.log(res)
      localStorage.setItem("user" , JSON.stringify(res.data))
      navigate('/homeEntre')
    })
    .catch((err)=>{
      console.log(err)
      Swal.fire({
          icon:'error',
          title:'Opps',
          text:"error",
          footer:""
      })
  })
  }

    return(
        <>
        
        {/* partial:index.partial.html */}

<div className="contact__form mt-5 ">
  <h5 style={{textAlign:"center"}}>Registre</h5>
  <form  onSubmit={onSubmitHandler} >
    <input type="text" placeholder="name" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}}
    onChange={onChangeHandler} name="name"  />
    <input type="text" placeholder="phone" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}} 
     onChange={onChangeHandler}  name="phone"  />
    <input type="text" placeholder="password" className="form-control" style={{width: "51%",marginLeft:"30%" , marginTop:'1%' }} 
    name="password" onChange={onChangeHandler}  /><br></br>
    <input type="text" placeholder="Email" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}} 
    name="email" onChange={onChangeHandler} />
    <input type="text" placeholder="description" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}} 
    name="description" onChange={onChangeHandler}  />
    <input type="text" placeholder="adress" className="form-control" style={{width: "51%",marginLeft:"30%" , marginTop:'1%' }}
     name="adress" onChange={onChangeHandler}  /><br></br>
     <input type="text" placeholder="siteWeb" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}}
      name="siteWeb" onChange={onChangeHandler}  />
       <input type="text" placeholder="categorie" className="form-control" style={{width: "51%", marginLeft:"30%" , marginTop:'1%'}}
      name="categorie" onChange={onChangeHandler}  />
      
    <button type="submit" className="btn btn-danger" style={{marginLeft: "57%",
    marginBottom: "3%", marginTop:"2%"}}>Registre</button>
  </form>
  <span style={{color:"red"}}>Si vous ètes  Candidat <Link to={'/registre'}>Cliquer Ici</Link></span>

</div>

{/* partial */}

        </>
    )
}
export default RegisterEntre