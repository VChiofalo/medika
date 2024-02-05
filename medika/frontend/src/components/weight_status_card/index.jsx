import Typography from "../common/typography";

function WeightStatusCard({ weight, previous_weight }) {
    weight = '3'
    return <>
        <div className="flex flex-col justify-center m-2 bg-white rounded-lg">
            <div className="flex items-center justify-center">
                <i className="fa-solid fa-weight-hanging text-accentuary"></i>
                <Typography tag="h4">Poids</Typography>
            </div>
            <div className="flex items-center gap-2">
                <Typography><span className="text-3xl">{weight}</span>.00 kg</Typography>
                <p>stats</p>
            </div>
        </div>        
    </>
  }
  export default WeightStatusCard;
  