import Typography from "../common/typography"

function AnimalCard({ name, birthday, breed, gender }) {
    name = 'Luna'
    birthday = "1 dec 1999"
    breed = "wolf"
    gender = ':)'
    return <>
        <div className="flex flex-col items-center relative">
            <div className="bg-primary w-80 h-32 rounded-b-3xl absolute z-0"></div>
            <div className="flex flex-col items-center justify-center rounded-lg p-2 m-2 z-10 mt-14 pt-10 bg-white">
                <img src="img/doge.jpg" width="80px" alt="img" className="rounded-full absolute inset-x-2/4 transform -translate-x-1/2 -top-6 translate-y-1/2"/>
                <h2><Typography tag="h3">{name}</Typography></h2>
                <div className="flex items-center divide-x-2 divide-black p-4">
                    <div className="birthday flex items-center p-2 gap-2">
                        <i className="fa-solid fa-cake-candles text-primary"></i>
                        <Typography variant="black">{birthday}</Typography>
                    </div>
                    <div className="breed flex items-center p-2 gap-2">
                        <i className="fa-solid fa-paw text-primary"></i>
                        <Typography variant="black">{breed}</Typography>
                    </div>
                    <div className="gender flex items-center p-2 gap-2">
                        <i className="fa-solid fa-venus-mars text-primary"></i>
                        <Typography variant="black">{gender}</Typography>
                    </div>
                </div>
                <div className="flex bg-accentuary rounded p-2 gap-2 items-center">
                    <i className="fa-solid fa-share"></i>
                    <button><Typography variant="white">Share</Typography></button>  
                </div>
            </div>
            
        </div>
        <div className="flex justify-center">
            <p>Les donée de {name}</p>
        </div>
        


    </>
  }
  
  export default AnimalCard;
  