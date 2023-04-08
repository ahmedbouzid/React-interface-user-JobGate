import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert";
import candidatService from "../../service/candidatService";
import EntrepriseService from "../../service/EntrepriseService";

const Register = () => {
  const [Data, setData] = useState({});
  const [image, setImage] = useState({});
  const [ cv, setCv ] = useState({});

  const navigate = useNavigate();
  const OnchangeHandler = (e) => {
    console.log(e.target.value);
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  const OnSubmitHandler = (e) => {
    e.preventDefault();
    const formadata = new FormData();
    formadata.append("firstname", Data.firstname);
    formadata.append("lastname", Data.lastname);
    formadata.append("email", Data.email);
    formadata.append("phone", Data.phone);
    formadata.append("password", Data.password);
    formadata.append("dataNaissance", Data.dataNaissance);
    formadata.append("image", image);
    formadata.append("cv", cv);

    candidatService
      .registre(formadata)
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/homecandidat");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Opps",
          text: "error",
          footer: "",
        });
      });
  };
  const HandleImage = (e) => {
    console.log(e.target.files[0]);

    setImage(e.target.files[0]);
  };

  const HandleCv = (e) => {
    console.log(e.target);
    setCv(e.target.files[0]);
  };

  return (
    <>
      {/* partial:index.partial.html */}

      <div className="contact__form mt-5 ">
        <h5 style={{ textAlign: "center" }}>Registre</h5>
        <form onSubmit={OnSubmitHandler}>
          <input
            type="text"
            placeholder="name"
            className="form-control"
            style={{ width: "51%", marginLeft: "30%", marginTop: "1%" }}
            onChange={OnchangeHandler}
            name="firstname"
          />
          <input
            type="text"
            placeholder="last name"
            className="form-control"
            style={{ width: "51%", marginLeft: "30%", marginTop: "1%" }}
            name="lastname"
            onChange={OnchangeHandler}
          />
          <input
            type="text"
            placeholder="phone"
            className="form-control"
            style={{ width: "51%", marginLeft: "30%", marginTop: "1%" }}
            onChange={OnchangeHandler}
            name="phone"
          />
          <input
            type="text"
            placeholder="password"
            className="form-control"
            style={{ width: "51%", marginLeft: "30%", marginTop: "1%" }}
            name="password"
            onChange={OnchangeHandler}
          />
          <br></br>
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            style={{ width: "51%", marginLeft: "30%", marginTop: "1%" }}
            name="email"
            onChange={OnchangeHandler}
          />
          <input
            type="text"
            placeholder="date de Naissance"
            className="form-control"
            style={{ width: "51%", marginLeft: "30%", marginTop: "1%" }}
            name="dataNaissance"
            onChange={OnchangeHandler}
          />
          <br></br>
          <input
            type="file"
            onChange={HandleImage}
            name="image"
            className="fileinput btn-primary"
            id="filename"
            title="Browse file"
          />
          <input
            type="file"
            onChange={HandleCv}
            name="cv"
            className="fileinput btn-primary"
            id="filename"
            title="Browse file"
          />

          <button
            type="submit"
            className="btn btn-danger"
            style={{ marginLeft: "57%", marginBottom: "3%", marginTop: "2%" }}
          >
            Registre
          </button>
        </form>
        <span style={{ color: "red" }}>
          Si vous ètes entreprise <Link to={"/registreEntre"}>Cliquer Ici</Link>
        </span>
      </div>

      {/* partial */}
    </>
  );
};
export default Register;
