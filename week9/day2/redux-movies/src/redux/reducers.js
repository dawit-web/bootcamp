const initState = {
    moviesArr:''
}

export const reducer = (state = initState , action={}) => {
    console.log(action);
    switch(action.type) {
        case 'SHOW':
         return {...state}
     
         default:
            return {...state}
    }
}