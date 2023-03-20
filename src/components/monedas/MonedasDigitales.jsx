import React, { useEffect, useState, useContext } from 'react'
import uuid from 'react-uuid'
import extraerData from '../../customHooks/extraerData/extraerData'
import { GlobalContext } from '../../context/global/GlobalContext'
export default function MonedasDigitales () {
  const [respuesta, setRespuesta] = useState([])

  const dataExtraida = extraerData()

  const filtrarData = (input) => {
    const resultadosDeBusqueda = dataExtraida.filter((data) => {
      if (data.name.toString().toLowerCase().includes(input.toLowerCase())) {
        return data
      }
    })
    return resultadosDeBusqueda
  }
  const { input } = useContext(GlobalContext)

  useEffect(() => {
  }, [])

  const listaData = filtrarData(input).map((dataCripto) => {
    return (
      <tr className='filas' key={uuid()}>
        <th className='th'>
          <img
            src={dataCripto.image}
            alt={`logo de ${dataCripto.name}`}
            className='logo_img'
          />
        </th>
        <th className='th th__name'>{dataCripto.id} <span className='span__symbol'>{dataCripto.symbol}</span></th>
        <th className=' th th__precio'>{`$${dataCripto.current_price}`}  <span className={dataCripto.ath_change_percentage < 0 ? 'porcentaje__negativo' : 'porcentaje__positivo'}>{`${dataCripto.ath_change_percentage}%`}</span></th>
        <th className=' th th__ath after_responsive'>{`$${dataCripto.ath}`}</th>
      </tr>
    )
  })
  return <tbody>{listaData.lenght > 0 ? 'Loading...' : listaData}</tbody>
}
