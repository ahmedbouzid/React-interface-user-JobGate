const Specialite=()=>{


    return(
        <>
  <section className="projects section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 ms-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
              <img src="images/white-desk-work-study-aesthetics.jpg" className="avatar-image img-fluid" alt />
              <h2 className="text-white ms-4 mb-0">Categories</h2>
            </div>
          </div>
          <div className="clearfix" />
          <div className="col-lg-4 col-md-6 col-12">
            <div className="projects-thumb">
              <div className="projects-info">
                <small className="projects-tag"></small>
                <h3 className="projects-title">Mécanique</h3>
              </div>
              <a href="images/projects/meca.jpg"  className="popup-image">
                <img src="images/projects/meca.jpg" style={{height:'330px' , width:"120%"}}  className="projects-image img-fluid" alt />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="projects-thumb">
              <div className="projects-info">
                <small className="projects-tag"></small>
                <h3 className="projects-title">E-Commerce</h3>
              </div>
              <a href="images/projects/the-5th-IQYR7N67dhM-unsplash.jpg" className="popup-image">
                <img src="images/projects/the-5th-IQYR7N67dhM-unsplash.jpg" className="projects-image img-fluid" alt />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="projects-thumb">
              <div className="projects-info">
                <small className="projects-tag">Website</small>
                <h3 className="projects-title"> Informatique</h3>
              </div>
              <a href="images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg" className="popup-image">
                <img src="images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg" className="projects-image img-fluid" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>       
        </>
    )
}
export default Specialite