import { useState } from 'react'
import './App.css'
import Banner from './Components/Header/Banner'
import Navbar from './Components/Header/Navbar'
import Food from './Components/Recipe/Food'
// import WantT0Cook from './Components/Recipe/WantT0Cook'


function App() {

  const [wanttoCook, setwanttoCook] = useState([]);

  const handleWanttoCook = food => {
    console.log(food);
    const newWanttoCook = [...wanttoCook, food];
    

    const checkFood = wanttoCook.includes(food)
    if(checkFood === true){
      alert('Already selected')
    }else{
      setwanttoCook(newWanttoCook);
    }

  }

  const [Preparing,setPreparing] = useState([]);
  const [totalTime,setTime] = useState(0)
  const [totalCalorie,setCalorie] = useState(0)

    const handlePreparing = (currentCooking,id,time,calorie)=>{
        // console.log("click",currentCooking)
        const newCook = [...Preparing,currentCooking]
        setPreparing(newCook);

        const remaingFood = wanttoCook.filter(food => food.recipe_id !== id)
        setwanttoCook(remaingFood)
        const newtime = totalTime + time;
        setTime(newtime)

        const newcalorie = totalCalorie + calorie ;
        setCalorie(newcalorie)


        
    }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Food
      totalCalorie={totalCalorie}
      totalTime={totalTime}
      Preparing={Preparing}
      handlePreparing={handlePreparing}
        handleWanttoCook={handleWanttoCook}
        wanttoCook={wanttoCook}>

      </Food>

    </>
  )
}

export default App
