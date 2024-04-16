import React from 'react'
import Image from 'next/image'
import { Montserrat, Fraunces } from 'next/font/google'
import image from '@/assets/tabla-comparativa-knoweats.svg'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic']
})

const Diferences = () => {
  return (
    <section
      className='lg:px-16 p-4 lg:pt-10 w-full max-w-screen-2xl'
    >
      <div className='bg-ternary-color flex flex-col items-center py-8 rounded-2xl'>
        <h3 className={`text-lg md:text-xl text-center ${montserrat.className} italic font-light mt-2`}>¿LISTO PARA RECUPERAR TU TIEMPO?</h3>
        <h1 className='text-4xl text-center md:text-5xl font-bold mb-7'>Hacemos tu vida más fácil</h1>
        <Image 
          src={image}
          alt="Tabla comparativa de knoweats"
          className='max-w-screen-lg w-full p-4'
        />
      </div>
    </section>
  )
}

export default Diferences