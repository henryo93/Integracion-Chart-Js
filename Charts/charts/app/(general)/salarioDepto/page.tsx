'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { fetchSalarioDepto } from '@/app/Servicios/Api';
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function page() {

     const [chardData, setCharData]= useState({
        labels:[] as string[],
        datasets:[{
            labels:'',
            data:[] as any,
            backgroundColor:[] as any
        }]
      });

      useEffect(()=>{
            fetchSalarioDepto(50)
            .then((data)=>{
                const salario = parseFloat(data[0]?.salario_maximo || 0)

                setCharData({
                    labels:['Salario Maximo', 'Salario Total'],
                    datasets:[{
                        labels:'',
                        data:[salario, 10000-salario],
                        backgroundColor:[ 'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)']  
                    }]
                })
            })
            .catch((error)=> alert(error))
      },[])
  return (
    
    <Pie data={chardData}></Pie>
  )
}
