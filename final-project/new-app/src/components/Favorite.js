import {useState ,useEffect } from 'react';
import FoodCard from './FoodCard';
import { useNavigate } from "react-router-dom"; 


const Favorite = () => {
    const [favor,setFavor] = useState ([])
    const [value,setValue] = useState();
    // const Navigate = useNavigate()

    const user_id = JSON.parse(localStorage.getItem('user'));
    console.log( 'hi i  id', user_id)
    console.log('favor user',{...setFavor.food,user_id:user_id[0].user_id})

    useEffect(()=>{ 
        fetch(`http://localhost:5000/userfavor/${user_id[0].user_id}`)
        .then(res => res.json())
        .then(data => {
            setFavor(data)
            console.log('this dtata', data)

        })
        .catch(err => {
            console.log(err);
        })  

    },[])

    const deleteFood = (id) => {
        // console.log('mose', props)
        const user = JSON.parse(localStorage.getItem('user'));
        // console.log( 'hi', user)
        console.log('foodcard',user[0].user_id)
        console.log('what i get in food card', )
        fetch(`http://localhost:5000/userfavor/${id}`,{
            method:'DELETE',
            headers: {
                "Content-type": "application/json",
              },
              body:JSON.stringify({user_id:user[0].user_id , favorite:id})
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                // Navigate('/Favorite')
                refresh()
               
             })
            .catch(err => {
                console.log(err);
            })  

    }

                const refresh = ()=>{
                    // it re-renders the component
                    window.location.reload(false);
                }
            
    
    
    // console.log(favor)
   
        return(
          <div>
            
            <h2 className=" text-center mb-3 fs-3 fw-normal">my favorite</h2>
             {
               favor.map((item,i) => {
                    return<FoodCard food={item} key={i} delete={true} deleteFood={deleteFood} 

                  
                    />
                })
             }    
          </div>

        )
}

export default  Favorite 

// favorite:props.food.favorite