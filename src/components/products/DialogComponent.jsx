import React from 'react'
import useModal from '../hooks/useModal'

const closeIcon = (
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

const DialogComponent = ({ links, icon }) => {
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <>
      <button
        className='self-center transition-all stroke-[#00bfd8] | hover:stroke-red-500 hover:scale-110 '
        onClick={openModal}
      >
        {icon}
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
                      {icon}
                      <p className=' font-semibold text-xl'>
                        {`Opción ${idx + 1}`}
                      </p>
                    </a>
                  </li>
                )
              })}
            </ul>
            <button onClick={closeModal}>{closeIcon}</button>
          </div>
        </div>
      )}
    </>
  )
}

export default DialogComponent
