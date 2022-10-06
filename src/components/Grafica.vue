<template>
    <div id="iniG">
      
      <canvas id="myChart"  width="400" height="400"></canvas>
      <!-- <canvas id="myChart" ></canvas> -->
      <button v-on:click="this.grafica"> press</button>
    </div>
  </template>
  
  <script>
  
  import { thisTypeAnnotation, tSMethodSignature } from '@babel/types';
import Chart from 'chart.js/auto';
  
    export default {
      data(){
        return{
            totalSeman: [0,15,10,4,3,3,1],
            banGra: true,
            myChart:[]
          }
      },
      props: {
        totalHuevos: Object
      },
      // mounted(){
      //   this.grafica()
      // },
      
      methods: {
        
        grafica(){
          if(this.banGra){
            console.log(1)
            this.banGra = false

          const ctx = document.getElementById('myChart');
          
          // myChart.refresh
          this.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Sabado', 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'], 
                datasets: [{
                    label: '# of Votes',
                    data: this.totalHuevos,
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
                    borderWidth: 1,
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
         
          this.myChart;
          }
          else{
            console.log(3)
            // this.myChart.data.datasets[0].data = this.totalSemana; // Would update the first dataset's value of 'March' to be 50
            // this.myChart.update();
            // this.banGra = true
          this.myChart.destroy()
          const ctx = document.getElementById('myChart');
          
          // myChart.refresh
          this.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Sabado', 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'], 
                datasets: [{
                    label: '# of Votes',
                    data: this.totalHuevos,
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
                    borderWidth: 1,
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
         
          this.myChart;
          
          }
        }
      },
  }
  </script>
  
  <style scoped>
  canvas{
    width: 500px;
    height: 500px;
  }
  #iniG{
    width: 400px;
    height: 500px;
  }
  </style>