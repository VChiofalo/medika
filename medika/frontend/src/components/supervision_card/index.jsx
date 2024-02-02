import Typography from "../common/typography";

function SupervisionCard({ date, overview }) {
    overview = 'Ceci est un traitement'
    date = '13 janv 2007'
    return <>
        <div className="flex items-center flex-col  ">

            <div className="overflow-hidden rounded-lg m-2 w-full sm:w-3/4">
                <div className="treatements rounded-lg bg-background m-2">
                    <div className="flex justify-center items-center p-2">
                        <i className="fa-solid fa-pills text-accentuary"></i>
                        <Typography tag="h3">Traitements</Typography>
                    </div>
                    <div className="flex flex-col items-center divide-y divide-black">
                        <div className="flex justify-between w-full">
                            <Typography>{date}</Typography>
                            <Typography>{overview}</Typography>
                        </div>
                        <div className="flex justify-between w-full">
                            <Typography>{date}</Typography>
                            <Typography>{overview}</Typography>
                        </div>
                    </div>
                </div>

                <div className="reminder rounded-lg bg-background m-2">
                    <div className="flex justify-center items-center p-2">
                        <i className="fa-solid fa-bell text-accentuary"></i>
                        <Typography tag="h3">Rappel</Typography>
                    </div>
                    
                    <div className="flex justify-between w-full">
                            <Typography>{date}</Typography>
                            <Typography>{overview}</Typography>
                    </div>
                </div>

                <div className="notes rounded-lg bg-background m-2">
                    <div className="flex justify-center items-center p-2">
                        <i className="fa-regular fa-clipboard text-accentuary"></i>
                        <Typography>Notes</Typography>
                    </div>
                    
                    <div className="flex justify-between w-full">
                            <Typography>{date}</Typography>
                            <Typography>{overview}</Typography>
                    </div>
                </div>
            </div>
           
        </div>        
    </>
  }
  
  export default SupervisionCard;
  