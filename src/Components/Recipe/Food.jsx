import { useEffect, useState } from "react";
import DisplayFood from "./DisplayFood";
import WantT0Cook from "./WantT0Cook";

const Food = ({handleWanttoCook,wanttoCook,handlePreparing,Preparing}) => {

    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        fetch('jsondata.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])
    return (
        <div className="container mx-auto ">
            <div className="text-center my-5">
                <h3 className="text-4xl font-bold pb-3">Our Recipes</h3>
                <p>Healthy Harvest: Nourishing Recipes for Wellness</p>
            </div>

            <div className="flex flex-col lg:flex-row">
                {/* left side */}
                <div className="lg:w-[65%]">
                    <div className="grid grid-cols-2 gap-5">
                        {
                            recipe.map((blog, idx) => <DisplayFood 
                            key={idx} 
                            recipe={blog}
                            handleWanttoCook ={handleWanttoCook}
                            ></DisplayFood>)
                        }
                    </div>
                </div>
                {/* right side */}
                <div className="lg:w-[35%]">
                    <WantT0Cook 
                    Preparing={Preparing}
                    handlePreparing={handlePreparing} 
                    wanttoCook={wanttoCook}></WantT0Cook>
                </div>
            </div>
        </div>
    );
};

export default Food;