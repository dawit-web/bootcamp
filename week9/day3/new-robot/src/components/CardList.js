import React from "react";
import Card from "./Card";

import { connect } from "react-redux";
import {getRobots} from '../redux/actions'


class CardList extends React.Component {
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          this.props.getRobots(data)
        })
        .catch(err => {
          console.log(err)
        })
    
      }
    
    render(){
      const {users, text} = this.props
      const filter = users.filter( item => {
        return item.name.toLowerCase().includes(text.toLowerCase())
      })
      return (
        <>
          {
              filter.map( (item,i) => {
                return <Card user={item} key={i} />
              })
          }
        </>
      )
    }
  }


  const mapStateToProps = (state) => {
    return{
      text: state.text,
      users: state.robot
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      // setRobots: (arr) => dispatch(setRobots(arr))
      getRobots: (data) => dispatch(getRobots(data))
    }
  }
  
  export default connect (mapStateToProps,mapDispatchToProps)(CardList);
  
//   export default CardList