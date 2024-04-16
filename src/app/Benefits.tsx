'use-client'
import { Montserrat, Fraunces } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import FillButton from './FillButton'
import Icon1 from '@/assets/Mesa_de_trabajo_2.svg'
import Icon2 from '@/assets/Mesa_de_trabajo_2_1.svg'
import Icon3 from '@/assets/Mesa_de_trabajo_2_2.svg'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'],
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'],
})


const instructions = [
  {
    icon: Icon1,
    title: "Elige",
    description: "Nuestros chefs cocinan para ti una carta nueva cada semana."
  },
  {
    icon: Icon2,
    title: "Recibe",
    description: "Te lo enviamos a domicilio en transporte refrigerado."
  },
  {
    icon: Icon3,
    title: "Calienta",
    description: "Tu comida aguantará 8 días en tu nevera y la tendrás lista en 3 minutos."
  }
]

const Benefits = () => {
  return (
    <section
      className='lg:px-16 p-4 lg:pt-10 w-full max-w-screen-2xl'
    >
      <div className='bg-ternary-color flex flex-col items-center py-8 rounded-2xl'>
        <h1 className='text-4xl text-center md:text-5xl font-bold mb-7 mt-4'>Come bien en tres pasos</h1>
        <ul className={`w-full flex flex-wrap md:flex-nowrap flex-row justify-center md:gap-16 md:justify-between items-center ${montserrat.className}`}>
          {
            instructions.map((item, index) => {
              return (
                <li key={item.title} className='md:w-1/3 w-full sm:1/2 h-72 md:h-64 flex flex-col justify-start items-center mx-4'>
                  <Image src={item.icon} alt={item.title} className='h-44 w-44 md:h-40 md:w-40'/>
                  <h1 className={`text-xl lg:text-2xl font-bold ${fraunces.className}`}>{index + 1}: {item.title}</h1>
                  <p className="text-center lg:text-lg max-w-72 sm:max-w-none">{item.description}</p>
                </li>
              )
            })
          }
        </ul>
        <FillButton title="¡A COMER SANO!" className="mt-10"/>
      </div>
    </section>
  )
}

export default Benefits