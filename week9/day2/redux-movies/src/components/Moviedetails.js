import {connect} from 'react-redux';

const Moviedetails = (props) => {
    return(
        <div>
            <p>title:{props.movie.title}</p>
            <p>Relaase Data: {props.movie.RelaaseData}</p>
            <p>Rating: {props.movie.rating}</p>
        </div>
    )
}


const mapStateToProps =(state) => {
    return {
        Moviedetails:state.movie
    }
  }
  
  export default connect(mapStateToProps)(Moviedetails);
  



