import React from 'react'
import Carousel from './carrusel'
import useModal from '../hooks/useModal'

const carro = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    class='icon icon-tabler icon-tabler-building-store'
    width='44'
    height='44'
    viewBox='0 0 24 24'
    stroke-width='2'
    stroke='inherit'
    fill='none'
    stroke-linecap='round'
    stroke-linejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <line x1='3' y1='21' x2='21' y2='21' />
    <path d='M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4' />
    <line x1='5' y1='21' x2='5' y2='10.85' />
    <line x1='19' y1='21' x2='19' y2='10.85' />
    <path d='M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4' />
  </svg>
)

const cerrarIcon = (
  <svg
    viewBox='0 0 24 24'
    width='44'
    height='44'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    fill='inherit'
    stroke='inherit'
  >
    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
    <g
      id='SVGRepo_tracerCarrier'
      stroke-linecap='round'
      stroke-linejoin='round'
    ></g>
    <g id='SVGRepo_iconCarrier'>
      {' '}
      <title>Close-Circle</title>{' '}
      <g
        id='Page-1'
        stroke='none'
        stroke-width='1'
        fill='none'
        fill-rule='evenodd'
      >
        {' '}
        <g id='Close-Circle'>
          {' '}
          <rect
            id='Rectangle'
            fill-rule='nonzero'
            x='0'
            y='0'
            width='24'
            height='24'
          >
            {' '}
          </rect>{' '}
          <circle
            id='Oval'
            stroke='#e60000'
            stroke-width='2'
            stroke-linecap='round'
            cx='12'
            cy='12'
            r='9'
          >
            {' '}
          </circle>{' '}
          <line
            x1='14.1213'
            y1='9.87866'
            x2='9.8787'
            y2='14.1213'
            id='Path'
            stroke='#e60000'
            stroke-width='2'
            stroke-linecap='round'
          >
            {' '}
          </line>{' '}
          <line
            x1='9.87866'
            y1='9.87866'
            x2='14.1213'
            y2='14.1213'
            id='Path'
            stroke='#e60000'
            stroke-width='2'
            stroke-linecap='round'
          >
            {' '}
          </line>{' '}
        </g>{' '}
      </g>{' '}
    </g>
  </svg>
)

const ProductsCard = ({ title, img, description, links }) => {
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <article className='bg-gray-200 | border-slate-300 | border-2 | p-6 | rounded-xl | flex | flex-col | justify-between | gap-4 | w-full | h-full | min-h-[33rem] | max-w-xs | max-h-[35rem]'>
      <header className='text-2xl | text-center | font-bold'>{title}</header>
      <div className='flex flex-col gap-4 | text-left - min-h-[24rem] justify-between'>
        {typeof img === 'object' ? (
          <Carousel images={img} />
        ) : (
          <img
            src={img}
            className='rounded-lg | flex | relative | w-full | h-[15rem] | | justify-center | items-center | object-cover | object-center'
          />
        )}

        <p>{description}</p>
        {typeof links === 'object' ? (
          <>
            <button
              className='self-center transition-all stroke-[#00bfd8] | hover:stroke-red-500 hover:scale-110 '
              onClick={openModal}
            >
              {carro}
            </button>

            {isOpen && (
              <div
                class='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10'
                onClick={closeModal}
              >
                <div class='flex flex-col justify-between items-center gap-6 w-300 p-20 bg-white rounded-lg shadow-md'>
                  <ul class='flex flex-row flex-wrap justify-center gap-4'>
                    {links.map((el, idx) => {
                      return (
                        <li
                          key={idx}
                          className='| border-2 border-solid border-[#00bfd8] rounded-full p-8'
                        >
                          <a
                            href={el}
                            className='flex flex-col justify-center items-center transition-all stroke-[#00bfd8] | hover:stroke-red-500 hover:scale-110 '
                            target='_blank'
                          >
                            {carro}
                            <p className=' font-semibold text-xl'>
                              {`Opción ${idx + 1}`}
                            </p>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                  <button onClick={closeModal}>{cerrarIcon}</button>
                </div>
              </div>
            )}
          </>
        ) : (
          <a
            href={links}
            target='_blank'
            className='self-center transition-all stroke-[#00bfd8] | hover:stroke-red-500 hover:scale-110 '
          >
            {carro}
          </a>
        )}
      </div>
    </article>
  )
}

export default ProductsCard
