import React from 'react'

const Header = () => {
  return (
    <>
      <header className=' text-black | font-header | p-8 | flex | flex-col | justify-center | items-center | gap-6'>
        <h1 className='text-2xl | text-center'>Queridos Reyes Magos ...</h1>
        <img
          src='https://fotografias.lasexta.com/clipping/cmsimages01/2021/01/05/DAE96D97-478A-4926-9ED6-CEC0E49AE108/default.jpg?crop=1300,731,x0,y12&width=1900&height=1069&optimize=low'
          alt='imagen de los tres reyes magos'
          className='w-full | h-full | object-contain | object-center | rounded-2xl | md:object-cover md:h-[30rem]'
        />
      </header>
    </>
  )
}

export default Header
