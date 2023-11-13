
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class CryptoChart extends Component {
    state = {
        chartData: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [
                {
                    label: 'Crypto Value',
                    data: [65, 59, 80, 81, 56],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },
            ],
        }
    };

    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Crypto Value Over Time',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}

export default CryptoChart;
