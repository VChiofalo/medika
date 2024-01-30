function AnimalCard({ name, birthday, breed, gender }) {
    name = 'Luna'
    birthday = "1 dec 1999"
    breed = "wolf"
    gender = ':)'
    return <>
        <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center border-2 rounded-lg p-2 m-2">
                <img src="img/doge.jpg" width="100px" alt="img" className="rounded-full"/>
                <h2>{name}</h2>
                <div className="flex items-center gap-4">
                    <div className="birthday flex">
                        <i class="fa-solid fa-cake-candles"></i>
                        {birthday}
                    </div>
                    <div className="breed flex">
                        <i class="fa-solid fa-paw"></i>
                        {breed}
                    </div>
                    <div className="gender flex">
                        <i class="fa-solid fa-venus-mars"></i>
                        {gender}
                    </div>
                </div>
                <div className="flex bg-red-200 rounded p-2 gap-2 items-center">
                    <i class="fa-solid fa-share"></i>
                    <button>Share</button>  
                </div>
            </div>
            
            
        </div>

        <p>Les donée de {name}</p>


    </>
  }
  
  export default AnimalCard;
  