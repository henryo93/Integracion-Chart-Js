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

import { fetchValorTotalTipoProdcto } from '@/app/Servicios/Api';
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
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  
};


  useEffect(()=>{

    fetchValorTotalTipoProdcto()
        .then(data=>{

            const labelsTipoProducto= data.map((item:any)=> item.productType)
            const dataValorTotal= data.map((item:any)=>item.valor_total);

            setCharData({
                labels:labelsTipoProducto,
                datasets:[
                    {
                        labels:'Valor total de los productos por tipo',
                        data: dataValorTotal,
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
