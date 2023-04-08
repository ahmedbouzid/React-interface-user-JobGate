const Candidature = ()=>{

    return(
        <>
        <div className="card col-6 col-xl-6 ">
  <h5 className="card-header danger"> <span style={{color:"red"}}>Remplir votre Candidature</span></h5>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <textarea type="text" placeholder="lettre De Motivation" className="form-control" style={{width: "51%", marginLeft:"18%" , marginTop:'1%'}} 
     onChange  name="lettreDeMotivation"  /> <br/>
     <input style={{width: "51%", marginLeft:"-13%" }}
            type="file"
            onChange
            name="cv"
            className="fileinput btn-primary"
            id="filename"
            title="Browse file"
          /> <br/> <br/>
    <a href="#" className="btn btn-primary">Envoyer</a>
  </div>
</div>
        </>
    )
}
export default Candidature