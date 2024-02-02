import Typography from "../common/typography";

function IccCard({ icc }) {
    icc = "9"

    return <>
        <div className=" m-2 bg-white">
            <div className="flex flex-col border-2 gap-2 rounded-lg">
                <div className="flex flex-col items-center justify-center">
                    <Typography tag="h2">ICC</Typography>
                    <Typography>Indice de Condition Corporelle</Typography>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex ">

                    </div>
                    <div className="">
                        <Typography variant="primary" tag="h2">{icc}</Typography>
                    </div>
                    
                    
                </div>
            </div>
            <button className="flex items-center rounded-full gap-2 p-2 border-orange-500">
                    <i className="fa-solid fa-plus text-background"></i>
                    <Typography>Mettre a jour le poid</Typography>
                </button>
        </div>
    </>
  }
  export default IccCard;
  