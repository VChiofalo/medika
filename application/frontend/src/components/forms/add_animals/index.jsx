import Typography from "../../common/typography";
import Header from "../../header";


function FormAddAnimals() {

return <>
    <div className="flex w-full justify-center ">
        <div className="flex flex-col ">
            <Header/>

            <form method="post" >
                <div className="flex flex-col p-4 bg-background rounded-b-xl divide-y divide-black">
                    <select name="breedname" className="border-2 rounded m-2">
                        <option value="dog">Chien</option>
                        <option value="cat">Chat</option>
                        <option value="penguin">Penguin</option>
                    </select>
                    <label className="m-2">Nom <input name="lastname" type="text" className="border-2 rounded"/></label>
                    <label className="m-2">Prenom <input name="firstname" type="text" className="border-2 rounded"/></label>
                    <label className="m-2">Anniversaire <input type="date"  className="border-2 rounded"/></label>
                    <label className="m-2">Sexe  
                        <select name="gender" className="border-2 rounded">
                            <option value="female">Femelle</option>
                            <option value="male">Male</option>
                            <option value="other">Autre</option>
                        </select>
                    </label>
                    <label className="m-2">Poid <input name="weight" type="number" className="border-2 rounded"/> Kg</label>

                    <button type="submit" className="bg-primary rounded-full p-4"><Typography variant="blanc">Enregistrer</Typography></button>
                </div>
                
            </form>
        </div>
    </div>
    

</>
}
export default FormAddAnimals;