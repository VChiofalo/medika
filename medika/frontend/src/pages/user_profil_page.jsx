import PicturesGalleryCard from "../components/cards/pictures_gallery_card";
import UserCard from "../components/cards/user_card";
import useLogged from "../hooks/useLogged";


function UserProfilPage() {

useLogged()

return <>
    <UserCard/>
    
    <PicturesGalleryCard/>
</>
}

export default UserProfilPage;