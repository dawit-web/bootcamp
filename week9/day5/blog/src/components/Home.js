import React from "react"
// import './/blog.png' ;
import { Link } from "react-router-dom"; 
import {connect} from 'react-redux';



class Home extends React.Component {
  render(){
    const {posts} = this.props;
    return(
      <div>
       <h4 className='title'>Home</h4>
         <div className='posts'>
           {
             posts.length > 0 ? (
               posts.map((post) =>{
                 return(
                   <div key={post.id} className='cards'>

                    {/* <div className='image'>
                     <img src='blog.png' alt='blog'/>
                     </div> */}

                     <div className='text'>
                       <Link to={`/${post.id}`}>
                         <h4>{post.title}</h4>
                       </Link>
                       <p>{post.body}</p>
                     </div>

                   </div>
                 )
               }
             )) : (
               <p className='no-posts'>No posts to show</p>
             )
           }
         </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);