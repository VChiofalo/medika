function SupervisionCard({ date, overview }) {
    overview = 'Ceci est un traitement'
    date = '13 janv 2007'
    return <>
        <div className="flex items-center flex-col  ">

            <div className="overflow-hidden border-4 rounded-lg m-2">
                <div className="treatements border-2">
                    <div className="flex justify-center">
                        <i class="fa-solid fa-pills"></i>
                        <h2>Traitements</h2>
                    </div>
                    <div className="flex">
                        <p>{date}</p>
                        <p>{overview}</p>
                    </div>
                </div>

                <div className="reminder border-2">
                    <div className="flex justify-center">
                        <i class="fa-regular fa-bell"></i>
                        <h2>Rappel</h2>
                    </div>
                    
                    <div className="flex">
                        <p>{date}</p>
                        <p>{overview}</p>
                    </div>
                </div>

                <div className="notes border-2">
                    <div className="flex justify-center">
                        <i class="fa-regular fa-clipboard"></i>
                        <h2>Notes</h2>   
                    </div>
                    
                    <div className="flex">
                        <p>{date}</p>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
           
        </div>        
    </>
  }
  
  export default SupervisionCard;
  