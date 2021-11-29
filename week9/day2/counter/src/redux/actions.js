// export const MINUS = 'MINUS';
// export const PLUS = 'PLUS';

export const plusOne = () => {
    return{
        type:'PLUS'
        // payload: value
    }
}

export const minusOne = (value) => {
    return{
        type:'MINUS',
        payload: value
    }
}