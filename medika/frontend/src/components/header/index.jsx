import { Link } from "react-router-dom";
import Typography from "../common/typography";

function Header({title, linkTo}) {

        return <>
            <div className="flex justify-center bg-primary rounded-t-3xl p-4 justify-between items-center">
                <Link to={linkTo}><i className="fa-solid fa-angle-left fa-lg text-white"></i></Link>
                <Typography tag="h3" variant="white">{title}</Typography>
                <p></p>
            </div>        
        </>
      }
      
      export default Header;