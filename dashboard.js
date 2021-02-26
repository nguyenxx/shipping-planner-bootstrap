/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Meredith',
        'Derek',
        'Alex',
        'George',
        'Jackson',
        'Izzie',
        'Lexie',
        'Callie',
        'Jo',
        'Owen',
        'Deluca',
        'Amelia',
        'Miranda',
        'Teddy',
        'Richard',
        'Maggie',
        'Denny',
        'Ben',
      ],
      datasets: [{
        data: [
          1,
          6,
          4,
          2,
          8,
          12,
          3,
          1,
          4,
          5,
          7,
          3,
          1,
          12,
          17,
          5,
          7,
          9
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#e9af00',
        borderWidth: 4,
        pointBackgroundColor: '#e9af00'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
