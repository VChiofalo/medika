import Typography from "../../common/typography";

function WeightCard({ weight, previous_weight }) {
    weight = "12.5"
    previous_weight = "15"
    let actualWeight = weight - previous_weight

    return <>
        <div className="flex flex-col justify-center w-60 h-60 m-6 bg-white shadow-2xl rounded-3xl m-2 p-10 ">
            <div className="border-20 bg-white  items-center justify-center  ">
                <div className=" ">
                    <Typography variant="primary" tag="h1"><h2 className="text-center text-2xl font-bold text-gray-900">Estimation</h2></Typography>
                    <Typography variant="black"><p className="text-center text-gray-500 text-sm">pour le mois prochain</p></Typography>
                </div>
                <div className="">
                    <div className="flex justify-center ">
                        <p ><Typography>{actualWeight}kg</Typography></p>
                    </div>
                    <div className="">
                        <p className="text-center "><Typography tag="h2"><h2 className="text-primary ">{weight} kg</h2></Typography></p>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    </>
  }
  export default WeightCard;
  