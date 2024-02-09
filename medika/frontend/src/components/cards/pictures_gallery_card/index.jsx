import { useRef, useState } from "react";
import Typography from "../../common/typography";
import fetchApi from "../../../services/fetchApi";


function PicturesGalleryCard() {
const animalsProfilPictures = ["images/images_placeholder/doge.jpg", "images/images_placeholder/nyan.png", "images/images_placeholder/dogSamurai.jpeg","images/images_placeholder/nyan.png","images/images_placeholder/nyan.png","images/images_placeholder/nyan.png","images/images_placeholder/nyan.png","images/images_placeholder/nyan.png",]
//const animals = animalsProfilPictures.length

const animalsList = animalsProfilPictures.map((animal) => {
    return(<>
        <img src={animal} className=" w-40 " alt="" />
    </>)

})
const [open, setOpen] = useState(false)
const openPopup = () => setOpen(true)
const closePopup = () => setOpen(false)
    
function poPup() {
        return (
        <div className="absolute modal  rounded-lg bg-white border border-gray-200 shadow-lg">
            <div className="flex items-center gap-4 p-4 overlay">
                <div>
                    <label className="block"><Typography tag="h3">Photo de votre animal</Typography></label>
                        <input
                            type="file"
                            id="picture"
                            name="picture"
                            placeholder="image"
                            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                    <button className="rounded-full bg-primary px-3 py-2 mt-4" onClick={handlePicture}>
                        <Typography>Enrigistrer</Typography>
                    </button>
                </div>
                <button onClick={() =>closePopup()} className="close-modal bg-accentuary px-3 p-1 rounded-full">
                    <Typography variant="white">X</Typography>
                </button>
            </div>
        </div>
        )
}
const pictureRef = useRef();
const data = new FormData(pictureRef.current);
const handlePicture = () => {
    const picture = data.get("picture");
    const id_animals = data.get("id_animals");
    console.log(picture)
    const body = {picture,id_animals}
    fetchApi('http://localhost:3000/api/animal/picture', 'POST', body).then(data => {
        console.log("data");    
        console.log(data);
          }); 
}
//---------------------------------------------------------------
    return <>
        <div className="flex flex-col items-center mt-6">   
            <div className="rounded w-full">
                <div className="flex justify-between">
                    <div className="flex">
                        <div>
                            <button onClick={() =>openPopup()} className="flex items-center rounded-full gap-2 p-2 px-4 bg-accentuary">
                                <div className="bg-white rounded-full p-2 px-3"><i className="fa-solid fa-plus fa-lg text-accentuary"></i></div>
                                <Typography variant="white">Ajouter des photos</Typography>
                            </button>
                            {open === true ? poPup() : null}
                            
                        </div>    
                    </div>
                    <div className="flex gap-2 p-2">
                        <button><i className="fa-solid fa-grip-lines fa-lg "></i></button>
                        <button className="rounded-full bg-primary px-3 py-2"><i className="fa-solid fa-table-cells-large fa-lg"></i></button>
                    </div>
                </div>

                <div className="flex items-center justify-start px-8 gap-4 flex-wrap">
                    {animalsList}
                </div>
            </div>

        </div>
    </>
  }
  
  export default PicturesGalleryCard;