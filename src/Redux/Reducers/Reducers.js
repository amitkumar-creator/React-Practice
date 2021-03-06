import { GET_COVID_DATA, FORM_SUBMIT_DATA } from '../Action/ActionType';

const initialSTate = {
    data: {},
    submitData: []
};

const Reducers = (state = initialSTate, action) => {
    switch (action.type) {
        case GET_COVID_DATA:
            return {
                data: action.data
            };
        case FORM_SUBMIT_DATA:
            const newData = [];
            newData.push(action.data);
            return {
                submitData: newData
            };


        default:
            return state;
    }
};

export default Reducers;