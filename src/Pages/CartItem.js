import React from 'react';
import { connect } from 'react-redux';

class CartItem extends React.Component {
    render() {
        console.log("daatatta", this.props.geProducttData);

        return (
            <div className='container'>
                {
                    this.props.geProducttData.length === 0 ?
                        <div className='no-item'>No cart item</div> :
                        this.props.geProducttData?.map((item, index) => {
                            return (
                                <div class="card" key={index}>
                                    <div class="card-body">
                                        <img class="card-img-top image-style" src={item.image} />
                                        <h5 class="card-title">{item.name}</h5>
                                        <p class="card-text">{item.price}</p>
                                    </div>
                                </div>
                            );
                        })
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        geProducttData: state.ProductReducers && state.ProductReducers.product
    };
};

export default connect(mapStateToProps, null)(CartItem);

