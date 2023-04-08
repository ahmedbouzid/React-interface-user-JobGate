import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import swal from "sweetalert"
import login from "../../service/login"

const Login =()=>{
const [Data , setData]=useState()
const navigate = useNavigate()
const onChangeHandler=(e)=>{
  setData({
    ...Data,
    [e.target.name]:e.target.value
  })
  console.log(Data)
}
const OnSumbitHandler =(e)=>{
  e.preventDefault()
  login.login(Data)
  .then((res)=>{
    console.log(res)
    localStorage.setItem('user',
    JSON.stringify(res.data))
    navigate('/homeEntre')
  })
  .catch((err)=>{
    console.log(err)
    swal.fire({
        icon:'error',
        title:'Opps',
        text:"This acount dosen't exist",
        footer:""
    })
})
}

return(

    <>
    <section>
    <div className="form mt-5 ">
  <h5 style={{textAlign:"center"}}>Login</h5>
  <form onSubmit={OnSumbitHandler}  >
    <input type="text" placeholder="email" className="form-control" style={{width: "51%", marginLeft:"25%",marginTop:'2%'}}
     name="email" onChange={onChangeHandler}/>
    <input type="text" placeholder="password" className="form-control" style={{width: "51%",marginLeft:"25%",marginTop:'1%' }}
     name="password"  onChange={onChangeHandler} /><br></br>
    <button type="submit" className="btn btn-danger" style={{marginLeft: "%",
    marginBottom: "3%", marginTop:"1%"}}>Connexion</button>
  </form>
  <span style={{color:"red"}}>Si vous ètes  candidat <Link to={'/logincandidat'}>Cliquer Ici</Link></span>

</div>
</section>
    </>
)

}
export default Login