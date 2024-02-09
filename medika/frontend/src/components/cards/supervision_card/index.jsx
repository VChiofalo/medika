import Typography from "../../common/typography";
import WeightStatusCard from '../weight_status_card'
import VaccineCard from '../vaccine_card'

import { Link } from "react-router-dom";

function SupervisionCard() {
    const date = '13 janv 2007'
    return <>
        <div className="flex justify-center items-center">

            <div className="flex flex-col items-center gap-4 rounded-t-2xl w-full bg-background pb-4" >
                <div className="flex justify-center p-2 pt-4">
                    <Typography variant="accentuary">Les donées de Luna</Typography>
                </div>

                <div className='flex justify-center'>
                    <Link to="/poid">
                        <WeightStatusCard/>
                    </Link>
                    <VaccineCard/>
                </div>

                <div className="treatements rounded-lg bg-white w-11/12 shadow-md">
                    <div className="flex justify-center items-center gap-2 p-2">
                        <i className="fa-solid fa-pills text-accentuary"></i>
                        <Typography tag="h3">Traitements</Typography>
                    </div>
                    <div className="flex flex-col items-center divide-y divide-black">
                        <div className="flex justify-between w-full">
                            <Typography>{date}</Typography>
                            <Typography>Ceci est un traitement</Typography>
                        </div>
                        <div className="flex justify-between w-full">
                            <Typography>{date}</Typography>
                            <Typography>Ceci est un traitement</Typography>
                        </div>
                    </div>
                </div>

                <div className="reminder rounded-lg bg-white p-2 w-11/12 shadow-md">
                    <div className="flex justify-center items-center gap-2 p-2">
                        <i className="fa-regular fa-bell text-accentuary"></i>
                        <Typography tag="h3">Rappel</Typography>
                    </div>
                    
                    <div className="flex flex-col items-center divide-y divide-black">
                        <div className="flex justify-between w-full">
                            <Typography>{date}</Typography>
                            <Typography>Ceci est un rappel</Typography>
                        </div>
                    </div>
                </div>

                <div className="notes rounded-lg bg-white p-2 w-11/12 shadow-md">
                    <div className="flex justify-center items-center gap-2 p-2">
                        <i className="fa-regular fa-clipboard text-accentuary"></i>
                        <Typography tag="h3">Notes</Typography>
                    </div>
                    
                    <div className="flex flex-col items-center divide-y divide-black">
                        <div className="flex justify-between w-full">
                            <Typography>{date}</Typography>
                            <Typography>Ceci est une note</Typography>
                        </div>
                        <div className="flex justify-between w-full">
                            <Typography>{date}</Typography>
                            <Typography>Ceci est une note</Typography>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>        
    </>
  }
  
  export default SupervisionCard;
  