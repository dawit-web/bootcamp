import { connect } from "react-redux";
import { handleSearch } from "../redux/actions";
const SearchBox = (props) => {
    // const { search } = props;
    // console.log('search',search);
    return(
      <div className="tc">
        <input type="search"
          placeholder="Search My Robots..."
          className = "pa3 ba b--green bg-lightest-blue"
          onChange = {props.handleSearch} />
      </div>
    )
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      handleSearch: (e) => dispatch(handleSearch(e.target.value))
    }
  }

  export default connect (null,mapDispatchToProps)(SearchBox);
//   export default SearchBox;