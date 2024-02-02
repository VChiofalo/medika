import Typography from "../common/typography";

function VaccineCard({ name, date }) {
    name = 'Tetanos'
    date = '13 janv 2007'
    return <>
        <div className="flex flex-col bg-white items-center rounded-lg m-2">
            <div className="flex justify-center items-center">
                <i className="fa-solid fa-syringe text-accentuary"></i>
                <h2>Vaccin</h2>
            </div>
            <div className="flex flex-col justify-center">
                <Typography tag="h4" variant="accentuary">{name}</Typography>
                <Typography>{date}</Typography>
            </div>
        </div>        
    </>
  }
  
  export default VaccineCard;
  