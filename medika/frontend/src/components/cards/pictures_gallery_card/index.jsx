import Typography from "../../common/typography";


function PicturesGalleryCard() {
const animalsProfilPictures = ["images/images_placeholder/doge.jpg", "images/images_placeholder/nyan.png", "images/images_placeholder/dogSamurai.jpeg","images/images_placeholder/nyan.png","images/images_placeholder/nyan.png","images/images_placeholder/nyan.png","images/images_placeholder/nyan.png","images/images_placeholder/nyan.png",]
const animals = animalsProfilPictures.length

const animalsList = animalsProfilPictures.map((animal) => {
    return(<>
        <img src={animal} className=" w-40 " alt="" />
    </>)

})
    return <>
        <div className="flex flex-col items-center">   
            <div className="border-2 rounded w-full">
                <div className="flex justify-between">
                    <div className="flex">
                        <button className="flex items-center rounded-full gap-2 p-2 bg-accentuary">
                            <i className="fa-solid fa-plus fa-lg stroke-0"></i>
                            <Typography variant="white">Ajouter des photos</Typography>
                        </button>
                    </div>
                    <div className="flex gap-2 p-2">
                        <button><i className="fa-solid fa-grip-lines fa-lg "></i></button>
                        <button className="rounded-full bg-primary px-3 py-2"><i className="fa-solid fa-table-cells-large fa-lg"></i></button>
                    </div>
                </div>

                <div className="flex items-center justify-start px-8 gap-4 flex-wrap">
                    {animalsList}
                </div>
                <Typography>Mes compagnons</Typography>
            </div>

        </div>
    </>
  }
  
  export default PicturesGalleryCard;