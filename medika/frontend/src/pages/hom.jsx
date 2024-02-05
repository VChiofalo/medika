import { CgAdd } from "react-icons/cg";
function hom() {
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
                <div className="flex justify-center align-center">
                    <button type="button" className="bg-accentuary p-2 rounded-lg text-white"><CgAdd />Ajouter</button>
                </div>

                <div className="flex flex-direction-row justify-between">
                    <button className="bg-primary p-2 rounded-lg text-white">Chien</button>
                    <button className="bg-primary p-2 rounded-lg text-white">Chat</button>
                    <button className="bg-primary p-2 rounded-lg text-white">hamster</button>
                    <button className="bg-primary p-2 rounded-lg text-white">Lapin</button>
                </div>
                <div className="p-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="overflow-hidden  shadow transition hover:shadow-lg ">
                            <img
                            alt="Office"
                            src="/images/chient.png"
                            className="h-56 w-full object-cover"
                        />
                        

                        <div className="bg-white p-4 sm:p-6">
                            <h3 className="mt-0.5 text-lg text-black text-center
                            ">Luna</h3>
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
                                    <h3>Golden</h3>
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
                                    <h3>1 an</h3>
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
                                    <h3>Male</h3>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
    
    export default hom