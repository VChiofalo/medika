import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useLoggedUserForbidden = () => {

    const user = useSelector((state) => state.user.currentUser )
    const navigate = useNavigate()

useEffect(() => {
    
    if(user) {
        navigate('/logout')
    }
    },[])
}

export default useLoggedUserForbidden;