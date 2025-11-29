import axios from "axios"


const API_URL='http://localhost:5000'

export const fetchtSumaSalario = async ()=>{

    const response = await axios.get(`${API_URL}/sum-salario`)
    return response.data.data;
}

export const fectchjobDepto = async ()=>{
    const respose =await axios.get(`${API_URL}/cantidad-empleado-depto`)
    return respose.data.data
}

export const fetchSalarioDepto= async (idDepartamento: number)=>{
    alert(idDepartamento)
    const respose =await axios.get(`${API_URL}/max-salary-depto/${idDepartamento}`)
    return respose.data.data
}


export const fetchValorTotalTipoProdcto = async () => {
    const response = await axios.get(`${API_URL}/valor-total-product-type`)
    return response.data.data
}

export const fetchPromedioCategoriaProducto = async () => {
    const response = await axios.get(`${API_URL}/promedio-valor-category`)
    return response.data.data
}

export const fetchCantidadEstadoProducto = async () => {
    const response = await axios.get(`${API_URL}/cantidad-productos-status`)
    return response.data.data
}

