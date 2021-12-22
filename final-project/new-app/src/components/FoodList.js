import React from "react"
import FoodCard from './FoodCard'

const FoodList = (props) => {
    const {food} = props;
    return(
        <div className ="list" style={{display:"flex", width:"90vw", alignItems:"center", flexDirection:"row" ,margin:"5px 5vw" , flexWrap:"wrap"}}>
            {
                food.map((item,i) => {
                 return<FoodCard food={item} key={i}
                />
             })
            }
           
        </div>
    )
}

export default FoodList
