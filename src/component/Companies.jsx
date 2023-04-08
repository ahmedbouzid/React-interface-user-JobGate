const Companies=()=>{

    return(
        <>
        <section className="clients section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-12">
            <h3 className="text-center mb-5">Our Companies </h3>
          </div>
          <div className="col-lg-4 col-6 ms-auto clients-item-height">
            <img src="images/clients/itg1.jpg" className="clients-image img-fluid" alt
            style={{height:'80%', width:'100%'}}/>
          </div>
          <div className="col-lg-4 col-6 clients-item-height">
            <img src="images/clients/OIP.jpg" className="clients-image img-fluid" alt 
            style={{height:'90%', width:'100%'}} />
          </div>
          <div className="col-lg-4 col-6 clients-item-height">
            <img src="images/clients/OIP2.jpg" className="clients-image img-fluid" 
            style={{height:'40%', width:'100%'}} alt />
          </div>
         
        </div>
      </div>
    </section>
        </>
    )
}
export default Companies