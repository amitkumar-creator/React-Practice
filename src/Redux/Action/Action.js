import { GET_COVID_DATA, FORM_SUBMIT_DATA } from './ActionType';

export const getCovidData = (data) => ({
    type: GET_COVID_DATA,
    data
}); 

export const formSubmitData = (data) =>({
    type:FORM_SUBMIT_DATA,
    data
})