import { useEffect, useState } from "react";
import fetchApi from "../../../services/fetchApi";
import Typography from "../../common/typography";


function UserCard() {

const animalsProfilPictures = ["images/images_placeholder/doge.jpg", "images/penguin.jpg", "images/hampfter.jpg"]

const animals = animalsProfilPictures.length
const treatements = 2
const [userfirstname, setUserfirstname] = useState("")
const [userlastname, setUserlastname] = useState("")
const [userPicture,setUserPicture] = useState([])

fetchApi('http://localhost:3000/api/users', 'GET').then((data) => {
          //response.json();
          /*console.log("data")
          console.log(data)*/
          setUserfirstname(data.first_name)
          setUserlastname(data.last_name)
        })
        useEffect(() => {
            fetchApi('http://localhost:3000/api/user/pictures', 'GET').then((data) => {
                        //response.json();
                        console.log("picture")
                        console.log(data.pictures[0])
                        setUserPicture(data.pictures[data.pictures.length-1])
                      })
          }, []);


const animalsList = animalsProfilPictures.map((animal) => {
    return(<>
        <img src={animal} className="rounded-full w-10 h-10 object-cover border-2 border-white" alt="" />
    </>)

})
    return <>
        <div className="flex flex-col items-center">   
            <div className="flex flex-col items-center  rounded-3xl w-5/12 pb-4 bg-gradient-to-l from-primary to-secondary">
                <div className="flex items-center relative mb-32 w-[1000px]">
                    <img src="images/images_placeholder/stupidDog.jpg" className="w-full relative rounded-b-[100px]" alt="" />
                    <img src={`http://localhost:3000${userPicture}`} className="w-60 rounded-full border-4 border-white absolute inset-x-2/4 transform -translate-x-1/2 bottom-0 translate-y-1/2" alt="" />
                </div>
                <Typography variant="white" tag="h3">{userlastname}</Typography>
                <Typography variant="white">{userfirstname}</Typography>

                <div className="flex justify-center divide-x-2 m-2 mt-8">
                    <div className="flex flex-col items-center px-6">
                        <Typography variant="white" tag="h3">{animals}</Typography>
                        <Typography variant="white">{animals > 0 ? "animaux" : "animal"}</Typography>
                    </div>
                    <div className="flex flex-col items-center px-6">
                        <Typography variant="white" tag="h3">{treatements}</Typography>
                        <Typography variant="white">{treatements > 0 ? "traitement" : "traitements"}</Typography>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                    {animalsList}
                </div>
                <Typography variant="white">{animals > 1 ? "Mes compagnons" : "Mon compagnon"}</Typography>
            </div>

        </div>
    </>
  }
  
  export default UserCard;