

const CurrentCooking = ({cooking}) => {
    return (
        <div className="flex justify-between py-3">
            <p>{cooking?.recipe_name}</p>
            <p>{cooking?.preparing_time} min</p>
            <p>{cooking?.calories} Calories</p>
        </div>
    );
};

export default CurrentCooking;