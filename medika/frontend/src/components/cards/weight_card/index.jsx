import Typography from "../../common/typography";

function WeightCard({ weight, previous_weight }) {
    weight = "12"
    previous_weight = "15"
    let actualWeight = weight - previous_weight

    return <>
        <div className="flex flex-col justify-center">
            <div className="border-2 flex-col items-center justify-center rounded-lg m-2 h-full ">
                <div className=" ">
                    <Typography variant="primary" tag="h2"><h2>Estimation</h2></Typography>
                    <Typography variant="black"><p>pour le mois prochain</p></Typography>
                </div>
                <div className="">
                    <div className=" ">
                        <p><Typography>{actualWeight}</Typography></p>
                    </div>
                    <div className="">
                        <p><Typography tag="h3">{weight} kg</Typography></p>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    </>
  }
  export default WeightCard;
  