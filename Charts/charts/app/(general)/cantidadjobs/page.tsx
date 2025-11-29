'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { fectchjobDepto } from '@/app/Servicios/Api';
import { error } from 'console';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function page() {

    const [chardData, setCharData] = useState({
        labels: [],
        datasets: [{
            labels: '',
            data: [],
            borderColor:''
        }]
    });


    useEffect(()=>{


        fectchjobDepto()
            .then(data =>{
                const labelsData = data.map((item:any)=>`${item.department_id} - ${item.job_id}` )
                const dataDeptos= data.map((item:any) =>parseInt(item.total_empleados) )

                setCharData({
                    labels:labelsData,
                    datasets:[{
                        labels:'Cantidad Empleados',
                        data:dataDeptos,
                        borderColor:'green'
                    }]
                })

            })
            .catch((error)=> alert(error))
    },[])
    return (
        <Line data={chardData}></Line>
    )
}
