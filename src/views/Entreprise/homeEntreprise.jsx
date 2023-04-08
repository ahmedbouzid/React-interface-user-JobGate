import { useNavigate } from "react-router-dom"
import Companies from "../../component/Companies"
import Information from "../../component/information"
import Offre from "./offre"
import Specialite from "../../component/Specialite"

import NavBarEntreprise from "../../layout/navBarEntreprise"
import ListOffre from "./ListeOffres"
import ListCommentaire from "./Listcommentaires"

const HomeEntreprise = ()=>{
    const user = JSON.parse(localStorage.getItem("user")).data.data
 
    return (
        <>
        
<div>
 
<NavBarEntreprise/>

    <section className="hero d-flex justify-content-center align-items-center" id="section_1">
   
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12">
            <div className="hero-text">
              <div className="hero-title-wrap d-flex align-items-center mb-4">
                <h1 className="hero-title ms-3 mb-0">Hello  </h1>
              </div>
              <h2 className="mb-4">Are you available for  work.</h2>
              <p className="mb-4"><a className="custom-btn btn custom-link" href="#section_2">Let's begin</a></p>
            </div>
          </div>
          <div className="col-lg-5 col-12 position-relative">
            <div className="hero-image-wrap" />
            <img src="images/portrait-happy-excited-man-holding-laptop-computer.png" className="hero-image img-fluid" alt />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#535da1" fillOpacity={1} d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z" /></svg>
    </section>
    <section className="about section-padding" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img src="images/Re.jpg" style={{height:'90%'}} className="about-image img-fluid" alt />
          </div>
          <div className="col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="about-thumb">
              <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                <h2 className="text-white me-4 mb-0">JobGate</h2>
                <img src="images/clients/OIP.jpg" className="avatar-image img-fluid" alt />
              </div>
              <h3 className="pt-2 mb-3">a little bit about JobGate</h3>
              <p>At a time when people want meaning, JobGate is THE site specialized in meaningful job offers that make a contribution to society, in the sectors of social and solidarity economy, the environment and ecological transition, sustainable development, social entrepreneurship, humanitarian and many other great causes.</p>
              <p>Special mention for their job guide and CV which allows you to improve your application with expert and specialized advice on JobImpact's business themes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
   <ListOffre/>
   <Offre/>
   <ListCommentaire/>
    <Information/>
    <Companies/>

    <section className="contact section-padding" id="section_5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
              <img src="images/aerial-view-man-using-computer-laptop-wooden-table.jpg" className="avatar-image img-fluid" alt />
              <h2 className="text-white ms-4 mb-0">Post Now</h2>
            </div>
          </div>
          <div className="clearfix" />
          <div className="col-lg-3 col-md-6 col-12 pe-lg-0">
            <div className="contact-info contact-info-border-start d-flex flex-column">
              <strong className="site-footer-title d-block mb-3">Works</strong>
              <ul className="footer-menu">
                <li className="footer-menu-item"><a href="#" className="footer-menu-link">computer science</a></li>
                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Mecanic</a></li>
                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Electronic</a></li>
              </ul>
              <strong className="site-footer-title d-block mt-4 mb-3">Stay connected</strong>
              <ul className="social-icon">
                <li className="social-icon-item"><a href="https://twitter.com/minthu" className="social-icon-link bi-twitter" /></li>
                <li className="social-icon-item"><a href="#" className="social-icon-link bi-instagram" /></li>
                <li className="social-icon-item"><a href="#" className="social-icon-link bi-pinterest" /></li>
                <li className="social-icon-item"><a href="https://www.youtube.com/templatemo" className="social-icon-link bi-youtube" /></li>
              </ul>
              <strong className="site-footer-title d-block mt-4 mb-3">Start Your Work </strong>
              <p className="mb-0">We are available for you</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ps-lg-0">
            <div className="contact-info d-flex flex-column">
              <strong className="site-footer-title d-block mb-3">About</strong>
              <p className="mb-2">
                 Feel free to get in touch with us.
              </p>
              <strong className="site-footer-title d-block mt-4 mb-3">Email</strong>
              <p>
                <a href="mailto:hello@josh.design">
                  JObGate@Job.com
                </a>
              </p>
              <strong className="site-footer-title d-block mt-4 mb-3">Call</strong>
              <p className="mb-0">
                <a href="tel: 120-240-9600">
                  120-240-9600
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-5 mt-lg-0">
            <form action="#" method="get" className="custom-form contact-form" role="form">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-floating">
                    <input type="text" name="name" id="name" className="form-control" placeholder="Name" required />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12"> 
                  <div className="form-floating">
                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="form-check form-check-inline">
                    <input name="website" type="checkbox" className="form-check-input" id="inlineCheckbox1" defaultValue={1} />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">
                      <i className="bi-globe form-check-icon" />
                      <span className="form-check-label-text">Websites</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="form-check form-check-inline">
                    <input name="branding" type="checkbox" className="form-check-input" id="inlineCheckbox2" defaultValue={1} />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">
                      <i className="bi-lightbulb form-check-icon" />
                      <span className="form-check-label-text">Electronic</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="form-check form-check-inline">
                    <input name="ecommerce" type="checkbox" className="form-check-input" id="inlineCheckbox3" defaultValue={1} />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">
                      <i className="bi-phone form-check-icon" />
                      <span className="form-check-label-text">Ecommerce</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="form-check form-check-inline me-0">
                    <input name="seo" type="checkbox" className="form-check-input" id="inlineCheckbox4" defaultValue={1} />
                    <label className="form-check-label" htmlFor="inlineCheckbox4">
                      <i className="bi-gear form-check-icon" />
                      <span className="form-check-label-text">Mecanic</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-12 col-12">
                  <div className="form-floating">
                    <textarea className="form-control" id="message" name="message" placeholder="Tell me about the project" defaultValue={""} />
                    <label htmlFor="floatingTextarea">Tell me about Your speciality</label>
                  </div>
                </div>
                <div className="col-lg-3 col-12 ms-auto">
                  <button type="submit" className="form-control">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  
 
</div>
  
        </>
    )
}
    export default HomeEntreprise