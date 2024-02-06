
import { Link } from "react-router-dom";
import useLogged from "../../hooks/useLogged";
function AnimalGallery() {

    useLogged();
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
            image: "images/chient.jpg",
        },
    ];
    const infolist = info.map((info) => {
        return(
            <>
                <div className= "p-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 rounded-full">
                    <div className="overflow-hidden  shadow transition hover:shadow-lg ">
                            <img
                            alt="Office"
                            src="/images/chient.png"
                            className="h-56 w-full object-cover"
                        />
                        

                        <div className="bg-white p-4 sm:p-6">
                            <h3 className="mt-0.5 text-lg text-black text-center fontsize-24">{info.name}</h3>
                            <div style={{
                                        width: "100%",
                                        height: "1px",
                                        backgroundColor: "#151515",
                                        borderRadius: "50%",
                                        margin: "5px",
                                        
                                    }}></div>
                           <div className="flex justify-between p-4 sm:p-6">
                                <div>
                                    <div style={{
                                        width: "20px",
                                        height: "20px",
                                        backgroundColor: "#009688",
                                        borderRadius: "50%",
                                        margin: "5px",
                                        
                                    }}>
                                        
                                    </div>
                                    <h3 >{info.breed}</h3>
                                </div>
                                <div>
                                    <div style={{
                                        width: "20px",
                                        height: "20px",
                                        backgroundColor: "#E15100",
                                        borderRadius: "50%",
                                        margin: "5px",
                                        
                                    }}>
                                        
                                    </div>
                                    <h3>{info.birthday}</h3>
                                </div>
                                <div>
                                    <div style={{
                                        width: "20px",
                                        height: "20px",
                                        backgroundColor: "#79BAF6",
                                        borderRadius: "50%",
                                        margin: "5px",
                                        
                                    }}>
                                        
                                    </div>
                                    <h3>{info.gender}</h3>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
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
                    
                </div>
                    <Link to="/home">
                        <div className="flex justify-center">
                            <div className="flex justify-center items-center gap-2 p-2 px-8 py-3 rounded-full bg-accentuary w-36">
                                <i className="fa-solid fa-plus text-white"></i>
                                <p className="  font-bold text-white">Ajouter</p>
                            </div>
                        </div>
                    </Link>

                <div className="flex flex-direction-row justify-between p-4">
                    <button className="bg-primary p-2 rounded-full text-white px-8 py-3 font-bold">Chien</button>
                    <button className="bg-primary p-2 rounded-full text-white px-8 py-3 font-bold">Chat</button>
                    <button className="bg-primary p-2 rounded-full text-white px-8 py-3 font-bold">hamster</button>
                    <button className="bg-primary p-2 rounded-full text-white px-8 py-3 font-bold">Lapin</button>
                </div>
                <div>
                    {infolist}
                </div>
                          
            </>
        )
    }
    
    export default AnimalGallery