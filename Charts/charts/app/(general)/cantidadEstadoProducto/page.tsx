'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { fetchCantidadEstadoProducto } from '@/app/Servicios/Api';
import { error } from 'console';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
        indexAxis: 'y' as const,
        elements: {
            bar: {
            borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
            position: 'right' as const,
            },
            title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart',
            },
        },
    };


  useEffect(()=>{

    fetchCantidadEstadoProducto()
        .then(data=>{

            const labelsEstados= data.map((item:any)=> item.status)
            const dataCantidad= data.map((item:any)=>item.cantidad);

            setCharData({
                labels:labelsEstados,
                datasets:[
                    {
                        labels:'Cantidad productos por Estado',
                        data: dataCantidad,
                        backgroundColor:'blue'
                    }
                ]
            })

        })
        .catch((error)=> alert(error))
  },[])

  return (
    <div>

        <Bar data={chardData} options={options}></Bar>
    </div>
  )
}
