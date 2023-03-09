google.charts.load('current', {
    packages: ['corechart']
  }).then(function () {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Name');
    data.addColumn('number', 'Blue Value');
    data.addColumn('number', 'Red Value');
    data.addColumn('number', 'Orange Value');
    data.addRows([
      [{v: 1, f: 'A1'}, 2000, 3500, 4500],
      [{v: 1, f: 'A1'}, 2000, 4000, null],
      [{v: 2, f: 'A2'}, 2000, 3700, 4100],
      [{v: 3, f: 'A3'}, 2000, 3110, 4200],
      [{v: 4, f: 'A4'}, 2000, 3600, 4300]
    ]);
  
    var options = {
      title: 'My Title',
      width: 800,
      height: 500,
      hAxis: {
        gridlines: {
          color: 'transparent'
        },
        ticks: [
          {v: 0.5, f: ''},
          {v: 1, f: 'A1'},
          {v: 2, f: 'A2'},
          {v: 3, f: 'A3'},
          {v: 4, f: 'A4'}
        ]
      }
    };
  
    var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  });