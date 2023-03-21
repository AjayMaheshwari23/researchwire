
// Chart.defaults.color = '#00' ;
const data = {
    labels: [
      'Hybrid With Flexibility',
      'Work From Office',
      'Remote Work'
    ],
    datasets: [{
      label: 'Count = ',
      data: [83, 13, 4],
      backgroundColor: [
        'rgb(36, 60, 154)',
        'rgb(203, 192, 62)',
        'rgb(234, 64, 61)'
        
      ],
      hoverOffset: 4
    }]
  };

let surveyChart = new Chart("surveyChart", {

  type: 'polarArea',
  data: data,

  options: {
    plugins: {
        legend: {
            display: true,
            labels: {
                color: 'rgb(0,0,0)'
            }
        }
    }
}
})



const data2 = {
    labels: [
      'No interference in the two',
      'Equal time for work and home',
      'Being happy at work and home',
      'Prioritizing family over work'
    ],
    datasets: [{
      label: 'Count = ',
      data: [18, 25, 54,2],
      backgroundColor: [
        'rgb(163, 33, 142)',
        'rgb(78, 173, 173)',
        'rgb(115, 191, 67)',
        'rgb(242, 166, 59)'

      ],
      hoverOffset: 4
    }]
  };

let surveyChart2 = new Chart("surveyChart2", {

  type: 'polarArea',
  data: data2,
  options: {
    plugins: {
        legend: {
            display: true,
            labels: {
                color: 'rgb(0,0,0)'
            }
        }
    }
}
})