'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

import { fetchPromedioCategoriaProducto } from '@/app/Servicios/Api';
import { error } from 'console';
import React, { useEffect, useState } from 'react'
import { Line  } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


export default function page() {

  const [chardData, setCharData]= useState({
    labels:[],
    datasets:[{
        labels:'',
        data:[],
        backgroundColor:''
    }]
  });

   const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  
};


  useEffect(()=>{

    fetchPromedioCategoriaProducto()
        .then(data=>{

            const labelsCategoria= data.map((item:any)=> item.categoryCode)
            const dataValorPromedio= data.map((item:any)=>item.promedio_valor);

            setCharData({
                labels:labelsCategoria,
                datasets:[
                    
                    {
                        labels:'Valor Promedio de productos por Categorias de Productos',
                        data: dataValorPromedio,
                        backgroundColor:'blue'
                    }
                ]
            })

        })
        .catch((error)=> alert(error))
  },[])

  return (
    <div>

        <Line  data={chardData} options={options}></Line >
    </div>
  )
}
