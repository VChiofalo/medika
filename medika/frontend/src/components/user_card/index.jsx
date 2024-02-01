import Typography from "../common/typography";


function UserCard() {
const animalsProfilPictures = ["img/doge.jpg", "img/nyan.png", "img/dogSamurai.jpeg"]
const animals = animalsProfilPictures.length
const treatements = 2

const animalsList = animalsProfilPictures.map((animal) => {
    return(<>
        <img src={animal} className="rounded-full w-10 " alt="" />
    </>)

})
    return <>
        <div className="flex flex-col items-center">   
            <div className="border-2 rounded w-80">
                <img src="img/stupidDog.jpg" className="w-full" alt="" />
                <img src="img/user.png" className="w-20 rounded-full relative bottom-10 left-28" alt="" />
                <Typography>Cameron</Typography>
                <Typography>Martin</Typography>

                <div className="flex justify-center">
                    <div className="flex flex-col border-r-4 p-2">
                        <Typography tag="h3">{animals}</Typography>
                        <Typography>{animals > 0 ? "animaux" : "animal"}</Typography>
                    </div>
                    <div className="flex flex-col border-l-4 p-2">
                        <Typography tag="h3">{treatements}</Typography>
                        <Typography>{treatements > 0 ? "traitement" : "traitements"}</Typography>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                    {animalsList}
                </div>
                <Typography>Mes compagnons</Typography>
            </div>

        </div>
    </>
  }
  
  export default UserCard;