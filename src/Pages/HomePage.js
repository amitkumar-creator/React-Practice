import React, { Component } from 'react';

import Chart from '../Component/Chart';
import { connect } from 'react-redux';
import { getCovidData, formSubmitData, productCart } from '../Redux/Action/Action';
import ProductData from '../Data/productData.json';


class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            countries: [],
            selectedCountry: '',
            name: '',
            email: '',
            mobile: '',
            address: '',
            collegeName: ''

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

    handleInputData = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    handleSubmitForm = (event) => {
        event.preventDefault();
        const submitedData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            address: this.state.address,
            collegeName: this.state.collegeName
        };
        this.props.formSubmitData(submitedData);

    };
    handleAddToCart =(data)=>{
        this.props.productCart(data)
        alert("Added to cart")
    }


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

                {/* <select onChange={this.handleSelectCountry}>
                    <option value="">Select Country</option>
                    {
                        this.state.countries.map((country, index) => {
                            return <option value={country.name} key={index}>{country.name}</option>;
                        })
                    }
                </select> */}

                <div>
                    <Chart totalData={this.props.getAllCovidData}
                        country={this.state.countries}
                        selectedCountry={this.state.selectedCountry} />
                </div>
                <div className='container'>
                    <form>
                        <lable>Name</lable>
                        <input type="text" name='name' value={this.state.name} className="form-control" onChange={this.handleInputData} />
                        <lable>Email</lable>
                        <input type="email" name='email' value={this.state.email} className="form-control" onChange={this.handleInputData} />
                        <lable>Mobile</lable>
                        <input type="number" name='mobile' value={this.state.mobile} className="form-control" onChange={this.handleInputData} />
                        <lable>Address</lable>
                        <input type="text" name='address' value={this.state.address} className="form-control" onChange={this.handleInputData} />
                        <lable>College Name</lable>
                        <input type="text" name='collegeName' value={this.state.collegeName} className="form-control" onChange={this.handleInputData} />
                        <button className='btn-primary submit-btn' onClick={this.handleSubmitForm}>Submit</button>
                    </form>
                </div>
                <div className=' container product'>
                    <div className="row">
                        {
                            ProductData && ProductData.product?.map((data, index) => {
                                return (
                                    <div className="col-sm-4 col-md-4" key={index}>
                                        <div className="card">
                                            <div className="card-body">
                                                <img class="card-img-top" src={data.image} />
                                                <h5 className="card-title">{data.name}</h5>
                                                <h6 className="value">{data.price}</h6>
                                                <button onClick={()=>this.handleAddToCart(data)}>Add to card</button>
                                            </div>
                                        </div>
                                    </div>

                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getAllCovidData: state.Reducers && state.Reducers.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCovidData: (data) => dispatch(getCovidData(data)),
        formSubmitData: (submitedData) => dispatch(formSubmitData(submitedData)),
        productCart:(data)=>dispatch(productCart(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);