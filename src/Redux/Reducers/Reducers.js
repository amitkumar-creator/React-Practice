import { GET_COVID_DATA } from '../Action/ActionType';

const initialSTate = {
    data: {}
};

const Reducers = (state = initialSTate, action) => {
    switch (action.type) {
        case GET_COVID_DATA:
            return {
                data: action.data
            };


        default:
            return state;
    }
};

export default Reducers;