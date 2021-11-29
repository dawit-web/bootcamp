import {connect} from 'react-redux'
const Moivelist = (props) => {
  return (
    <div>
     <h2>Movie List</h2>
     {props.moviesArr.map((movie, i) => {
       {movie.title}
       <button id={i} onClick={props.show}></button>
     })}
    </div>
  );
}


const mapStateToProps =(state) => {
  return {
      Moivelist:state.moviesArr
  }
}

export default connect(mapStateToProps)(Moivelist);
