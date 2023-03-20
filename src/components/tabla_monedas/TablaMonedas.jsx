import React from 'react'
import MonedasDigitales from '../monedas/MonedasDigitales'
export default function TablaMonedas () {
  return (
    <section className='container__tabla'>
      <table className='tabla__criptomonedas'>
        <thead className='thead__tabla-criptomonedas'>
          <tr>
            <th className='th'>Logos</th>
            <th className='th'>Nombre</th>
            <th className='th'>Precios</th>
            <th className=' th after_responsive'>ATH</th>
          </tr>
        </thead>

        <MonedasDigitales />
      </table>
    </section>
  )
}
