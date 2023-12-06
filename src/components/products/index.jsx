import React from 'react'
import Carousel from './Carousel'
import DialogComponent from './DialogComponent'

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

const ProductsCard = ({ title, img, description, links }) => {
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
          <DialogComponent links={links} icon={carro} />
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
