import { Link } from "react-router-dom";
import Typography from "../components/common/typography";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/userSlice";



const Parameter = () => {
    const dispatch = useDispatch();

    return (
        <div >
            <div className="">
                <div className="button-carousel"></div>

<Link onClick={() => {
    
    localStorage.clear() 
    dispatch(logout());




}} to ="/" className="flex items-center rounded-full bg-white p-1 px-2 gap-2">
    
    <i className="fa-solid fa-user"></i>
    <Typography>Deconnexion</Typography>
</Link>
            </div>
       
        </div>
    );
};

export default Parameter;
