export const SEARCH = 'SEARCH';
export const USERS = 'USERS';


export const handleSearch= (value) => {
    return{
      type:'SEARCH',
      payload: value
    }
  }
  
  export const getRobots = (arr) => {
    return{
      type:'USERS',
      payload: arr
    }
  }
  
