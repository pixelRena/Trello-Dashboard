export const options = {
    title: {
      text: ""
    },
    backgroundColor: "transparent",
    axisX: {
        labelFontColor: "#fff",
        lineColor: "#fff",
    },
    axisY: {
        labelFontColor: "#fff",
        lineColor: "#fff",
        gridColor: "#fff",
        maximum: 5,
    },
    data: [{				
              type: "column",
              dataPoints: [
                  { label: "Sun",  y: 2  },
                  { label: "Mon", y: 1  },
                  { label: "Tues", y: 2  },
                  { label: "Weds",  y: 5  },
                  { label: "Thurs",  y: 2  },
                  { label: "Fri",  y: 0  },
                  { label: "Sat",  y: 1  }
              ]
     }]
}