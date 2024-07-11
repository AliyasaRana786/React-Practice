import { useEffect, useState } from "react";

export default function App(){
  const[data,setData]=useState([])

  useEffect(()=>{
    const fetchdata=async()=>{
      const response=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
      const responsejson=await response.json();
      setData(responsejson.meals)
      console.log(responsejson.meals);
    }
    fetchdata();
  },[])
 
  return(
   <>
   {data.map((food)=>(
    <div key={food.idMeal}>
      <img src={food.strMealThumb} style={{width:'200px'}} alt="" />
      <div className="country_name">{food.strArea}</div>
      <div className="category">{food.strCategory}</div>
      
    </div>
   ))}
   </>
  )
}