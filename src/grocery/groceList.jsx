export const Grocelist=({Groce,deleteGroce})=>{
    return (
        <div>
            <h1>{Groce.title}</h1>
            <button onClick={(()=>{deleteGroce(Groce.id)})}>deletee</button>
        </div>
    )
}