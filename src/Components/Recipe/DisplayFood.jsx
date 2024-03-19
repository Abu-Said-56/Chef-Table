

const DisplayFood = ({recipe,handleWanttoCook}) => {

    const {recipe_image,recipe_name,short_description,preparing_time,calories,ingredient_sinanarray}= recipe;

    return (
        <div>
        <div className="card w-96 bg-base-100 border-2 border-gray-300">
            <figure className="px-10 pt-10">
            <img src={recipe_image} className="rounded-xl" />
            </figure>
            <div className="card-body">
            <h2 className="font-bold">{recipe_name}</h2>
            <p className="border-b-2 py-2">{short_description}</p>
            <h4 className="font-bold">Ingredients: {ingredient_sinanarray.length}</h4>
            
                <div className=" space-y-2">
                    {
                        ingredient_sinanarray.map((item,idx)=><li key={idx}>{item}</li>)
                    }
                </div>
            
            <div className="flex justify-between">
                <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p>{preparing_time} minutes</p>
                </div>
                <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
                <p>{calories} calories</p>
                </div>
            </div>
            <div className="card-actions">
                <button onClick={()=> handleWanttoCook(recipe)} className="btn bg-[#0BE58A] rounded-full px-5">Want to Coke</button>
            </div>
            </div>
            </div>
        </div>
            
    );
};

export default DisplayFood;