
const AddressForm = () => {
    return (
            <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                <div class="max-w-xl lg:max-w-3xl">
                    <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="" className="block text-sm font-medium text-gray-700">
                                Nom de l'animal
                            </label>

                            <input
                            type="text"
                            id=""
                            name=""
                            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label for="" className="block text-sm font-medium text-gray-700">
                            Espéce de l'animal
                            </label>

                            <input
                            type="text"
                            id=""
                            name=""
                            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div className="col-span-6">
                            <label for="" className="block text-sm font-medium text-gray-700">
                                Race de l'animal
                            </label>
                            
                            <input
                            type="text"
                            id=""
                            name=""
                            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div className="col-span-6">
                            <label for="HeadlineAct" className="block text-sm font-medium text-gray-900"> Headliner </label>

                            <select name="HeadlineAct" id="HeadlineAct" className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm">
                                <option value="">F</option>
                                <option value="JM">M</option>
                            </select>
                        </div>

                        <div className="col-span-6">
                            <label for="" className="block text-sm font-medium text-gray-700">
                                Date de naissance
                            </label>
                            
                            <input
                            type="date"
                            id=""
                            name=""
                            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        <button class="inline-block rounded border border-accentuary-600 px-12 py-3 text-sm font-medium text-white-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
                            Enregistrer</button>
                    </form>
                </div>
            </main>
    )
        
}