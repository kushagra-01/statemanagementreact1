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
setGroce([...groce,db])

    }
    const deleteGroce=(id)=>{

console.log(id,"idniv")
    const remove = groce.filter((todo)=>{return todo.id != id})

    setGroce([...remove])

    
    }

   
return(
    <div>
        <Groceinput aadGroce={aadGroce}/>
        {groce.map((e)=>{return (
        <>
          <Grocelist key={e.id} Groce={e} deleteGroce={deleteGroce}/>
{/* <button onClick={()=>{deleteGroce(e)}}>deleletee</button> */}


        </>
        )
           
        })}
    </div>
)

}
