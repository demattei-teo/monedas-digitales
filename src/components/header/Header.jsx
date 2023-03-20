import React, { useContext } from 'react'
import { GlobalContext } from '../../context/global/GlobalContext'

export default function Header () {
  const { input, setInput } = useContext(GlobalContext)

  const handleInputChange = (ev) => {
    setInput(ev.target.value)
  }

  function reload () {
    window.location.reload()
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }

  return (
    <header className='bd__header'>
      <div className='container__header'>
        <form className='form__buscador' onSubmit={handleSubmit}>
          <button type='submit' className='button__submit buttons__header'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-search'
              width='34'
              height='34'
              viewBox='0 0 24 24'
              strokeWidth='1'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
              <path d='M21 21l-6 -6' />
            </svg>
          </button>
          <input
            type='text'
            placeholder='Ingrese la criptomoneda deseada...'
            className='buscador__input'
            value={input}
            onChange={handleInputChange}
          />
        </form>
        <button className='recargar buttons__header' onClick={reload}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-reload'
            width='34'
            height='34'
            viewBox='0 0 24 24'
            strokeWidth='1'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747' />
            <path d='M20 4v5h-5' />
          </svg>
        </button>
      </div>
    </header>
  )
}
