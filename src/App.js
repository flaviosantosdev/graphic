import React from 'react';
import { CartesianGrid, XAxis, YAxis,Tooltip,Line,LineChart,Legend} from 'recharts';
  
  
const App = () => {
  
// Sample data

const data = [
  {
    "name": "Janeiro",
    "entrada": 3000,
    "saida": 1398,
 
  },
  {
    "name": "Fevereiro",
    "entrada": 2000,
    "saida": 2367,
   
  },
  {
    "name": "Março",
    "entrada": 1350,
    "saida": 1398,
  },
  {
    "name": "Abril",
    "entrada": 3000,
    "saida": 1398,
  },
  {
    "name": "Maio",
    "entrada": 4200,
    "saida": 4398,
   
  },
  {
    "name": "Junho",
    "entrada": 8000,
    "saida": 1398,
  
  },
  {
    "name": "Julho",
    "entrada": 3000,
    "saida": 13598,
   
  },
  {
    "name": "Agosto",
    "entrada": 4500,
    "saida": 1298,
    
  },
  {
    "name": "Setembro",
    "entrada": 7000,
    "saida": 1398,
    
  },
  {
    "name": "Outubro",
    "entrada": 6000,
    "saida": 1398,
   
  },
  {
    "name": "Novembro",
    "entrada": 5300,
    "saida": 1398,
    
 
  },
  {
    "name": "Dezembro",
    "entrada": 2650,
    "saida": 1398,
    
  },

]
 
  
return (
  <div style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column",alignItems:"center"}}>
  <h1 style={{textAlign:"center"}}>Faturamento de 2022 / valores multiplicado por R$1.000</h1>
  
      <LineChart width={1200} height={350} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
        <Line type="monotone" dataKey="entrada" stroke="green" />
        <Line type="monotone" dataKey="saida" stroke="red" />
      </LineChart>
  
  </div>
);
}
  
export default App;