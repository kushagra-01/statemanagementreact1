const { useState } = require("react");

export const Groceinput =({aadGroce})=>{
    const [Text,SetText] =useState("")

    return(
        <div>
            <input type="text" onChange={((e)=>{

              SetText(e.target.value)         

            })}/>

          <button onClick={()=>{

              aadGroce(Text)
            
            
          }}>add Grocery Data
          </button>
              

        </div>
    )
}