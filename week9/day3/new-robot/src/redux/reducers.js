import {SEARCH, USERS } from "./actions"

const initState = {
    robot:[],
      text:'',
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
      case SEARCH:
        return {...state, text:action.payload}
      case USERS:
        return {...state, robot:action.payload}
      default:
        return { ...state}
    }
  }