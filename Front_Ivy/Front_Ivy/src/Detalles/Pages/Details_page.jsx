import React from 'react'
import Details from '../Components/Details'
import { useEffect } from 'react';
import Fetch from '../../Services/Fetch';
import { useParams } from 'react-router-dom';


function Details_page() {
  const { servicioId } = useParams();
  console.log("Servicio ID:", servicioId); // Verifica que el ID se esté recibiendo correctamente
  useEffect(() => {
  Fetch.getData(`api/Servicios/${servicioId}/`); // ¡Ahora sí funciona!
}, [servicioId]);
  return (
    <div>
      <Details />
    </div>
  )
}

export default Details_page
