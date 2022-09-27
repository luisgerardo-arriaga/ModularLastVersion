<template>
    <div id="iniG">
      <canvas id="myChart"></canvas>
    </div>
  </template>
  
  <script>
  
  import Chart from 'chart.js/auto';
  
    export default {
    mounted(){
      const ctx = document.getElementById('myChart');
      const myChart = new Chart(ctx, {
      
      type: 'bar',
      data: {
          labels: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 10, 1],
              backgroundColor: [
                  'rgba(0, 173, 181,  0.2)',
                  'rgba(0, 0, 0, 0.2)',
                  'rgba(196, 251, 107, 0.2)'
              ],
              borderColor: [
                  'rgba(0, 173, 181, 1)',
                  'rgba(0, 0, 0, 1)',
                  'rgba(196, 251, 107, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  myChart;
    }
  }
  </script>
  
  <style scoped>
  canvas{
    width: 100px;
    height: 100px;
  }
  #iniG{
    width: 400px;
    height: 200px;
  }
  </style>