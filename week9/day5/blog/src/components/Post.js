import React from "react"
import {connect} from 'react-redux'
import {deletePost} from '../redux/actions'


class Post extends React.Component{

    handleClick = () => {
        this.props.deletepost(this.props.post.id) 
        this.props.history.push('/')
    } 

    render() {
        const {post} = this.props

        return(
            <>
                {
                    post ? (
                        <div>
                            <h3 className='title'>{this.props.post.title}</h3>
                            <p className='text'>{this.post.body}</p>
                            <button name="delete" onClick={this.handleClick}>delete post</button>
                        </div>
                    ) :(
                        <h3>Loading</h3>
                    )
                    
                }
            </>
            
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    console.log(ownProps)
    return{
       post:state.post.find(post => post.id === id)
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return{
        delelePost: (id) => dispatch(deletePost(id))
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Post)