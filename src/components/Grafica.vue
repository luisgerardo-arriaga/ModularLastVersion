<template>
  {{option}}
    <div id="iniG">
      <canvas id="myChart"  width="400" height="400"></canvas>
      <!-- <canvas id="myChart" ></canvas> -->
      <button v-on:click="this.show_gra"> press</button>
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
            myChart:[],
            aux:"",
            ban: true,
          }
      },
      props: {
        totalHuevos: Object,
        option:String
      },
      // mounted(){
      //   this.grafica()
      // },
      
      methods: {
        
        show_gra(){
          if(this.aux != this.option){
            this.ban = true
          }
        
          if(this.ban){
            this.ban = false
            this.aux = this.option
            console.log(this.aux)

            if(this.banGra){
              this.banGra = false
              this.grafica()
            }

            else{
              console.log(3)
              this.myChart.destroy()
              this.grafica()
            }
          }
        },
        grafica(){
          const ctx = document.getElementById('myChart');
          
          // myChart.refresh
          this.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Sabado', 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'], 
              datasets: [{
                label: '',
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