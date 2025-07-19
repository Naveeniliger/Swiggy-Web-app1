import { useState} from "react"
import ItemCards from "./ItemCards"


const RestCard = ({ ResCardprop }) => {

const [showItems ,setshowItems] = useState(false)

    const HandleClick = () =>{
         setshowItems(!showItems)
    }


    return (
    
        <div className="RestCard" >

            <div className="Recomend" onClick={HandleClick}>
                <h4>{ResCardprop.title}({ResCardprop.itemCards.length})</h4>
                    <p>↓</p>
            </div>  
           
            <div>
                { showItems && <ItemCards items ={ResCardprop?.itemCards}/>}
            </div>
            

        </div>
    )
 }

export default RestCard