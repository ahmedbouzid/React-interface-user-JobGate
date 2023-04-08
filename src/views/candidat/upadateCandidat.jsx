import { useNavigate } from "react-router-dom";
import candidatService from "../../service/candidatService";



const UpdateCandidat =()=>{
    const [Data, setData]=useState({});
    const { id }=useParams();
    const navigate=useNavigate();
    const OnChangeHandler=(e)=>{
      setData({
        ...Data,
        [e.target.name]:e.target.value,
      });
    };
    const OnSubmitHandler=(e)=>{
      e.preventDefault();
      candidatService
      .update(id,Data).then((res)=>{
        console.log(res);
        
      },navigate("/profilcandidat"))
      
      .catch((err)=>{
        console.log(err);
      });
    };
    useEffect(()=>{
      candidatService.getById(id).then((res)=>{
        console.log(res)
        setData(res.data.data)
      })
    },[])

    return(
        <>
        
        
        </>
    )
}
export default UpdateCandidat