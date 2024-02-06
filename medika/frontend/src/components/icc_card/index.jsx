import Typography from "../common/typography";

function IccCard({ icc }) {
    icc = "9"

    return <>
        <div className=" m-2">
            <div className="flex flex-col border-2 gap-2 rounded-lg">
                <div className="flex flex-col items-center justify-center">
                    <Typography variant="primary" tag="h2"><h2>ICC</h2></Typography>
                    <Typography variant="black"><p>Indice de Condition Corporelle</p></Typography>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex ">

                    </div>
                    <div className="">
                        <p><Typography tag="h2">{icc}</Typography></p>
                    </div>
                    
                    
                </div>
            </div>
            <button className="flex items-center rounded-full gap-2 p-2 border-orange-500">
                    <i className="fa-solid fa-plus"></i>
                    <Typography>
                        Mettre a jour le poid
                    </Typography>
                </button>
        </div>
    </>
  }
  export default IccCard;
  