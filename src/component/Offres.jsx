import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import offre from "../service/offre"

const Offre=()=>{

  const [Offres , setOffres]=useState()
  const getAll=()=>{
offre.getAllO()
.then((res)=>{
    console.log(res)
    setOffres(res.data.data)
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
        <section className="services section-padding" id="section_3">
      <div className="container">
        <div className="row">

        
            
          <div className="col-lg-10 col-12 mx-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
              <img src="images/handshake-man-woman-after-signing-business-contract-closeup.jpg" className="avatar-image img-fluid" alt />
              <h2 className="text-white ms-4 mb-0">Les offres</h2>
            </div>
            <div className="row pt-lg-5">
            {Offres?.map((item, index)=>{
      return(
              <div className="col-lg-4 col-12">
                <div className="services-thumb">
                  <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                    <h3 className="mb-0">{item.name}</h3>
                    <div className="services-price-wrap ms-auto">
                      <p className="services-price-text mb-0">$2,400</p>
                      <div className="services-price-overlay" />
                    </div>
                  </div>
                  <p>{item.description}</p>
                  <Link to={`/offreDetail/${item._id}`} href="#" className="custom-btn custom-border-btn btn mt-3">Discover More</Link>
                  <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                  <img src="images/clients/OIP.jpg" className="avatar-image img-fluid" alt />
                  </div>
                </div>
              </div>
      )
            })}
              
            
            
            </div>
            

          </div>
     
        </div>
      </div>
    </section>
        
        </>
    )
}
export default  Offre