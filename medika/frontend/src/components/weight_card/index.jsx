function WeightCard({ weight, previous_weight }) {
    weight = '3'
    return <>
        <div className="border-2 flex flex-col justify-center m-2">
            <div className="flex items-center justify-center">
                <i class="fa-solid fa-weight-hanging"></i>
                <h2>Poids</h2>
            </div>
            <div className="flex items-center gap-2">
                <p>{weight} kg</p>
                <p>stats</p>
            </div>
        </div>        
    </>
  }
  
  export default WeightCard;
  