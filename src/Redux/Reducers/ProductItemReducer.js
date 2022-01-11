import { PRODUCT_CART } from './../Action/ActionType';

const initialSTate = {
    product: []
};

const ProductReducers = ( state= initialSTate, action ) => {
    switch (action.type) {
        case PRODUCT_CART:
            const newArr = [];
            newArr.push(action.data);
            return {
                product: newArr
            };
        default:
            return state;
    }


};

export default ProductReducers;