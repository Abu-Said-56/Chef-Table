
import ShowWantToCook from "./ShowWantToCook";
import CurrentCooking from "./CurrentCooking";


const WantT0Cook = ({wanttoCook,handlePreparing,Preparing}) => {
    // console.log('cook ', wanttoCook)

    
    return (
        <div>
            {/* want to cook part div*/}
        <div className="border-2 border-gray-300 rounded-2xl w-auto px-7">
            <h3 className="text-center text-xl py-3 font-bold border-b-2">Want to Coke: {wanttoCook.length}</h3>
            <div className="flex justify-between py-4">
                <p>Name</p>
                <p>Time</p>
                <p>Calorie</p>
            </div>
        <div>
            {
                   wanttoCook.map((cook,idx)=> <ShowWantToCook handlePreparing={handlePreparing} key={idx} cook={cook}></ShowWantToCook>)
            }
        </div>

            {/* <div className="flex justify-between py-3 gap-4">
                <p>Chicken Caesar Salad</p>
                <p>20 min</p>
                <p>400 Calories</p>
                
                <button className="btn bg-[#0BE58A] py-1 px-4 rounded-full">Preparing</button>
                
            </div> */}
            



            <div>
                <h3 className="text-center text-xl py-3 font-bold border-b-2">Currently cooking: {Preparing.length}</h3>
                <div className="flex justify-between py-3">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
               <div>
                {
                    Preparing.map((cooking,idx)=> <CurrentCooking key={idx} cooking={cooking}></CurrentCooking>)
                }
               </div>
                
                {/* <div className="flex justify-between py-3">
                    <p>Spaghetti Bolognese</p>
                    <p>30 min</p>
                    <p>600 Calories</p>
                </div> */}
                
            </div>
        </div>
            
        </div>
    );
};

export default WantT0Cook;