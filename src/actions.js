export const increase = () => ({type: 'INC'});
export const decrease = () => ({type: 'DEC'});
export const reset = () => {
    return {type: 'RESET', value: Math.floor(Math.random() * 10)};
};