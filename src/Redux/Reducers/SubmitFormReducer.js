import { FORM_SUBMIT_DATA } from '../Action/ActionType';

const initialSTate = {
    submitData: []
};

const SubmitFormReducer = (state = initialSTate, action) => {
    switch (action.type) {
      
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

export default SubmitFormReducer;