import logo from './logo.svg';
import './App.css';
import React from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import 'tachyons';

const App = () => {
  // constructor(){
  //   super();
  //   this.state = {
  //     robot:[],
  //     text:'',
  //     textToSerch:''
  //   }
  // }

  // componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => {
    //   this.setState({robot:data})
    // })
    // .catch(err => {
    //   console.log(err)
    // })

  // }


  // handleSearch = (event) => {
  //   // console.log(event.target.value);
  //   this.setState({text:event.target.value});
  // }

  // buttonSearch = (searchText) => {
  //   console.log('searchText',searchText);
  //   this.setState({textToSerch:searchText})
  // }

  //  getPosts = (user_id) => {
  //   console.log('get post',user_id);
  //   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({posts:data,page:'posts'})
  //   })
  //   .catch(err =>{
  //     console.log(err);
  //   })
  // }


  // render() {
  //   const {robot,textToSerch} = this.state;
  //   const filter = robot.filter( item => {
  //     return item.name.toLowerCase().includes(textToSerch.toLowerCase())
  //   })

    return (
      <>
       <SearchBox />
       <CardList/>
       </>
    );
      
 } 
    


export default App;


// <SearchBox handleSearch={this.handleSearch} buttonSearch={this.buttonSearch} />
//        <CardList users = {filter}/>