import { useState } from "react";
import Typography from "../../common/typography";


function PicturesGalleryCard() {
const animalsProfilPictures = ["images/images_placeholder/doge.jpg", "images/images_placeholder/nyan.png", "images/images_placeholder/dogSamurai.jpeg","images/images_placeholder/nyan.png","images/images_placeholder/nyan.png","images/images_placeholder/nyan.png","images/images_placeholder/nyan.png","images/images_placeholder/nyan.png",]
const animals = animalsProfilPictures.length

const animalsList = animalsProfilPictures.map((animal) => {
    return(<>
        <img src={animal} className=" w-40 " alt="" />
    </>)

})
const [open, setOpen] = useState(false)
const openPopup = () => {
    setOpen(true)
    
}
const closePopup = () => {
    setOpen(false)
    
}
function poPup(
    
) {
        return (
            <div className="absolute modal  rounded-lg bg-white border border-gray-200 shadow-lg">
            <div className="flex items-center gap-4 p-4 overlay">

           <div>
               <label className="block text-xl font-medium text-gray-900"> Photo de votre animal </label>

           <input
               type="file"
               placeholder="image"
               className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
               />
               <button className="rounded-full bg-primary px-3 py-2 mt-4">Enrigistrer</button>
           </div>
           <button onClick={() =>closePopup()} className="close-modal">x</button>
          </div>
          </div>
        )
}
    return <>
        <div className="flex flex-col items-center mt-6">   
            <div className="rounded w-full">
                <div className="flex justify-between">
                    <div className="flex">
                        <div>
                            <button onClick={() =>openPopup()} className="flex items-center rounded-full gap-2 px-4 bg-accentuary">
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