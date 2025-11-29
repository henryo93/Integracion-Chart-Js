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

import { fetchtSumaSalario } from '@/app/Servicios/Api';
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

    fetchtSumaSalario()
        .then(data=>{

            const labelsDeptos= data.map((item:any)=> item.department_id)
            const salarioData= data.map((item:any)=>item.salario_total);

            setCharData({
                labels:labelsDeptos,
                datasets:[
                    {
                        labels:'Salario Totales',
                        data: salarioData,
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
