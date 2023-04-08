import { Link } from "react-router-dom"

const NavBar=()=>{


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
        <Link className="custom-btn btn" to="/login" style={{margin:'15px'}}>
          Login
        </Link>
        <Link className="custom-btn btn" to="/registre" style={{margin:'15px'}}>
          Register
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
export default NavBar