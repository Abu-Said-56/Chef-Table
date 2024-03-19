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
    setwanttoCook(newWanttoCook);

  }

  const [Preparing,setPreparing] = useState([]);

    const handlePreparing = (currentCooking,id)=>{
        // console.log("click",currentCooking)
        const newCook = [...Preparing,currentCooking]
        setPreparing(newCook);

        const remaingFood = wanttoCook.filter(food => food.recipe_id !== id)
        setwanttoCook(remaingFood)
        
    }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Food
      Preparing={Preparing}
      handlePreparing={handlePreparing}
        handleWanttoCook={handleWanttoCook}
        wanttoCook={wanttoCook}>

      </Food>

    </>
  )
}

export default App
