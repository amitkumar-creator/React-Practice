import React, { Component } from 'react';

import Chart from '../Component/Chart';
import { connect } from 'react-redux';
import { getCovidData } from '../Redux/Action/Action';


class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            countries: [],
            selectedCountry: ''
        };
    }

    componentDidMount() {
        this.getCovidData();
        this.getCountry();
    }

    getCovidData = () => {
        fetch("https://covid19.mathdro.id/api", {
            method: 'GET'
        }).then(resp => resp.json()).then(result => {
            this.props.getCovidData(result);
           
        });
    };

    getCountry = () => {
        fetch("https://covid19.mathdro.id/api/countries", {
            method: 'GET'
        }).then(resp => resp.json()).then(result => {
            this.setState({
                countries: result.countries
            });
        });
    };

    handleSelectCountry = (e) => {
        this.setState({
            selectedCountry: e.target.value
        });
    };


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

                <select onChange={this.handleSelectCountry}>
                    <option value="">Select Country</option>
                    {
                        this.state.countries.map((country, index) => {
                            return <option value={country.name} key={index}>{country.name}</option>;
                        })
                    }
                </select>

                <div>
                    <Chart totalData={this.props.getAllCovidData}
                        country={this.state.countries}
                        selectedCountry={this.state.selectedCountry} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        getCovidData: (data) => dispatch(getCovidData(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);