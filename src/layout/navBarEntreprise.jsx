import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import candidatService from "../service/candidatService"
import login from "../service/login";

const NavBarEntreprise=()=>{
    const navigate = useNavigate()
    const logout = () =>{
      Swal.fire({
       title: "Are you sure to Logout? ",
       showDenyButton: true,
       confirmButtonText: 'Yes!',
       denyButtonText: "No!",
   }).then((result) => {
     /* Read more about isConfirmed, isDenied below */
     if (result.isConfirmed) {
      login.logout().then((res)=>{
     console.log(res);
   });
   localStorage.clear("user");
   navigate("/");
   Swal.fire('you are logged out!')
   } else if (result.isDenied) {
     Swal.fire('you are not logged out')
   }
   })
   };

    return (
        <>
        <form> 
  <input type="text" name="text&quot;" className="search form-control" placeholder="Recherchez ici!"
  style={{marginLeft:'', paddingLeft:''}} />
  <input type="submit" name="submit" className="btn btn-success" value="Search"
  style={{marginRight:'10px' ,width:'120px'}}  />
</form>
        <nav className="navbar navbar-expand-lg">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <a href="index.html" className="navbar-brand mx-auto mx-lg-0">My First Job</a>
    <div className="d-flex align-items-center d-lg-none">
      <i className="navbar-icon bi-telephone-plus me-3" />
      <a className="custom-btn btn" href="#section_5">
        73555666
      </a>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-lg-5">
        <li className="nav-item">
          <a className="nav-link click-scroll" href="#section_1">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link click-scroll" href="#section_2">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link click-scroll" href="#section_3">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link click-scroll" href="#section_4">Les offres</a>
        </li>
        <li className="nav-item">
          <a className="nav-link click-scroll" href="#section_5">Contact</a>
        </li>
      </ul>
      <div className="d-lg-flex align-items-center d-none ms-auto">
        <Link className="custom-btn btn" to="/profilEntre" style={{margin:'15px'}}>
          Your Profile
        </Link>
        <Link className="custom-btn btn" onClick={(e)=>{logout()}} style={{margin:'15px'}}>
          Logout
        </Link>
                
       
      </div>
      <div className="search"  >
     


</div>

    </div>
  </div>
</nav>
    
        </>
    )
}
export default NavBarEntreprise