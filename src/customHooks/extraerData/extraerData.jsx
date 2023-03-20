import React, { useState, useEffect } from 'react';
import monedasDigitales_api from '../../api_services/monedasDigitales_api';

const useExtraerData = () => {
  const [obtenerData, setObtenerDataCripto] = useState([])
  useEffect(() => {
    monedasDigitales_api().then((data) => setObtenerDataCripto(data.data))
  }, [])
  console.log(obtenerData)

  return obtenerData
}
export default useExtraerData
