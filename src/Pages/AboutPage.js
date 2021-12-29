import React, { Component } from 'react';
import Navbar from '../Component/Navbar';
import { connect } from 'react-redux';


class AboutPage extends Component {
    render() {
        
        return (
            <div>
                <div className="container cardsStyle">
                    <div className="row">
                        <div className="col-sm-4 col-md-4">
                            <div className="card ">
                                <div className="card-body confirmCase ">
                                    <h5 className="card-title">Confirmed cases</h5>
                                    <h6 className="value">{this.props.getAllCovidData.confirmed?.value}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body deathcase">
                                    <h5 className="card-title">Confirmed deaths</h5>
                                    <h6 className="value">{this.props.getAllCovidData.deaths?.value}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body recoverdCase">
                                    <h5 className="card-title">Total recovered</h5>
                                    <h6 className="value">{this.props.getAllCovidData.recovered?.value}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getAllCovidData: state.Reducers && state.Reducers.data
    };
};

export default connect(mapStateToProps, null)(AboutPage);