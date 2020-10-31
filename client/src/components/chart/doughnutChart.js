import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: this.props.labels,

      datasets: [
        {
          data: this.props.data,
          backgroundColor: [
            "#003f5c",
            "#58508d",
            "#bc5090",
            "#ff6361",
            "#ffa600"
          ]
          // hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };
    // this.state = {

    //   chartData: {
    //     labels: ["1", "2", "3"],
    //     // this.props.labels,
    //     datasets: [
    //       {
    //         // label: "Revenue",
    //         backgroundColor: [
    //           "#003f5c",
    //           "#58508d",
    //           "#bc5090",
    //           "#ff6361",
    //           "#ffa600"
    //         ],
    //         // // borderColor: "#00b9ff",

    //         data: [100, 200, 200]
    //         //  this.props.data
    //       }
    //     ]
    //   }
    // };
  }
  render() {
    return (
      <div className="chart">
        <Doughnut
          // data={this.state.chartData}
          data={this.state}
          width={315}
          height={210}
          options={{
            maintainAspectRatio: true,
            tooltips: {
              // backgroundColor:"#00ff00"
              callbacks: {
                label: function(tooltipItem, data) {
                  var dataset = data.datasets[tooltipItem.datasetIndex];
                  var total = dataset.data.reduce(function(
                    previousValue,
                    currentValue,
                    currentIndex,
                    array
                  ) {
                    return previousValue + currentValue;
                  });
                  var currentValue = dataset.data[tooltipItem.index];
                  // return currentValue
                  var precentage = Math.floor(
                    (currentValue / total) * 100 + 0.5
                  );
                  return precentage + "%";
                }
              }
            }

            // scales: {
            //   yAxes: [
            //     {
            //       ticks: {
            //         display: false,
            //         beginAtZero: true
            //       },
            //       gridLines: {
            //         display: false,
            //         drawBorder: false
            //       }
            //     }
            //   ],
            //   xAxes: [
            //     {
            //       ticks: {
            //         display: false,
            //         fontSize: 10
            //         // fontFamily:"arial"
            //       },
            //       gridLines: {
            //         display: false,
            //         drawBorder: false
            //       }
            //     }
            //   ]
            // },
            // legend: {
            //   display: false
            // }
          }}
        />
      </div>
    );
  }
}
