import { Link } from "react-router-dom"

const ProfilCandidat=()=>{

    const user = JSON.parse(localStorage.getItem("user")).data.data

    return(
        <>
        
        <form>
<div id="main-card">
  <div className="cover-photo" />
  <div className="photo">
  <img src="images/projects/the-5th-IQYR7N67dhM-unsplash.jpg"  alt
  style={{width:120 , height:140 , borderRadius:100 , marginTop:30}} />

   
    
  </div>
  <div className="content" style={{marginTop:30}}>
    <h4 className="name" style={{marginTop:"50px"}}><span style={{color:"black" , padding:'20px', color:"green"}}>Nom:</span>  {user.firstname} {user.lastname}</h4>
    <h5  style={{marginTop:"20px"}}> <span style={{color:"black" , padding:'20px' ,marginTop:30 , color:"green"}}>Date de Naissance:</span>{user.dataNaissance} <br></br></h5>
    <h5  style={{marginTop:"20px"}}> <span style={{color:"black" , padding:'20px',marginTop:"50px" , color:"green"}}>CV:</span>{user.cv}<br /></h5>
    <h5 style={{marginTop:"20px"}}> <span style={{color:"black" , padding:'20px' , color:"green"}}>PHONE:</span>{user.phone}<br />


     </h5>
    <h5 className="email" style={{marginTop:"20px"}}>
      <a href="mailto:abbassi.abdeladhim31791@gmail.com"><span style={{color:"black" , padding:'20px',marginLeft:"-20px" , color:"green"}}>EMAIL:</span>{user.email}</a>
    </h5>
  </div>
  
</div>
<Link to={''}><button className="btn btn-success" 
style={{marginBottom:100 , margin:20}}>
   Modifier votre profil</button></Link>
<button className="btn btn-danger" style={{marginBottom:100 ,margin:20}}> Supprimer le compte</button>



        </form>
        </>
    )
}
 export default ProfilCandidat