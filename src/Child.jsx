// import { useState } from "react"

//  export default function Child({onsubmit}){
//     const[data,setData]=useState();

//     const handleclick=(e)=>{
//         e.preventDefault();
//         onsubmit(data);
//         setData('')
//     }
//     return(
//         <form>
//             <input type="text"value={data} onChange={(e)=>setData(e.target.value)} />
//             <button onClick={handleclick}>submit</button>
//         </form>
//     )
//  }