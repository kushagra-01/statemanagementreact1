const { useState } = require("react");

export const Groceinput =({aadGroce})=>{
    const [text,SetText] =useState("")

    return(
        <div>
            <input type="text" onChange={((e)=>{

              SetText(e.target.value)         

            })}/>

          <button onClick={()=>{

              aadGroce(text)
            
          }}>add Grocery Data
          </button>
              

        </div>
    )
}