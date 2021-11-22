// setup 
    const jasondata = {"Jan": 600, "Feb": 800,"March": 1200,"April": 700,"May": 900,"June": 1300};
    const months = Object.keys(jasondata);
    const number = Object.values(jasondata);
    //console.log(months,number);
    const data = {
      labels: months,
      datasets: [{
        label: 'Numbers of manufactured vehicules',
        data: number,
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
      }]
    };
    const drilldown = {"Jan": {"car": 200, "cycles": 300,
        "bus": 50,
        "plane": 50
    },
    "Feb": {
        "car": 300,
        "cycles": 200,
        "bus": 100,
        "plane": 200
    },
    "March": {
        "car": 500,
        "cycles": 300,
        "bus": 350,
        "plane": 50
    },
    "April": {
        "car": 200,
        "cycles": 100,
        "bus": 150,
        "plane": 150
    },
    "May": {
        "car": 250,
        "cycles": 350,
        "bus": 150,
        "plane": 150
    },
    "June": {
        "car": 500,
        "cycles": 300,
        "bus": 400,
        "plane": 100
    }
}
    //console.log(val);
    var underchart = {
      labels: ['car', 'cycles', 'bus', 'plane'],
      datasets: [{
        label: 'number of produced vehicule',
        data: [],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1
      }]
    };
    // config 
    const config = {
      type: 'bar',
      data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
    var state = 0;

    // render init block
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(
        ctx, 
        config
    );

    function clickHandler(click) {
    const points = myChart.getElementsAtEventForMode(click, 'nearest', { intersect: true }, true);
    if ((points.length) && (state ==0)) {
        const firstPoint = points[0];
        //console.log(points)
        underchart.datasets[0].data=(Object.values(Object.values(drilldown)[firstPoint.index]));
        //console.log(Object.values(drilldown[firstPoint.index]));
        //if (firstPoint.index === 0) {
        myChart.config.data = underchart;
        console.log(myChart.config);
        myChart.update();
        state=1;
        //}
        //const label = myChart.data.labels[firstPoint.index];
        //const value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
    }
}
    ctx.onclick=clickHandler;
    function resetChart(){
      myChart.config.data = data;
      state=0;
      myChart.update();
    }
