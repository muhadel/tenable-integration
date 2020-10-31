const revenueOptions = {
  maintainAspectRatio: true,
  tooltips: {
    // backgroundColor:"#00ff00"
    callbacks: {
      label: function(tooltipItem, data) {
        var dataset = data.datasets[tooltipItem.datasetIndex];
        // var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
        //     return previousValue + currentValue;
        // });
        const dateItem = dataset.data[tooltipItem.index];
        if (dateItem > 1000) {
          var currentValue = dateItem / 1000;
          currentValue = Math.round(currentValue * 100) / 100;

          return currentValue + "k";
        } else {
          return dateItem;
        }
      }
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          callback: function(label, index, labels) {
            return label / 1000 + "k";
          },
          display: true,
          beginAtZero: true
        },
        gridLines: {
          display: true,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
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
};
const salesCountOptions = {
  layout: {
    padding: 0
  },

  scales: {
    yAxes: [
      {
        ticks: {
          display: true,
          beginAtZero: true
        },
        gridLines: {
          display: true,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
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
};

const grossProfitOptions = {
  maintainAspectRatio: true,
  layout: {
    padding: 0
  },

  scales: {
    yAxes: [
      {
        ticks: {
          display: true,
          beginAtZero: true
        },
        gridLines: {
          display: true,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
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
};

const soldProductOptions = {
  maintainAspectRatio: true,
  tooltips: {
    // backgroundColor:"#00ff00"
    callbacks: {
      label: function(tooltipItem, data) {
        var dataset = data.datasets[tooltipItem.datasetIndex];
        // var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
        //     return previousValue + currentValue;
        // });
        // var currentValue = dataset.data[tooltipItem.index] / 1000;
        // currentValue = Math.round(currentValue * 100) / 100;

        // return currentValue + "k";

        const dateItem = dataset.data[tooltipItem.index];
        if (dateItem > 1000) {
          var currentValue = dateItem / 1000;
          currentValue = Math.round(currentValue * 100) / 100;

          return currentValue + "k";
        } else {
          return dateItem;
        }
      }
    }
  },

  scales: {
    yAxes: [
      {
        ticks: {
          callback: function(label, index, labels) {
            return label / 1000 + "k";
          },
          display: true,
          beginAtZero: true
        },
        gridLines: {
          display: true,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
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
};

export {
  revenueOptions,
  salesCountOptions,
  grossProfitOptions,
  soldProductOptions
};
