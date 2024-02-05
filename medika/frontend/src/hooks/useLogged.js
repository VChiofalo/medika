import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useLogged = () => {

    const user = useSelector((state) => state.user.currentUser )
    const navigate = useNavigate()

    useEffect(() => {

        if(!user) {
            navigate('/login')
        }
    
    },[])

}

export default useLogged;