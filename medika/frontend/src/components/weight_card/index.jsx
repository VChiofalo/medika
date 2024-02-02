import Typography from "../common/typography";

function WeightCard({ weight, previous_weight }) {
    weight = "12"
    previous_weight = "15"
    let gainedWeight = weight - previous_weight

    return <>
        <div className="flex flex-col justify-center bg-white">
            <div className="border-2 flex-col items-center justify-center rounded-lg m-2 h-full ">
                <div className=" ">
                    <Typography tag="h2">Estimation</Typography>
                    <Typography>pour le mois prochain</Typography>
                </div>
                <div className="">
                    <div className="flex justify-end">
                        <p><Typography>{gainedWeight}kg</Typography></p>
                    </div>
                    <div className="">
                        <p><Typography variant="primary" tag="h3">{weight} kg</Typography></p>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    </>
  }
  export default WeightCard;
  