import { useState } from "react";
import { Groceinput} from "./groce.input";
import { Grocelist } from "./groceList";
import { v4 as uuidv4 } from 'uuid';

export const Groce =()=>{

    const [groce,setGroce]=useState([])
console.log(groce)


    const aadGroce=(data)=>{

const db ={
    id:uuidv4(),
    title:data,
    status:false,
}
setGroce([...groce,data])

    }
    // const deleteGroce=(id)=>{
    //     const todos = groce.filter(item => item.id != id);
    //     setGroce(...todos);
    // }
   
return(
    <div>
        <Groceinput aadGroce={aadGroce}/>
        {groce.map((e)=>{return (
        <>
          <Grocelist Groce={e}/>
{/* <button onClick={()=>{deleteGroce(e)}}>deleletee</button> */}


        </>
        )
           
        })}
    </div>
)

}
