import PicturesGalleryCard from "../components/pictures_gallery_card";
import UserCard from "../components/user_card";
import useLogged from "../hooks/useLogged";


function UserProfilPage() {

useLogged()

return <>
    <UserCard/>
    
    <PicturesGalleryCard/>
</>
}

export default UserProfilPage;