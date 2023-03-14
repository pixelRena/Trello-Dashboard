// Settings used for chart components
const barChartBackgroundColors = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(255, 159, 64, 0.5)',
    'rgba(255, 205, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(201, 203, 207, 0.5)'
];

const barChartBorderColors = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
];

const lineChartBackgroundColor = "rgba(75, 192, 192, 0.2)";

const weekLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const options = {
    scales: {
        y: 
        {
            ticks: {
            precision: 0,
            beginAtZero: true,
            color: "#fff"
            },
            grid: { 
            display: false,
            borderColor: "#fff"
            }
        },
        x:
        {
            ticks: {
            color: "#fff"
            },
            grid: { 
            display: false, 
            borderColor: "#fff" 
            }
        },
    },
    plugins: {
        legend: {
            labels: {
                color: "#fff"
            }
        }
    }
}

module.exports = {
    barChartBackgroundColors,
    barChartBorderColors,
    lineChartBackgroundColor,
    weekLabels,
    options
}