import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: this.props.labels,

        datasets: [
          {
            label: "Revenue",
            backgroundColor: [
              "#003f5c",
              "#58508d",
              "#bc5090",
              "#ff6361",
              "#ffa600"
            ],
            // borderColor: "#00b9ff",

            data: this.props.data
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="chart">
        <HorizontalBar
          data={this.state.chartData}
          width={315}
          height={210}
          options={{
            maintainAspectRatio: true,
            layout: {
              padding: 0
            },
            tooltips: {
              // backgroundColor:"#00ff00"
              callbacks: {
                label: function(tooltipItem, data) {
                  var dataset = data.datasets[tooltipItem.datasetIndex];
                  // var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                  //     return previousValue + currentValue;
                  // });
                  const dataItem = dataset.data[tooltipItem.index];
                  if (dataItem > 1000) {
                    var currentValue = dataItem / 1000;
                    currentValue = Math.round(currentValue * 100) / 100;
                    return currentValue + "k";
                  } else {
                    return dataItem;
                  }
                }
              }
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    display: true,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false
                  }
                }
              ],
              xAxes: [
                {
                  ticks: {
                    callback: function(label, index, labels) {
                      return label / 1000 + "k";
                    },
                    display: true,
                    fontSize: 10
                    // fontFamily:"arial"
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false
                  }
                }
              ]
            },
            legend: {
              display: false
            }
          }}
        />
      </div>
    );
  }
}
