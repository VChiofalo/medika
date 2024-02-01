import Typography from "../common/typography";


function PicturesGalleryCard() {
const animalsProfilPictures = ["img/doge.jpg", "img/nyan.png", "img/dogSamurai.jpeg","img/nyan.png","img/nyan.png","img/nyan.png","img/nyan.png","img/nyan.png",]
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
                        <button className="flex items-center rounded-full gap-2 p-2 bg-orange-500">
                            <i className="fa-solid fa-plus fa-lg"></i>
                            <Typography variant="white">Ajouter des photos</Typography>
                        </button>
                    </div>
                    <div className="flex gap-2 p-2">
                        <button><i className="fa-solid fa-grip-lines fa-lg "></i></button>
                        <button className="rounded-full bg-orange-500 px-2"><i className="fa-solid fa-table-cells-large fa-lg"></i></button>
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