import React, { Component } from 'react';
import Navbar from '../Component/Navbar';
import { connect } from 'react-redux';


class AboutPage extends Component {
    render() {
        const covidData = this.props.getAllCovidData && this.props.getAllCovidData;
        return (
            <div>
                <div className="container cardsStyle">
                    <div className="row">
                        <div className="col-sm-4 col-md-4">
                            <div className="card ">
                                <div className="card-body confirmCase ">
                                    <h5 className="card-title">Confirmed cases</h5>
                                    <h6 className="value">{covidData && covidData.confirmed?.value}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body deathcase">
                                    <h5 className="card-title">Confirmed deaths</h5>
                                    <h6 className="value">{covidData && covidData.deaths?.value}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body recoverdCase">
                                    <h5 className="card-title">Total recovered</h5>
                                    <h6 className="value">{covidData && covidData.recovered?.value}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>

                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>College</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.getSubmiteedData && this.props.getSubmiteedData?.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.mobile}</td>
                                            <td>{data.address}</td>
                                            <td>{data.collegeName}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getAllCovidData: state.Reducers && state.Reducers.data,
        getSubmiteedData: state.SubmitFormReducer && state.SubmitFormReducer.submitData,
    };
};

export default connect(mapStateToProps, null)(AboutPage);