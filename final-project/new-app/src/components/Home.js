import React from "react"
import SearchBox from "./SearchBox";
import FoodList from "./FoodList"
// import { Link } from "react-router-dom"; 
import {Button, Container} from "react-bootstrap";


class Home extends React.Component {
  constructor(){
    super();
    this.state={
      serText:'',
      food:[]
      
    }
  }

  handelSearch = (e) => {
    // console.log(e.target.value)
    const {serText} = this.state;
    this.setState({serText: e.target.value})
  }

  handelClick = () => { 
    // this.setState({serText: this.state})
    fetch(`https://api.calorieninjas.com/v1/nutrition?query=${this.state.serText}`,{
      headers: { 'X-Api-Key': 'gEZ2sYpTrWZh23Ee+jDD9Q==nFtsS04F7n1tvYfZ'},
      contentType: 'application/json'
    })   
    .then(res => res.json())
    .then(data => {
        console.log(data.items);
        this.setState({food:data.items})
        // this.setState({food:[this.state.food,data.items]})
    })
    .catch(err => {
        console.log(err);
    })
    // console.log(this.state.food)      
} 

  render(){
    const{food,serText}=this.state;
    // console.log('bbb ' , this.state.food)
    return(
   
      <div className="main">  
         <div className="header">
          <h1>hello, now you'll live more beter!</h1>
          <p>in this page you will find info about food that make your life more energy, activity and healthy.</p>
         </div>
         
      
      <SearchBox  onInputChange={this.handelSearch}/>
      {/* <button onClick={this.handelClick}>Search</button> */}
      <Button variant="primary"  onClick={this.handelClick}>Search</Button>
      <FoodList food={food}/> 
     
      
      
     </div>
   
    
    )

  }

}

export default Home;




{/* 
  // {/* <div className="header">
  //         <h1>Home</h1>
  //         <h1>hello, now you'll live beter!</h1>
  //         <p>in this page you find many info about food that make your life anrgi more activite and healty</p>
  //         <button type="text" > start here</button>
  //     </div> */}

  /* /* <img src="./river.jpg" alt="river" className="image"></img>  * */ 

   // favorite:props.food.favorite