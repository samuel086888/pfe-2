import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-recherche-all',
  templateUrl: './recherche-all.component.html',
  styleUrls: ['./recherche-all.component.css']
})
export class RechercheAllComponent implements OnInit {
  page:any
  doc:any
  chart : any
  aggs1:any
  aggs2:any
  x1: Array<string> = [];
  y1: Array<number> = [];
  x2: Array<string> = [];
  y2: Array<number> = [];
  //adresse du server elasticsearch
  url="http://localhost:9200/echantillon/_search"
  
    constructor(private http:HttpClient) { 
     
    }

  
  ngOnInit(){
    //initialisation des visualisation
    this.chart = new Chart('canvas1', {
    
      })
  
     /*la requette à l'api rest elasticsearch qui envoie 10 enregistrements par defaut et aussi les aggregations par langue et par date*/
     this.http.post(this.url,
      {aggs: {
        nb_par_lang : {
            terms : {field : "langPost",size: 1000}
    },
    nb_par_annee : {
      terms : {field : "formattedDateOfPost" , size: 1000}
}
  }})
  /*recuperation des données sous forme de fichier json*/
    .pipe(map(response => response))
    .subscribe((data)=>{
    
    
      this.page=data
      

      /*recuperation des aggregation pour faire les visualisations*/
      this.aggs1=this.page.aggregations.nb_par_lang.buckets
      this.aggs2=this.page.aggregations.nb_par_annee.buckets
      this.x1=[]
      this.y1=[]
      this.x2=[]
      this.y2=[]
       // console.log(this.aggs2)
          for(let i of this.aggs1)
          
          {
            this.x1.push(i.key)
            this.y1.push(i.doc_count)
            
          }
          for(let i of this.aggs2)
          
          {
            this.x2.push(i.key_as_string)
            this.y2.push(i.doc_count)
            
          }
          
      })
     
  }
  /* recuperation des données */
    onSearchAll(){
     
      this.doc=this.page
    }
    /*visualisation en forme de doughnut en fonction de toutes les langues de la base*/
      Visualisation(){
        this.chart.destroy()
      this.chart = new Chart('canvas1', {
       type:'doughnut',
        data:{
          //absices
          labels:this.x1,
          datasets:[
            {
              //ordonnées
            data:this.y1,
              borderColor:'rgba(236, 247, 245)',
              backgroundColor:[
              'rgba(0,230,118)' ,   
              'rgba(255,64,129)',        
              'rgba(179,157,219)',
              'rgba(245,127,23)',
              ],
              borderWidth:4,
              hoverBackgroundColor:'rgba(236, 247, 245)',
              hoverBorderWidth:5,     
              
            },
            
  
          ],
          
        },
        options:{
          responsive:true,
          legend:{
            position:'top',

          },
          title:{
            display:true,
            text:'Repartion des données en fonctions des langues',
            fontSize:20
          
          },

          
        
        }
  
      })
      
      
    }
    /*visualisation en forme de bar en fonction de toutes les date de la base*/
    Visualisation2(){
      this.chart.destroy()
      this.chart = new Chart('canvas1', {
        type:'bar',
        data:{
          labels:this.x2,
          datasets:[
            {
              label:"data",
              data:this.y2,
              
              backgroundColor:'rgba(11, 107, 84)' ,
              borderColor:'rgba(18, 199, 28)',
              borderWidth:2,
              hoverBackgroundColor:'rgba(255,255,255)'
              
             
            },
          ]
  
        },
        options:{
          title:{
            display:true,
            text:'Visualisation des données en fonctions des dates',
            fontSize:20
          },
        scales: {
          xAxes:[{
            display:false,
            ticks: {
              beginAtZero: true,
              fontColor:'rgba(172, 190, 215)',
              
            }
          }],

            yAxes: [{
              display:true,
              ticks: {
                beginAtZero: true,
                fontColor:'rgba(18, 199, 28)',
                
              }
            }]
          
          
        }
      }
      })
      
    }
    
  }


