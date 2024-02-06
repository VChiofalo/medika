import Typography from '../../common/typography';

function WeightStatusCard({ weight, previous_weight }) {
    weight = 3
    previous_weight = 4

    let weightGained = weight - previous_weight
    console.log(weightGained)
    let weightIcon
    if(weightGained < 0) weightIcon = <i className="fa-solid fa-arrow-turn-down fa-lg text-primary"></i>
    if(weightGained > 0) weightIcon = <i className="fa-solid fa-arrow-turn-up fa-lg text-primary"></i>
    if(weightGained == 0) weightIcon = <i className="fa-solid fa-arrow-right-long fa-lg text-primary"></i>

    return <>
        <div className="flex flex-col justify-center m-2 bg-white rounded-lg p-2 shadow-md">
            <div className="flex items-center justify-center gap-2">
                <i className="fa-solid fa-weight-hanging text-accentuary"></i>
                <Typography tag="h3">Poids</Typography>
            </div>
            <div className="flex items-center justify-center gap-2">
                <Typography variant="primary"><span className="text-3xl">{weight}</span>.00 <span className="text-black">kg</span></Typography>
                <div className="absolute -translate-y-4 translate-x-4">
                    {weightIcon}
                </div>
            </div>
        </div>        
    </>
  }
  export default WeightStatusCard;
  