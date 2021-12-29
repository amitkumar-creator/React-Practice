import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';



class Chart extends Component {

    constructor() {
        super();
        this.state = {
            dailyData: []
        };
    }

    componentDidMount() {
        this.dailyData();
    }

    dailyData = () => {
        fetch("https://covid19.mathdro.id/api/daily", {
            method: "GET"
        }).then(resp => resp.json())
            .then(result => this.setState({ dailyData: result }));
    };

    barChart = () => {
        return this.props.totalData.confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [this.props.totalData.confirmed.value, this.props.totalData.recovered.value, this.props.totalData.deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${this.props.selectedCountry}` },
                }}
            />
        ) : null;
    };

    lineChart = ()=>{
        return this.state.dailyData[0] ? (
            <Line
              data={{
                labels:  this.state.dailyData.map(({ date }) => date.reportDate),
                datasets: [{
                  data:  this.state.dailyData.map((data) => data.confirmed),
                  label: 'Infected',
                  borderColor: '#3333ff',
                  fill: true,
                }, {
                  data:  this.state.dailyData.map((data) => data.deaths),
                  label: 'Deaths',
                  borderColor: 'red',
                  backgroundColor: 'rgba(255, 0, 0, 0.5)',
                  fill: true,
                },
                ],
              }}
            />
          ) : null
    }


    render() {


        const dalydata = this.state.dailyData && this.state.dailyData;
        const country = this.props.country;

        return (
            <div className='container chart-style'>
                {
                   this.props.selectedCountry ? this.barChart : this.lineChart
                }


            </div>
        );
    }
}

export default Chart;