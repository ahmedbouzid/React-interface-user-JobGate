import logo from './logo.svg';
import './App.css';
import  { BrowserRouter as Router, Route, Routes   } from "react-router-dom";
import NavBar from './layout/navBar';
import Home from './views/home';
import Login from './views/Entreprise/login';
import Register from './views/candidat/registre';
import Footer from './layout/footer';
import RegisterEntre from './views/Entreprise/registreEntreprise';
import HomeCandidat from './views/candidat/homeCandidat';
import LoginCandidat from './views/candidat/loginCandidat';
import ProfilCandidat from './views/candidat/profilCandidat';
import HomeEntreprise from './views/Entreprise/homeEntreprise';
import ProfilEntreprise from './views/Entreprise/profilEntreprise';
import Update from './views/Entreprise/updateEntre';
import UpdateO from './views/Entreprise/updateOffres';
import ListOffre from './views/Entreprise/ListeOffres';
import Offre from './views/Entreprise/offre';
import OffreDetaile from './views/candidat/offreDetaillé';
import Candidature from './views/candidat/candidature';

function App() {
  return (
    <div className="App">
      <Router>
     
        <Routes>
          <Route>
          <Route path='/' element={<Home></Home>} ></Route>
          
          </Route>
          <Route path="/homecandidat" element={<HomeCandidat></HomeCandidat>}></Route>
          <Route path='/homeEntre' element={<HomeEntreprise></HomeEntreprise>}></Route>

          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/logincandidat" element={<LoginCandidat></LoginCandidat>}></Route>
          <Route path='/profilcandidat' element={<ProfilCandidat></ProfilCandidat>}></Route>
          <Route path='/profilEntre' element={<ProfilEntreprise></ProfilEntreprise>}></Route>
          <Route path='/updateEntre/:id' element={<Update></Update>}></Route>
          <Route path='/updateOffre/:id' element={<UpdateO></UpdateO>} ></Route>
          <Route path='/listeoffre' element={<ListOffre></ListOffre>}></Route>
          <Route path='/offreDetail/:id' element={<OffreDetaile></OffreDetaile>}></Route>
          <Route path='/candidature' element={<Candidature></Candidature>}></Route>
          <Route path="/registre" element={<Register></Register>}></Route>
          <Route path='/registreEntre' element={<RegisterEntre></RegisterEntre>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
