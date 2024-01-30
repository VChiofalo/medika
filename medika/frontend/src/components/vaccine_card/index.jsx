function VaccineCard({ name, date }) {
    name = 'Tetanos'
    date = '13 janv 2007'
    return <>
        <div className="flex flex-col border-2 items-center m-2">
            <div className="flex justify-center items-center">
                <i class="fa-solid fa-syringe"></i>
                <h2>Vaccin</h2>
            </div>
            <div className="flex flex-col justify-center">
                <p>{name}</p>
                <p>{date}</p>
            </div>
        </div>        
    </>
  }
  
  export default VaccineCard;
  