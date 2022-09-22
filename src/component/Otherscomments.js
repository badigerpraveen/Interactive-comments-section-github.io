import React  from "react"; 
import {useState ,useEffect} from "react";
import othrscomments from "./data.json" 
//console.log(othrscomments);
function Otherscomments(){ 
    const [othersCmt, setOthersCmt] = useState([]);
   
    // useEffect(() => {
    //     others();
    //   }, []); 

 console.log(othrscomments,"othrscomments");
//     const others =  ()=> {
//      fetch(othrscomments)
//     .then((response) => response.json())
//     .then((data)=>console.log(data))
//     .catch((error) => console.log(error));
//   }
  

  console.log(othersCmt,"othersCmt");
    return(<>
        
    </>)
} 

export default Otherscomments ;