var cfg = document.getElementById('chartBedCount');
var chart = new Chart(cfg, {
    type: 'bar',
    data: {
        labels: label,
        datasets: [{
            label: "Bed Count ",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#D49E66",
            borderColor: "#D49E66", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#D49E66",
            pointHoverBorderColor: "#D49E66",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: data_1,
            spanGaps: true,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var cg = document.getElementById('pieChart');
var chart = new Chart(cg, {
    type: 'pie',
    data: {
        labels: label,
        datasets: [{
            label: "Ranking ",
            fill: false,
            lineTension: 0.1,
            backgroundColor: ['#088E88', '#5F8E08', '#8E7508', '#A46E63', '#A81010', '#77B9E1', '#50810C', '#965874', '#94FF03', '#65E592', '#A8FEE0', '#208FD3', '#5020D3', '#4C5FBF', '#BF4C4C', '#965891', '#7F459A', '#120FC8', '#43BF70', '#13D784', '#13D725', '#3CC448', '#99C43C', '#3A5403', '#E4FF00', '#F9FFC6', '#64683C', '#051663', '#BAC5F7', '#3E8FC8', '#CC4A09', '#E6B39A', '#F28047', '#06B5D1', '#A382B0', '#A75F96'],
            borderColor: ['#088E88', '#5F8E08', '#8E7508', '#A46E63', '#A81010', '#77B9E1', '#50810C', '#965874', '#94FF03', '#65E592', '#A8FEE0', '#208FD3', '#5020D3', '#4C5FBF', '#BF4C4C', '#965891', '#7F459A', '#120FC8', '#43BF70', '#13D784', '#13D725', '#3CC448', '#99C43C', '#3A5403', '#E4FF00', '#F9FFC6', '#64683C', '#051663', '#BAC5F7', '#3E8FC8', '#CC4A09', '#E6B39A', '#F28047', '#06B5D1', '#A382B0', '#A75F96'], // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#088E88",
            pointHoverBorderColor: "#088E88",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: data_2,
            spanGaps: true,
        }]
    },
    options: {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            bar: {
                borderWidth: 2,
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
        }
    }
});

var cfg = document.getElementById('lineChart');
var chart = new Chart(cfg, {
    type: 'line',
    data: {
        labels: index,
        datasets: [{
            label: "MEDICAL_AND_SURGICAL_APPLIANCES",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#0C2566",
            borderColor: "#0C2566", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#0C2566",
            pointHoverBorderColor: "#0C2566",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: data_3,
            spanGaps: true,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var cfg = document.getElementById('lineChart2');
var chart = new Chart(cfg, {
    type: 'line',
    data: {
        labels: index,
        datasets: [{
            label: "DRUGS_PHARMACEUTICALS",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#C5EAEC",
            borderColor: "#C5EAEC", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#C5EAEC",
            pointHoverBorderColor: "#C5EAEC",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: data_4,
            spanGaps: true,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var cfg = document.getElementById('lineChart3');
var chart = new Chart(cfg, {
    type: 'line',
    data: {
        labels: index,
        datasets: [{
            label: "HOSPITAL_DIAGNOSTIC_CENTRES",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#14B900",
            borderColor: "#14B900", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#14B900",
            pointHoverBorderColor: "#14B900",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: data_5,
            spanGaps: true,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});