
import { Link } from "react-router-dom";
import useLogged from "../../hooks/useLogged";
import Typography from "../common/typography";
//import { useState } from "react";
//import fetchApi from "../../services/fetchApi";

function AnimalGallery() {

    useLogged();

    //const [animals, setAnimals] = useState([])

    const info = [
        {
            name: "Luna",
            birthday: "01/12/1999",
            breed: "wolf",
            gender: "Male",
            image: "images/images_placeholder/doge.jpg",
        },
        {
            name: "Picassou",
            birthday: "01/11/1999",
            breed: "Husky",
            gender: "Female",
            image: "images/chient.png",
        },
    ];


    /*fetchApi('http://localhost:3000/api/animal/pictures', 'GET').then((data) => {
        
        console.log(data)//
      })*/

    /*fetchApi('http://localhost:3000/api/animal', 'GET').then((data) => {
        console.log("data")
        console.log(data)
        //setAnimals(data)
        })*/

    const infolist = info.map((info) => {
        return(
            <>
                <Link to="/animal_profil_page">
                    <div className="">
                        <div className="rounded-xl shadow-lg">
                            <div className="p5 flex flex-col">
                                <div className="rounded-xl overflow-hidden">
                                    <img
                                        alt="Office"
                                        src= {info.image}
                                        className="h-56 w-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col items-center bg-white p-4 sm:p-6">
                                    <Typography tag="h3">{info.name}</Typography>
                                    <div style={{
                                                width: "100%",
                                                height: "1px",
                                                backgroundColor: "#EDEDED",
                                                borderRadius: "50%",
                                                margin: "5px",
                                                
                                            }}></div>
                                        <div className="flex divide-x-2 p-4 sm:p-6">
                                                <div className="flex flex-col  items-center px-4">
                                                <div className="bg-primary h-6 w-6 rounded-full"></div>
                                                    <Typography>{info.breed}</Typography>
                                                </div>
                                                <div className="flex flex-col items-center px-4">
                                                    <div className="bg-accentuary h-6 w-6 rounded-full"></div>
                                                    <Typography>{info.birthday}</Typography>
                                                </div>
                                                <div className="flex flex-col items-center px-4">
                                                <div className="bg-secondary h-6 w-6 rounded-full"></div>

                                                    <Typography>{info.gender}</Typography>
                                      </div>
                                   </div>
                              </div>
                            </div>

                        </div>
                    </div>
                </Link>
            </>
        )
    })
        return (
            <>
                <div
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "20px",
                        }}
                        className="bg-primary py-6 rounded-b-lg"
                    >
                    <Link to="/home">
                        <div className="flex justify-center">
                            <img
                            src="/images/Medika.png"
                            alt="Main Logo"
                            style={{ width: "90px", height: "25px"}}
                            className="mx-auto my-0"
                            />
                            <img
                            src="/images/Frame18.png"
                            alt="Second Logo"
                            style={{
                                width: "20px",
                                height: "20px",
                                marginLeft: "0px",
                                marginBottom: "5px",
                            }}
                        />
                        </div>
                    </Link>
                    
                </div>
                    
                        <div className="flex justify-center">
                            <Link to="/add_animals">
                                <div className="flex justify-center items-center gap-2 p-2 px-8 py-3 rounded-full bg-accentuary w-36">
                                    <i className="fa-solid fa-plus text-white"></i>
                                    <p className="  font-bold text-white">Ajouter</p>
                                </div>
                            </Link>
                        </div>
                    

                <div className="flex flex-direction-row justify-between p-4">
                    <button className="bg-primary p-2 rounded-full text-white px-8 py-3 font-bold">Chien</button>
                    <button className="bg-primary p-2 rounded-full text-white px-8 py-3 font-bold">Chat</button>
                    <button className="bg-primary p-2 rounded-full text-white px-8 py-3 font-bold">hamster</button>
                    <button className="bg-primary p-2 rounded-full text-white px-8 py-3 font-bold">Lapin</button>
                </div>
                
                <div className="grid grid-cols-1  gap-8  md:grid-cols-2 lg:grid-cols-3 p-4  mx-auto">
                    {infolist}
                </div>
                          
            </>
        )
    }
    
    export default AnimalGallery