import React, { Component } from "react";
import { Line } from "react-chartjs-2";
//importing options
import {
  revenueOptions,
  grossProfitOptions,
  salesCountOptions,
  soldProductOptions
} from "./options/lineChartOptions";
export default class extends Component {
  constructor(props) {
    super(props);
    let options;
    switch (this.props.label) {
      case "Revenue":
        options = revenueOptions;
        break;
      case "Gross Profit":
        options = grossProfitOptions;
        break;
      case "Sales Count":
        options = salesCountOptions;
        break;
      case "Sold Product":
        options = soldProductOptions;
        break;

      default:
        break;
    }

    this.state = {
      time: this.props.time,
      chartData: {
        labels: this.props.labels || [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        datasets: [
          {
            label: this.props.label,
            borderColor: "#00b9ff",
            // pointBorderColor: "#00b9ff",
            pointBackgroundColor: "#00b9ff",
            pointHoverBackgroundColor: "#00b9ff",
            pointHoverBorderColor: "#00b9ff",
            pointRadius: 2,
            fill: false,
            data: this.props.data,
            borderWidth: 0
          }
        ]
      },
      options
    };
  }
  componentWillReceiveProps(nextProps) {
    let options;
    switch (nextProps.label) {
      case "Revenue":
        options = revenueOptions;
        break;
      case "Gross Profit":
        options = grossProfitOptions;
        break;
      case "Sales Count":
        options = salesCountOptions;
        break;
      case "Sold Product":
        options = soldProductOptions;
        break;

      default:
        break;
    }
    if (this.state.time === nextProps.time) {
    } else {
      const chartData = {
        labels: nextProps.labels || [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        datasets: [
          {
            label: nextProps.labels,
            borderColor: "#00b9ff",
            // pointBorderColor: "#00b9ff",
            pointBackgroundColor: "#00b9ff",
            pointHoverBackgroundColor: "#00b9ff",
            pointHoverBorderColor: "#00b9ff",
            pointRadius: 2,
            fill: false,
            data: nextProps.data,
            borderWidth: 0
          }
        ]
      };
      this.setState({ chartData, options, time: nextProps.time });
    }
  }

  render() {
    return (
      <div className="chart">
        <Line
          // key={Math.random()}
          // redraw={true}
          data={this.state.chartData}
          width={this.props.width ? this.props.width : 315}
          height={this.props.height}
          options={this.props.options ? this.state.options : null}
        />
      </div>
    );
  }
}
