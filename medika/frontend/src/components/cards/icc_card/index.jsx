import Typography from "../../common/typography";

function IccCard({ icc }) {
    icc = "4.5"

    return <>
        <div className=" m-4">
            <div className="flex flex-col justify-center w-60 h-50  bg-white shadow-2xl rounded-3xl m-2 p-10">
                <div className="border-20 bg-white  items-center justify-center ">
                    <div className="">
                        <Typography variant="primary" tag="h1"><h2  className="text-center text-2xl font-bold text-gray-900">ICC</h2></Typography>
                        <Typography variant="black"><p className="text-center text-gray-500 text-sm">Indice de Condition Corporelle</p></Typography>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="">
                            <p><Typography tag="h2"><h2 className="text-primary ">{icc}</h2></Typography></p>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <button className="flex items-center group inline-block w-60 justify-center items-center rounded-full bg-white gap-2 p-2 border-accentuary">
                    <i className="fa-solid fa-plus text-orange-500"></i>
                    <Typography ><p className="text-accentuary ">
                    Mettre a jour le poid
                    </p>
                       
                    </Typography>
             </button>
             <br />
            
        </div>
    </>
  }
  export default IccCard;
  