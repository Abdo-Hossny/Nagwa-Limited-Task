$(document).ready(function() {
    $("#solved-homework").circliful({
        animation: 1,
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 10,
        percent: 81,
        textSize: 25,
        textStyle: 'font-size: 20px;',
        textColor: '#666',
        multiPercentage: 1

    });
    $("#attended-days").circliful({
        animation: 1,
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 10,
        percent: 50,
        textSize: 25,
        textStyle: 'font-size: 20px;',
        textColor: '#666',
        multiPercentage: 1,


    });
    $("#online-sessions").circliful({
        animation: 1,
        foregroundBorderWidth: 10,
        backgroundBorderWidth: 10,
        percent: 93,
        textSize: 25,
        textStyle: 'font-size: 20px;',
        textColor: '#666',
        multiPercentage: 1

    });

});

/******* Start Homework*/

// var barChartData = {
//     labels: [
//         "19/5",
//         "18/4",
//         "17/6",
//         "20/7",
//         "22/7",
//         "30/8",
//         "30/8",
//         "30/8",
//         "30/8",
//         "30/8",
//         "30/8",
//         "30/8",
//         "30/8",
//         "30/8",
//         "30/8",
//         "30/8",
//         "30/8"
//     ],
//     datasets: [{
//             label: "Adam",
//             backgroundColor: "#E5F0F7",
//             borderColor: "#0575B6",
//             borderWidth: 1,
//             cornerRadius: "35",

//             data: [60, 63, 57, 59, 56, 46, 56, 50, 65, 55, 45, 60, 49, 57, 62, 30, 50, 40]
//         },
//         {
//             label: "Average",
//             backgroundColor: "#E5E5E5",
//             borderColor: "#333333",
//             borderWidth: 1,
//             cornerRadius: "35",

//             data: [57, 65, 60, 62, 58, 51, 55, 45, 60, 57, 49, 58, 52, 54, 55, 50, 60, 50]
//         }
//     ]
// };

// var chartOptions = {
//     responsive: true,
//     legend: {
//         position: 'left',

//     },
//     scales: {
//         yAxes: [{
//             ticks: {
//                 min: 0,
//                 //max: 100,
//                 callback: function(value) {
//                     return value + "%"
//                 }
//             },
//             scaleLabel: {
//                 display: true
//                     //labelString: "Percentage"
//             }
//         }]

//     }
// }

// window.onload = function() {
//     var ctx = document.getElementById("canvas").getContext("2d");
//     window.myBar = new Chart(ctx, {
//         type: "bar",
//         data: barChartData,
//         options: chartOptions,
//     });
// };

const ctx = document.getElementById('canvas');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            "19/5",
            "18/4",
            "17/6",
            "20/7",
            "22/7",
            "30/8",
            "30/8",
            "30/8",
            "30/8",
            "30/8",
            "30/8",
            "30/8",
            "30/8",
            "30/8",
            "30/8",
            "30/8",
            "30/8"
        ],
        datasets: [{
                label: "Adam",
                backgroundColor: "#E5F0F7",
                borderColor: "#0575B6",
                borderWidth: 1,

                data: [60, 63, 57, 59, 56, 46, 56, 50, 65, 55, 45, 60, 49, 57, 62, 30, 50, 40]
            },
            {
                label: "Average",
                backgroundColor: "#E5E5E5",
                borderColor: "#333333",
                borderWidth: 1,

                data: [57, 65, 60, 62, 58, 51, 55, 45, 60, 57, 49, 58, 52, 54, 55, 50, 60, 50]
            }
        ]
    },
    options: {
        responsive: true,
        borderRadius: 12,

        plugins: {

            legend: {
                position: "top",
                align: "start",

                labels: {
                    boxHeight: 15,
                    boxWidth: 5,
                    borderCapStyle: "round"

                }

            }
        },
        scales: {

            x: {
                grid: {
                    lineWidth: 0,

                }
            },
            y: {

                grid: {
                    borderDash: [8, 8],
                    borderWidth: 0,
                    borderColor: "#D7D7D7"


                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        value = value + 5;
                        return '%' + value;
                    }
                }
            }
        }
    }
});

/****** End Homework*/

/************ Start Attendence */
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        themeSystem: 'standard',
        height: 350,
        headerToolbar: { // will produce something like "Tuesday, September 18, 2018"
            start: '', // will normally be on the left. if RTL, will be on the right
            center: '',
            end: 'prev,title,next' // will normally be on the right. if RTL, will be on the left
        },
        initialDate: '2022-03-01',
        editable: true,
        selectable: true,
        showNonCurrentDates: false,
        dayMaxEvents: true, // allow "more" link when too many events
        eventSources: [

            // your event source
            {
                events: [

                    {
                        groupId: 999,
                        title: 'Leave',
                        start: '2022-03-13',



                    },
                    {
                        groupId: 999,
                        title: 'Leave',
                        start: '2022-03-20',
                    },
                    {
                        groupId: 999,
                        title: 'Leave',
                        start: '2022-03-22',
                    },

                    {
                        groupId: 999,
                        title: 'Leave',
                        start: '2022-03-27',
                    }


                ],
                overlap: true,

                display: "background",
                backgroundColor: '#FDE8E8', // an option!

            }

            // any other event sources...

        ]

    });

    calendar.render();
});



/************ End Attendence*/