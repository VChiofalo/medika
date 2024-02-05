import Typography from "../common/typography";

function VaccineCard({ name, date }) {
    name = 'Tetanos'
    date = '13 janv 2007'
    return <>
        <div className="flex flex-col bg-white items-center rounded-lg m-2 p-2 shadow-md">
            <div className="flex justify-center items-center gap-2">
                <i className="fa-solid fa-syringe text-accentuary"></i>
                <Typography tag="h3">Vaccin</Typography>
            </div>
            <div className="flex flex-col items-center">
                <Typography tag="h3" variant="accentuary">{name}</Typography>
                <Typography>{date}</Typography>
            </div>
        </div>        
    </>
  }
  
  export default VaccineCard;
  