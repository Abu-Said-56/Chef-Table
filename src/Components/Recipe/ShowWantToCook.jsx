

const ShowWantToCook = ({cook,handlePreparing}) => {
    return (
        <div className="flex justify-between py-3 gap-4">
            <p>{cook.recipe_name}</p>
            <p>{cook.preparing_time} min</p>
            <p>{cook.calories} Calories</p>

            <button onClick={()=>handlePreparing(cook,cook.recipe_id)} className="btn bg-[#0BE58A] py-1 px-4 rounded-full">Preparing</button>

        </div>
    );
};

export default ShowWantToCook;