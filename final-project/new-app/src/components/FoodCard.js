import React, { useState, useEffect } from "react"
import { Card , Button} from "react-bootstrap";

const FoodCard= (props) => {
    const [buttonval, setButtonval] = useState('save');
     useEffect(()=>{
        if (props.delete){
            setButtonval('delete')
        }   
     },[props.delete])


    console.log('food card', props)

    const  saveinput = () => {
        if(props.delete){
             props.deleteFood(props.food.favorite);
            } else {  
                       
        const user = JSON.parse(localStorage.getItem('user'));
        console.log( 'hi', user)
        console.log('foodcard',{...props.food,user_id:user[0].user_id})
        fetch('http://localhost:5000/favorite',{
            method:'POST',
            headers: {
                "Content-type": "application/json",
            },
            body:JSON.stringify({...props.food,user_id:user[0].user_id})
            }).then(res => res.json())
            .then(data => {
                console.log(data);
            
            })
            .catch(err => {
                console.log(err);
            })  

        }
    }

    

    const {food} = props
    // console.log('Food', food)
    const { calories , cholesterol_mg ,carbohydrates_total_g,fat_saturated_g, fat_total_g,fiber_g, name ,protein_g, potassium_mg, sodium_mg ,sugar_g } = food
    return(
        <Card style={{ width: '30%',   display:"inline-block" , textAlign:"center" ,  }}>
        <Card.Body>
        <Card.Title style={{ textTransform:"capitalize"}}> <h4> {name}</h4></Card.Title>
        < hr/>
        <Card.Text>
        <h6>calories: {calories}</h6>
            <h6>cholesterol_mg: {cholesterol_mg}</h6>
            <h6>carbohydrates_total_g: {carbohydrates_total_g}</h6>
            <h6>fat_saturated_g: {fat_saturated_g}</h6>
            <h6>fat_total_g: {fat_total_g}</h6>
            <h6>fiber_g: {fiber_g}</h6>
           
            <h6>protein_g: {protein_g}</h6>
            <h6>potassium_mg: {potassium_mg}</h6>
            <h6>sodium_mg: {sodium_mg}</h6>
            <h6>sugar_g: {sugar_g}</h6>
        </Card.Text>
        <Button variant="primary"  onClick={saveinput}>{buttonval}</Button>
       
        </Card.Body>
        </Card>
        
    )

}

export default FoodCard

// calories
// carbohydrates_total_g: 8.3
// cholesterol_mg: 0
// fat_saturated_g: 0.1
// fat_total_g: 0.2
// fiber_g: 0.9
// name: "melon"
// potassium_mg: 15
// protein_g: 0.8
// serving_size_g: 100
// sodium_mg: 16
// sugar_g: 7.8

// {/* <>
// <div className="card" style={{border: "solid rgb(82, 99, 105)", borderRadius:"10px", width:"20vw", alignItems:"center" , fontSize:"20px", direction:"none"}}>            
//     <h5>calories: {calories}</h5>
//     <h5>cholesterol_mg: {cholesterol_mg}</h5>
//     <h5>carbohydrates_total_g: {carbohydrates_total_g}</h5>
//     <h5>fat_saturated_g: {fat_saturated_g}</h5>
//     <h5>fat_total_g: {fat_total_g}</h5>
//     <h5>fiber_g: {fiber_g}</h5>
//     <h5>name: {name}</h5>
//     <h5>protein_g: {protein_g}</h5>
//     <h5>potassium_mg: {potassium_mg}</h5>
//     <h5>sodium_mg: {sodium_mg}</h5>
//     <h5>sugar_g: {sugar_g}</h5>
//     <button onClick={saveinput}>Save</button>
// </div>
// </> */}