import React, { Component } from 'react';


class ContactPage extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            userName: "",
            email: "",
            mobile: "",
            submitedData: [],
            isEdit: false,
            searchContent: '',
            isSearch: false,
            SerahcableData: []

        };
    }

    handleInput = (event) => {
        const value = event.target.value;

        this.setState({
            [event.target.name]: value
        });

    };

    handleSubmitForm = (event) => {
        event.preventDefault();
        const newData = this.state.submitedData;
        newData.push({
            id: this.state.id + 1,
            userName: this.state.userName,
            email: this.state.email,
            mobile: this.state.mobile
        });
        this.setState({
            submitedData: newData
        }, () => {
            this.setState({
                id: 0,
                userName: "",
                email: "",
                mobile: "",
            });
        });
    };

    handleDeleteRow = (data, index) => {
        const newState = this.state.submitedData;
        const deletedData = newState.filter((data, filterIndex) => filterIndex !== index);
        this.setState({
            submitedData: deletedData
        });
    };

    handleEditData = (data, index) => {
        this.setState({
            userName: data.userName,
            email: data.email,
            mobile: data.mobile,
            isEdit: true
        });
    };

    handleUpdateForm = (event) => {
        event.preventDefault();
        const newStatteDAta = [...this.state.submitedData];

        newStatteDAta.push({
            userName: this.state.userName,
            email: this.state.email,
            mobile: this.state.mobile
        });
        this.setState({
            submitedData: newStatteDAta
        }, () => {
            this.setState({
                userName: "",
                email: "",
                mobile: "",
            });
        });
    };

    handleSearchData = (event) => {
        const value = event.target.value;
        event.preventDefault();
        this.setState({
            searchContent: value,
            isSearch: true
        }, () => {
            const orignalState = [...this.state.submitedData];
            const newData = orignalState.filter((data, index) => data.userName.toLowerCase().match(value.toLowerCase()) ||
                data.email.toLowerCase().match(value.toLowerCase()) ||
                data.mobile.toLowerCase().match(value.toLowerCase()));

            if (this.state.searchContent.length !== 0) {
                this.setState({
                    SerahcableData: newData,
                    isSearch: true,
                });
            } else {
                this.setState({
                    isSearch: false,
                    submitedData: this.state.submitedData
                });
            }

        });

    };

    render() {

        return (
            <div className='container '>
                <form className='formStyle'>
                    <label>Name</label>
                    <input type="text"
                        name="userName"
                        value={this.state.userName}
                        maxLength={20}
                        className='form-control'
                        onChange={this.handleInput} />
                    <br />
                    <label>Email</label>
                    <input type="email"
                        name="email"
                        value={this.state.email}
                        className='form-control'
                        onChange={this.handleInput} />
                    <br />
                    <label>Mobile</label>
                    <input type="number"
                        name="mobile"
                        value={this.state.mobile}
                        maxLength={11}
                        className='form-control'
                        onChange={this.handleInput} />
                    <br />
                    {
                        this.state.isEdit ?
                            <button className='btn-success submit-btn' onClick={this.handleUpdateForm}>Update</button>
                            :
                            <button className='btn-primary submit-btn' onClick={this.handleSubmitForm}>Submit</button>
                    }

                </form>

                <div>
                    <input
                        type='text'
                        name='searchContent'
                        placeholder='Search'
                        onChange={this.handleSearchData}
                        value={this.state.searchContent}
                    />
                    <table className='table table-style'>
                        <thead>
                            <tr>
                                <th>S/No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.isSearch ? this.state.SerahcableData.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{data.userName}</td>
                                            <td>{data.email}</td>
                                            <td>{data.mobile}</td>
                                            <td>
                                                <button className='btn-primary'
                                                    onClick={() => this.handleEditData(data, index)} >Edit</button>
                                                <button className='btn-danger deleteBtn'
                                                    onClick={() => this.handleDeleteRow(data, index)} >Delete</button>
                                            </td>
                                        </tr>
                                    );
                                }) : this.state.submitedData.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{data.userName}</td>
                                            <td>{data.email}</td>
                                            <td>{data.mobile}</td>
                                            <td>
                                                <button className='btn-primary'
                                                    onClick={() => this.handleEditData(data, index)} >Edit</button>
                                                <button className='btn-danger deleteBtn'
                                                    onClick={() => this.handleDeleteRow(data, index)} >Delete</button>
                                            </td>
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

export default ContactPage;