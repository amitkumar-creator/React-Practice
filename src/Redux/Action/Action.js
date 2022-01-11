import { GET_COVID_DATA, FORM_SUBMIT_DATA, PRODUCT_CART } from './ActionType';

export const getCovidData = (data) => ({
    type: GET_COVID_DATA,
    data
}); 

export const formSubmitData = (data) =>({
    type:FORM_SUBMIT_DATA,
    data
})

export const productCart = (data)=>({
    type:PRODUCT_CART,
    data
})