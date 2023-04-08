import { Link } from "react-router-dom"

const ProfilEntreprise=()=>{

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
    <h2 className="name">{user.name}</h2>
    <h3 className="fullstack">{user.description} <br></br></h3>
    <h3 className="fullstack">{user.categorie}<br /></h3>
    <h3 className="fullstack">{user.siteWeb}<br /></h3>
    <h3 className="fullstack">{user.adress}<br /></h3>


    <h3 className="fullstack">{user.phone}<br />


      <a href="https://www.youracclaim.com/badges/e678fb12-49ea-4609-8d97-622d7416880d" className="certified" target="_blank"></a></h3>
    <h3 className="email">
      <a href="mailto:abbassi.abdeladhim31791@gmail.com">{user.email}</a>
    </h3>
  </div>
  
</div>
<Link to={`/updateEntre/${user._id}`}><button className="btn btn-success" 
style={{marginBottom:100 , margin:20}}>
   Modifier votre profil</button></Link>
<button className="btn btn-danger" style={{marginBottom:100 ,margin:20}}> Supprimer le compte</button>



        </form>
        </>
    )
}
 export default ProfilEntreprise