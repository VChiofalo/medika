import Typography from "../../common/typography"

function AnimalCard({ name, birthday, breed, gender }) {
    name = 'Luna'
    birthday = "1 dec 1999"
    breed = "wolf"
    gender = 'Male'
    return <>
        <div className="flex flex-col items-center relative mb-4">
            <div className="bg-primary w-full h-32 rounded-b-3xl absolute z-0"></div>
            <div className="flex flex-col items-center rounded-lg z-10 mt-14 pt-10 bg-white w-5/6 shadow-md">
                <img src="images/images_placeholder/user.png" width="80px" alt="img" className="rounded-full absolute inset-x-2/4 transform -translate-x-1/4 -top-6 translate-y-1/2 border-2 border-white"/>
                <img src="images/images_placeholder/doge.jpg" width="80px" alt="img" className="rounded-full absolute inset-x-2/4 transform -translate-x-3/4 -top-6 translate-y-1/2 border-2 border-white"/>
                <Typography tag="h3">{name}</Typography>
                <div className="flex items-center divide-x-2 divide-slate-200 pb-2">
                    <div className="birthday flex flex-col items-center p-2 gap-2">
                        <Typography tag="p" variant="black">{birthday}</Typography>
                        <i className="fa-solid fa-cake-candles text-accentuary"></i>
                    </div>
                    <div className="breed flex flex-col items-center p-2 gap-2">
                        <Typography tag="p" variant="black">{breed}</Typography>
                        <i className="fa-solid fa-paw text-primary"></i>
                    </div>
                    <div className="gender flex flex-col items-center p-2 gap-2">
                        <Typography tag="p" variant="black">{gender}</Typography>
                        <i className="fa-solid fa-venus-mars text-secondary"></i>
                    </div>
                </div>
                <div className="bg-accentuary rounded-full mb-2">
                    <button className="flex gap-2 items-center px-2">
                        <div>
                            <i className="fa-solid fa-share fa-xs text-white"></i>
                        </div>
                        <Typography variant="white">Share</Typography>
                    </button>  

                </div>
            </div>
            
        </div>
        
        


    </>
  }
  
  export default AnimalCard;
  