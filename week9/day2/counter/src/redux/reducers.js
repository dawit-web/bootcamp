// import {MINUS,PLUS } from "./actions";

const initState ={
    counter: 0
}

export const reducer = (state = initState, action ={}) => {
    console.log(action);
    switch(action.type) {
        case 'PLUS':
         return {...state, counter:state.counter +1}
        case 'MINUS':
         return {...state, counter:state.counter -1}
        
         default:
            return {...state}
    }
}

// export const reducer_plus = (state=initState, action={}) => {
//     switch (action.type) {
//         case PLUS:
//           return {...state, counter:state.counter+1}
//         default:
//             return {...state}
//     }

// }


// export const reducer_minus = (state=initState, action={}) => {
//     switch (action.type) {
//         case MINUS:
//           return {...state, counter:state.counter+1}
//         default:
//             return {...state}
//     }

// }